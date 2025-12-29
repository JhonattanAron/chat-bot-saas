import { NextResponse } from "next/server"

interface Lead {
  email: string
  nombre_empresa: string
  fuente: string
  nivel_interes: "alto" | "medio" | "bajo"
  razon: string
}

export async function POST(request: Request) {
  try {
    const { leads } = await request.json()

    if (!leads || !Array.isArray(leads)) {
      return NextResponse.json({ error: "Leads no proporcionados" }, { status: 400 })
    }

    // Mock email sending result
    const emailResults = leads.map((lead: Lead) => ({
      email: lead.email,
      empresa: lead.nombre_empresa,
      estado: Math.random() > 0.2 ? "enviado" : "fallido",
      fecha_envio: new Date().toISOString(),
    }))

    return NextResponse.json(emailResults)
  } catch (error) {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
