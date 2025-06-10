"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Plus, Trash2, Key, ExternalLink } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ApiKey {
  id: string
  name: string
  service: string
  key: string
  createdAt: string
}

interface ApiKeyManagerProps {
  language?: "en" | "es"
}

export function ApiKeyManager({ language = "en" }: ApiKeyManagerProps) {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "OpenAI API",
      service: "openai",
      key: "sk-1234567890abcdef",
      createdAt: "2024-01-15",
    },
  ])
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyService, setNewKeyService] = useState("")
  const [newKeyValue, setNewKeyValue] = useState("")
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({})

  const compatibleApps = [
    {
      name: "OpenAI",
      description: language === "en" ? "GPT models and AI completions" : "Modelos GPT y completaciones de IA",
      icon: "🤖",
      category: "AI",
      website: "https://openai.com",
    },
    {
      name: "Stripe",
      description: language === "en" ? "Payment processing and billing" : "Procesamiento de pagos y facturación",
      icon: "💳",
      category: "Payments",
      website: "https://stripe.com",
    },
    {
      name: "SendGrid",
      description: language === "en" ? "Email delivery and marketing" : "Entrega de emails y marketing",
      icon: "📧",
      category: "Email",
      website: "https://sendgrid.com",
    },
    {
      name: "Twilio",
      description: language === "en" ? "SMS and voice communications" : "Comunicaciones SMS y voz",
      icon: "📱",
      category: "Communications",
      website: "https://twilio.com",
    },
    {
      name: "Google Calendar",
      description: language === "en" ? "Calendar and scheduling" : "Calendario y programación",
      icon: "📅",
      category: "Calendar",
      website: "https://calendar.google.com",
    },
    {
      name: "Slack",
      description:
        language === "en" ? "Team communication and notifications" : "Comunicación de equipo y notificaciones",
      icon: "💬",
      category: "Communications",
      website: "https://slack.com",
    },
    {
      name: "Shopify",
      description: language === "en" ? "E-commerce and inventory management" : "E-commerce y gestión de inventario",
      icon: "🛍️",
      category: "E-commerce",
      website: "https://shopify.com",
    },
    {
      name: "HubSpot",
      description: language === "en" ? "CRM and marketing automation" : "CRM y automatización de marketing",
      icon: "📊",
      category: "CRM",
      website: "https://hubspot.com",
    },
  ]

  const addApiKey = () => {
    if (newKeyName && newKeyService && newKeyValue) {
      const newKey: ApiKey = {
        id: Date.now().toString(),
        name: newKeyName,
        service: newKeyService,
        key: newKeyValue,
        createdAt: new Date().toISOString().split("T")[0],
      }
      setApiKeys([...apiKeys, newKey])
      setNewKeyName("")
      setNewKeyService("")
      setNewKeyValue("")
    }
  }

  const removeApiKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id))
  }

  const toggleKeyVisibility = (id: string) => {
    setShowKeys((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const maskKey = (key: string) => {
    if (key.length <= 8) return "*".repeat(key.length)
    return key.substring(0, 4) + "*".repeat(key.length - 8) + key.substring(key.length - 4)
  }

  return (
    <div className="space-y-6">
      {/* API Key Manager */}
      <Card className="futuristic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
              <Key className="h-4 w-4 text-primary-foreground" />
            </div>
            {language === "en" ? "API Key Manager" : "Administrador de Claves API"}
          </CardTitle>
          <CardDescription>
            {language === "en"
              ? "Manage your API keys for external service integrations"
              : "Administra tus claves API para integraciones con servicios externos"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add new API key */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3">
              <Input
                placeholder={language === "en" ? "Key name" : "Nombre de clave"}
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="glass-effect border-border/50"
              />
            </div>
            <div className="col-span-3">
              <Select value={newKeyService} onValueChange={setNewKeyService}>
                <SelectTrigger className="glass-effect border-border/50">
                  <SelectValue placeholder={language === "en" ? "Service" : "Servicio"} />
                </SelectTrigger>
                <SelectContent className="glass-effect">
                  {compatibleApps.map((app) => (
                    <SelectItem key={app.name.toLowerCase()} value={app.name.toLowerCase()}>
                      {app.icon} {app.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-5">
              <Input
                type="password"
                placeholder={language === "en" ? "API Key" : "Clave API"}
                value={newKeyValue}
                onChange={(e) => setNewKeyValue(e.target.value)}
                className="glass-effect border-border/50"
              />
            </div>
            <div className="col-span-1">
              <Button
                onClick={addApiKey}
                size="icon"
                disabled={!newKeyName || !newKeyService || !newKeyValue}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Existing API keys */}
          {apiKeys.length > 0 && (
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                {language === "en" ? "Saved API Keys" : "Claves API Guardadas"}
              </Label>
              {apiKeys.map((apiKey) => (
                <div
                  key={apiKey.id}
                  className="flex items-center justify-between p-4 border border-border/50 rounded-lg glass-effect"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{apiKey.name}</div>
                      <div className="text-sm text-muted-foreground font-mono">
                        {showKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="capitalize bg-gradient-to-r from-muted to-muted/80">
                      {apiKey.service}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleKeyVisibility(apiKey.id)}
                      className="h-8 w-8"
                    >
                      {showKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeApiKey(apiKey.id)}
                      className="h-8 w-8 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Separator className="bg-border/50" />

      {/* Compatible Apps */}
      <Card className="futuristic-card">
        <CardHeader>
          <CardTitle className="text-xl">
            {language === "en" ? "Compatible Apps & Services" : "Apps y Servicios Compatibles"}
          </CardTitle>
          <CardDescription>
            {language === "en"
              ? "Popular services you can integrate with your bot functions"
              : "Servicios populares que puedes integrar con las funciones de tu bot"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compatibleApps.map((app) => (
              <div
                key={app.name}
                className="flex items-center justify-between p-4 border border-border/50 rounded-lg glass-effect hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/20 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{app.icon}</div>
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {app.name}
                      <Badge
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20"
                      >
                        {app.category}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{app.description}</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                  <a href={app.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
