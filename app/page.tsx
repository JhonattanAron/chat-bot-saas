import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  ArrowRight,
  Bot,
  MessageSquare,
  Zap,
  Globe,
  ShieldCheck,
  BarChart3,
  Sparkles,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Bot className="h-6 w-6" />
            <span>ChatBot Builder</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Lanzamiento 2025
              </Badge>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Crea Chatbots Inteligentes en Minutos
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Construye, personaliza y despliega chatbots para tu sitio web y WhatsApp Business sin necesidad de
                  programar.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/register">
                  <Button size="lg" className="gap-1">
                    Comenzar Gratis <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg">
                    Ver Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Características Principales
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Todo lo que necesitas para crear chatbots efectivos para tu negocio.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Chatbots para Web</h3>
                <p className="text-center text-muted-foreground">
                  Integra fácilmente chatbots personalizados en tu sitio web para mejorar la experiencia del usuario.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Integración con WhatsApp</h3>
                <p className="text-center text-muted-foreground">
                  Conecta tu cuenta de WhatsApp Business para automatizar respuestas y gestionar interacciones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sin Código</h3>
                <p className="text-center text-muted-foreground">
                  Interfaz intuitiva de arrastrar y soltar para construir y personalizar tus chatbots sin conocimientos
                  técnicos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seguridad Avanzada</h3>
                <p className="text-center text-muted-foreground">
                  Protección de datos y cumplimiento de normativas para mantener segura la información de tus clientes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Analíticas Detalladas</h3>
                <p className="text-center text-muted-foreground">
                  Monitorea el rendimiento de tus chatbots con estadísticas y reportes detallados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">IA Avanzada</h3>
                <p className="text-center text-muted-foreground">
                  Potenciado por modelos de lenguaje de última generación para respuestas naturales y precisas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Planes y Precios</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Elige el plan que mejor se adapte a las necesidades de tu negocio.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Plan Básico */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <CardDescription>Ideal para pequeños negocios y startups</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$1</span>
                    <span className="text-muted-foreground"> /mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">O $10.8 /año (ahorra 10%)</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>5,000 preguntas al mes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>1 chatbot</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Integración web básica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Soporte por email</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comenzar</Button>
                </CardFooter>
              </Card>

              {/* Plan Estándar */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Estándar</CardTitle>
                  <CardDescription>Para negocios en crecimiento</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$3</span>
                    <span className="text-muted-foreground"> /mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">O $32.4 /año (ahorra 10%)</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>20,000 preguntas al mes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>3 chatbots</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Integración web y WhatsApp</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comenzar</Button>
                </CardFooter>
              </Card>

              {/* Plan Profesional */}
              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary/5">
                  <div className="flex justify-between items-center">
                    <CardTitle>Profesional</CardTitle>
                    <Badge>Popular</Badge>
                  </div>
                  <CardDescription>Para empresas medianas</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$7</span>
                    <span className="text-muted-foreground"> /mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">O $75.6 /año (ahorra 10%)</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>50,000 preguntas al mes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>10 chatbots</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Integraciones avanzadas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Analíticas avanzadas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Soporte 24/7</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comenzar</Button>
                </CardFooter>
              </Card>

              {/* Plan Empresarial */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Empresarial</CardTitle>
                  <CardDescription>Para grandes empresas</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$13</span>
                    <span className="text-muted-foreground"> /mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">O $140.4 /año (ahorra 10%)</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>100,000 preguntas al mes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Chatbots ilimitados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>API personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Integraciones personalizadas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Soporte dedicado</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contactar Ventas</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Casos de Uso</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Nuestros chatbots se adaptan a múltiples industrias y necesidades.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Restaurantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatiza reservas, responde preguntas sobre el menú y horarios, y mejora la experiencia del
                    cliente.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases/restaurants">
                    <Button variant="outline" className="w-full">
                      Ver Ejemplo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tiendas Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Asiste a los clientes con información de productos, seguimiento de pedidos y políticas de
                    devolución.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases/online-stores">
                    <Button variant="outline" className="w-full">
                      Ver Ejemplo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Soporte al Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Responde preguntas frecuentes, resuelve problemas comunes y escala casos complejos a agentes
                    humanos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases/customer-support">
                    <Button variant="outline" className="w-full">
                      Ver Ejemplo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inmobiliarias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Proporciona información sobre propiedades, programa visitas y responde consultas de potenciales
                    compradores.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases/real-estate">
                    <Button variant="outline" className="w-full">
                      Ver Ejemplo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Facilita la programación, reprogramación y cancelación de citas para servicios profesionales.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases/appointments">
                    <Button variant="outline" className="w-full">
                      Ver Ejemplo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Educación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Asiste a estudiantes con información sobre cursos, fechas importantes y recursos educativos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases/education">
                    <Button variant="outline" className="w-full">
                      Ver Ejemplo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Comienza a Construir Tu Chatbot Hoy
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Regístrate gratis y crea tu primer chatbot en minutos. No se requiere tarjeta de crédito.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/register">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Comenzar Gratis <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Contactar Ventas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2 text-sm">
            <Bot className="h-5 w-5" />
            <span>© 2025 ChatBot Builder. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/terms" className="underline underline-offset-4">
              Términos
            </Link>
            <Link href="/privacy" className="underline underline-offset-4">
              Privacidad
            </Link>
            <Link href="/contact" className="underline underline-offset-4">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
