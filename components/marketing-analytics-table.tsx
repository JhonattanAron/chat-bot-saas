import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Phone, Building2 } from "lucide-react"

interface MarketingLead {
  id: string
  email: string
  name: string
  company: string
  phone?: string
  status: "sent" | "opened" | "replied" | "failed"
  sentAt: string
  potential: "high" | "medium" | "low"
}

const mockData: MarketingLead[] = [
  {
    id: "1",
    email: "ceo@techvision.com",
    name: "Carlos Rodriguez",
    company: "TechVision Solutions",
    phone: "+34 612 345 678",
    status: "replied",
    sentAt: "2024-03-15 10:30",
    potential: "high",
  },
  {
    id: "2",
    email: "marta.sanz@innovate.es",
    name: "Marta Sanz",
    company: "Innovate SL",
    status: "opened",
    sentAt: "2024-03-15 11:15",
    potential: "medium",
  },
  {
    id: "3",
    email: "info@construcciones-perez.com",
    name: "Juan Perez",
    company: "Construcciones Perez",
    phone: "+34 912 888 777",
    status: "sent",
    sentAt: "2024-03-15 09:00",
    potential: "low",
  },
]

export function MarketingAnalyticsTable() {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Contacto</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Potencial</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <div className="font-bold">{lead.name}</div>
                <div className="text-xs text-muted-foreground">{lead.email}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {lead.company}
                </div>
              </TableCell>
              <TableCell>
                {lead.phone ? (
                  <div className="flex items-center gap-1 text-sm">
                    <Phone className="h-3 w-3" />
                    {lead.phone}
                  </div>
                ) : (
                  <span className="text-xs italic opacity-50">N/A</span>
                )}
              </TableCell>
              <TableCell>
                {lead.status === "replied" && (
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Respondido
                  </Badge>
                )}
                {lead.status === "opened" && (
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Abierto
                  </Badge>
                )}
                {lead.status === "sent" && (
                  <Badge variant="outline" className="text-muted-foreground">
                    Enviado
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-xs">{lead.sentAt}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    lead.potential === "high" ? "default" : lead.potential === "medium" ? "secondary" : "outline"
                  }
                >
                  {lead.potential.toUpperCase()}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
