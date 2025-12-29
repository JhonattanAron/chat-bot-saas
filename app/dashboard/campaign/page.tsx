"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LeadsTable } from "@/components/leads-table";
import { EmailResultsTable } from "@/components/email-results-table";
import { MarketingAnalyticsTable } from "@/components/marketing-analytics-table";
import { AlertCircle, CheckCircle2, BarChart3, Send, Zap } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AutomationDialog,
  type AutomationConfig,
} from "@/components/automation-dialog";

interface Lead {
  email: string;
  nombre_empresa: string;
  fuente: string;
  nivel_interes: "alto" | "medio" | "bajo";
  razon: string;
}

interface EmailResult {
  email: string;
  empresa: string;
  estado: "enviado" | "fallido";
  fecha_envio: string;
  mensaje_error?: string;
}

export interface PlainTextExport {
  _id: string;
  filename: string;
  batch_id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function CampaignPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [plainTextExports, setPlainTextExports] = useState<PlainTextExport[]>(
    []
  );
  const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set());
  const [emailResults, setEmailResults] = useState<EmailResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSendingEmails, setIsSendingEmails] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [emailsSent, setEmailsSent] = useState(false);
  const [isAutomationOpen, setIsAutomationOpen] = useState(false);

  const handleGetNames = async () => {
    try {
      const response = await fetch("http://localhost:8081/batches/get/text");
      if (!response.ok) throw new Error("Error al obtener los textos planos");
      const data: PlainTextExport[] = await response.json();
      setPlainTextExports(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  useEffect(() => {
    handleGetNames();
  }, []);

  const handleAnalyzeLeads = async () => {
    setIsAnalyzing(true);
    setError(null);
    setLeads([]);
    setSelectedLeads(new Set());

    try {
      const textResponse = await fetch("/api/source/text");
      if (!textResponse.ok) throw new Error("Error al obtener el texto");
      const { text } = await textResponse.json();

      const aiResponse = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!aiResponse.ok) throw new Error("Error al analizar el texto");

      const analyzedLeads: Lead[] = await aiResponse.json();
      setLeads(analyzedLeads);
      setAnalysisComplete(true);

      const allEmails = new Set(analyzedLeads.map((l) => l.email));
      setSelectedLeads(allEmails);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const toggleLeadSelection = (email: string) => {
    const newSelected = new Set(selectedLeads);
    if (newSelected.has(email)) {
      newSelected.delete(email);
    } else {
      newSelected.add(email);
    }
    setSelectedLeads(newSelected);
  };

  const handleSendEmails = async () => {
    if (selectedLeads.size === 0) {
      setError("Selecciona al menos un cliente potencial");
      return;
    }

    setIsSendingEmails(true);
    setError(null);
    setEmailResults([]);

    try {
      const leadsToSend = leads.filter((l) => selectedLeads.has(l.email));
      const emailResponse = await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leads: leadsToSend }),
      });

      if (!emailResponse.ok) throw new Error("Error al enviar correos");

      const results: EmailResult[] = await emailResponse.json();
      setEmailResults(results);
      setEmailsSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar correos");
    } finally {
      setIsSendingEmails(false);
    }
  };

  const handleStartAutomation = async (config: AutomationConfig) => {
    setIsAutomationOpen(false);
    setIsAnalyzing(true);
    setError(null);

    try {
      console.log(
        "[v0] Iniciando Automatización Total (Búsqueda + Temas + Envíos):",
        config
      );

      // Simulación de búsqueda de nichos y creación de tabla de temas
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setAnalysisComplete(true);
      // En un flujo real, aquí se llamaría al backend para iniciar el scraper de nichos
      // y la generación de contenidos con IA.
    } catch (err) {
      setError("Error al iniciar la automatización total");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <DashboardLayout>
      <main className="min-h-screen bg-background py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Marketing Automático
              </h1>
              <p className="text-muted-foreground">
                Gestiona tus campañas y analiza el impacto en tus clientes
                potenciales.
              </p>
            </div>
            <Button
              size="lg"
              className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg shadow-yellow-500/20"
              onClick={() => setIsAutomationOpen(true)}
            >
              <Zap className="h-5 w-5 fill-current" />
              Automatizar Campaña
            </Button>
          </div>

          <Tabs defaultValue="campaign" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="campaign" className="flex items-center gap-2">
                <Send className="h-4 w-4" /> Nueva Campaña
              </TabsTrigger>
              <TabsTrigger value="tracking" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" /> Seguimiento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="campaign">
              <AutomationDialog
                open={isAutomationOpen}
                onOpenChange={setIsAutomationOpen}
                onAutomate={handleStartAutomation}
              />

              {error && (
                <Alert variant="destructive" className="mb-8">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {!analysisComplete && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Paso 1: Selecciona el Batch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select>
                      <SelectTrigger className="w-full md:w-64 my-3">
                        <SelectValue placeholder="Selecciona el Batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {plainTextExports.map((exportItem) => (
                            <SelectItem
                              key={exportItem._id}
                              value={exportItem.content}
                            >
                              {exportItem.filename}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleAnalyzeLeads}
                      disabled={isAnalyzing}
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {isAnalyzing
                        ? "Analizando..."
                        : "Analizar clientes potenciales"}
                    </Button>
                  </CardContent>
                </Card>
              )}

              {analysisComplete && leads.length > 0 && !emailsSent && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>
                      Paso 2: Confirmar clientes ({selectedLeads.size}/
                      {leads.length} seleccionados)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LeadsTable
                      leads={leads}
                      selectedLeads={selectedLeads}
                      onToggleSelection={toggleLeadSelection}
                    />
                    <Button
                      onClick={handleSendEmails}
                      disabled={isSendingEmails || selectedLeads.size === 0}
                      size="lg"
                      className="mt-6 w-full md:w-auto"
                    >
                      {isSendingEmails
                        ? "Enviando correos..."
                        : "Enviar correos"}
                    </Button>
                  </CardContent>
                </Card>
              )}

              {emailsSent && emailResults.length > 0 && (
                <Card className="mb-8 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      Paso 3: Resultados del envío
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                      <div className="bg-white rounded p-4 border shadow-sm text-center">
                        <p className="text-sm text-muted-foreground">
                          Exitosos
                        </p>
                        <p className="text-2xl font-bold text-green-700">
                          {
                            emailResults.filter((r) => r.estado === "enviado")
                              .length
                          }
                        </p>
                      </div>
                      <div className="bg-white rounded p-4 border shadow-sm text-center">
                        <p className="text-sm text-muted-foreground">
                          Fallidos
                        </p>
                        <p className="text-2xl font-bold text-red-700">
                          {
                            emailResults.filter((r) => r.estado === "fallido")
                              .length
                          }
                        </p>
                      </div>
                    </div>
                    <EmailResultsTable results={emailResults} />
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="tracking">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Clientes Potenciales</CardTitle>
                </CardHeader>
                <CardContent>
                  <MarketingAnalyticsTable />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </DashboardLayout>
  );
}
