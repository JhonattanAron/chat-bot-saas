"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Loader2, Trash2, Plus, Save, Sparkles, Send, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { ProductModal } from "@/components/product-modal"
import { ChatWidgetPreview } from "@/components/chat-widget-preview"
import { FunctionModal } from "@/components/function-modal"

interface BotData {
  id: string
  name: string
  type: "web" | "whatsapp"
  status: "online" | "offline" | "maintenance"
  description: string
  welcomeMessage: string
  primaryColor: string
  faqs: Array<{ question: string; answer: string; category: string }>
  products: Array<{ name: string; price: string; description: string; available: boolean; stock?: string }>
  whatsappNumber?: string
  apiKey?: string
  useCase?: string
  businessDescription?: string
  chatSettings?: {
    title: string
    subtitle: string
    primaryColor: string
    buttonColor: string
    bubbleColor: string
    userBubbleColor: string
    headerStyle: "gradient" | "solid"
    logo?: string
    showLogo: boolean
    position: "right" | "left"
    initialMessage: string
    placeholderText: string
  }
}

export default function EditBotPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [bot, setBot] = useState<BotData | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isGeneratingFaqs, setIsGeneratingFaqs] = useState(false)
  const [isChatPreviewOpen, setIsChatPreviewOpen] = useState(false)
  const [functions, setFunctions] = useState<any[]>([])
  const [isFunctionModalOpen, setIsFunctionModalOpen] = useState(false)
  const [isChatTestOpen, setIsChatTestOpen] = useState(false)
  const [testMessages, setTestMessages] = useState([
    {
      id: "1",
      content: bot?.welcomeMessage || "Hello! How can I help you today?",
      sender: "bot" as const,
      timestamp: new Date(),
    },
  ])
  const [testInput, setTestInput] = useState("")
  const router = useRouter()
  const { toast } = useToast()
  const { t, language } = useLanguage()

  // Simulate fetching bot data
  useEffect(() => {
    setIsLoading(true)
    // Mock data - in a real app, you would fetch this from an API
    setTimeout(() => {
      setBot({
        id: params.id,
        name: params.id === "1" ? "Support Bot" : "Sales Bot",
        type: "web",
        status: "online",
        description: "Customer support chatbot for the website",
        welcomeMessage: "Hello! How can I help you today?",
        primaryColor: "#4f46e5",
        useCase: params.id === "1" ? "customerSupport" : "onlineStore",
        businessDescription: "",
        faqs: [
          {
            question: "What are your business hours?",
            answer: "Our business hours are Monday to Friday, 9am to 5pm.",
            category: "General",
          },
          {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
            category: "Account",
          },
        ],
        products: [
          {
            name: "Premium Plan",
            price: "$99.99",
            description: "Our premium plan includes all features and priority support.",
            available: true,
            stock: "150",
          },
          {
            name: "Basic Plan",
            price: "$49.99",
            description: "Our basic plan includes essential features for small businesses.",
            available: true,
          },
        ],
        chatSettings: {
          title: "ChatBot Support",
          subtitle: "Virtual Assistant",
          primaryColor: "#4f46e5",
          buttonColor: "#4f46e5",
          bubbleColor: "#f9fafb",
          userBubbleColor: "#000000",
          headerStyle: "gradient",
          showLogo: true,
          position: "right",
          initialMessage: "Hello! How can I help you today?",
          placeholderText: "Type your message...",
        },
      })
      setIsLoading(false)
    }, 1000)
  }, [params.id])

  const handleAddFunction = (functionData: any) => {
    setFunctions([...functions, functionData])
  }

  const handleRemoveFunction = (index: number) => {
    const updatedFunctions = functions.filter((_, i) => i !== index)
    setFunctions(updatedFunctions)
  }

  const handleSendTestMessage = () => {
    if (!testInput.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      content: testInput,
      sender: "user" as const,
      timestamp: new Date(),
    }

    setTestMessages((prev) => [...prev, userMessage])
    setTestInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "This is a test response from your bot. In the live version, this would be processed by your AI model with the configured FAQs, products, and functions.",
        sender: "bot" as const,
        timestamp: new Date(),
      }
      setTestMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Changes saved",
        description: "Your bot has been updated successfully.",
      })
    }, 1500)
  }

  const handleAddFaq = () => {
    if (!bot) return
    setBot({
      ...bot,
      faqs: [
        ...bot.faqs,
        {
          question: "",
          answer: "",
          category: "General",
        },
      ],
    })
  }

  const handleUpdateFaq = (index: number, field: "question" | "answer" | "category", value: string) => {
    if (!bot) return
    const updatedFaqs = [...bot.faqs]
    updatedFaqs[index] = { ...updatedFaqs[index], [field]: value }
    setBot({ ...bot, faqs: updatedFaqs })
  }

  const handleRemoveFaq = (index: number) => {
    if (!bot) return
    const updatedFaqs = bot.faqs.filter((_, i) => i !== index)
    setBot({ ...bot, faqs: updatedFaqs })
  }

  const handleAddProduct = (product: any, method: "manual" | "api") => {
    if (!bot) return
    if (method === "manual") {
      setBot({
        ...bot,
        products: [...bot.products, product],
      })
    } else {
      // En un caso real, aquí se procesaría la configuración de la API
      toast({
        title: language === "en" ? "API Connected" : "API Conectada",
        description:
          language === "en"
            ? "Your product API has been connected successfully. Products will be imported automatically."
            : "Tu API de productos ha sido conectada exitosamente. Los productos se importarán automáticamente.",
      })
    }
  }

  const handleRemoveProduct = (index: number) => {
    if (!bot) return
    const updatedProducts = bot.products.filter((_, i) => i !== index)
    setBot({ ...bot, products: updatedProducts })
  }

  const handleGenerateCode = () => {
    toast({
      title: "Code generated",
      description: "The code has been copied to your clipboard.",
    })
  }

  const handleGenerateFaqs = () => {
    if (!bot || !bot.businessDescription) {
      toast({
        title: language === "en" ? "Missing information" : "Información faltante",
        description:
          language === "en"
            ? "Please provide a business description to generate FAQs."
            : "Por favor proporciona una descripción del negocio para generar preguntas frecuentes.",
        variant: "destructive",
      })
      return
    }

    setIsGeneratingFaqs(true)

    // Simulate generating FAQs with AI
    setTimeout(() => {
      const generatedFaqs = [
        {
          question: language === "en" ? "What makes your products unique?" : "¿Qué hace que tus productos sean únicos?",
          answer:
            language === "en"
              ? "Our products are designed with cutting-edge technology and user-centric approach, making them intuitive and powerful."
              : "Nuestros productos están diseñados con tecnología de vanguardia y un enfoque centrado en el usuario, haciéndolos intuitivos y potentes.",
          category: "Products",
        },
        {
          question: language === "en" ? "Do you offer customer support?" : "¿Ofrecen soporte al cliente?",
          answer:
            language === "en"
              ? "Yes, we provide 24/7 customer support through various channels including chat, email, and phone."
              : "Sí, proporcionamos soporte al cliente 24/7 a través de varios canales, incluyendo chat, correo electrónico y teléfono.",
          category: "Support",
        },
        {
          question: language === "en" ? "What payment methods do you accept?" : "¿Qué métodos de pago aceptan?",
          answer:
            language === "en"
              ? "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing options."
              : "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias. Para clientes empresariales, también ofrecemos opciones de facturación.",
          category: "Billing",
        },
      ]

      if (bot) {
        setBot({
          ...bot,
          faqs: [...bot.faqs, ...generatedFaqs],
        })
      }

      setIsGeneratingFaqs(false)

      toast({
        title: language === "en" ? "FAQs Generated" : "Preguntas Frecuentes Generadas",
        description:
          language === "en"
            ? "AI has generated new FAQs based on your business description."
            : "La IA ha generado nuevas preguntas frecuentes basadas en la descripción de tu negocio.",
      })
    }, 2000)
  }

  const handleUpdateChatSettings = (field: string, value: any) => {
    if (!bot) return
    setBot({
      ...bot,
      chatSettings: {
        ...bot.chatSettings!,
        [field]: value,
      },
    })
  }

  function adjustColor(hex: string, amount: number) {
    return (
      "#" +
      hex
        .replace(/^#/, "")
        .replace(/../g, (color) =>
          ("0" + Math.min(255, Math.max(0, Number.parseInt(color, 16) + amount)).toString(16)).substr(-2),
        )
    )
  }

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p>Loading bot data...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!bot) {
    return (
      <DashboardLayout>
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight">Bot not found</h2>
            <p className="text-muted-foreground">The bot you're looking for doesn't exist or you don't have access.</p>
            <Button className="mt-4" onClick={() => router.push("/dashboard/bots")}>
              Back to Bots
            </Button>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-2 sm:p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => router.back()} type="button">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{bot.name}</h1>
                <Badge
                  variant={bot.status === "online" ? "default" : bot.status === "maintenance" ? "outline" : "secondary"}
                >
                  {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">Manage your chatbot settings, FAQs, and products.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => router.push(`/dashboard/bots/${bot.id}/preview`)}
              type="button"
              className="w-full sm:w-auto"
            >
              Preview
            </Button>
            <Button onClick={handleSave} disabled={isSaving} type="button" className="w-full sm:w-auto">
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="basic" className="space-y-4">
          {/* Mobile-optimized TabsList */}
          <div className="w-full overflow-hidden">
            <TabsList className="w-full h-auto p-1 grid grid-cols-3 md:grid-cols-6 gap-0.5 bg-muted rounded-lg">
              <TabsTrigger
                value="basic"
                className="text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                Basic
              </TabsTrigger>
              <TabsTrigger
                value="faqs"
                className="text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                FAQs
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                Products
              </TabsTrigger>
              <TabsTrigger
                value="functions"
                className="text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                Functions
              </TabsTrigger>
              <TabsTrigger
                value="chat-customization"
                className="text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                Chat
              </TabsTrigger>
              <TabsTrigger
                value="test-chat"
                className="text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                Test
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bot Information</CardTitle>
                <CardDescription>Basic information about your chatbot.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bot-name">Bot Name</Label>
                  <Input id="bot-name" value={bot.name} onChange={(e) => setBot({ ...bot, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bot-description">Description</Label>
                  <Textarea
                    id="bot-description"
                    value={bot.description}
                    onChange={(e) => setBot({ ...bot, description: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="welcome-message">Welcome Message</Label>
                  <Textarea
                    id="welcome-message"
                    value={bot.welcomeMessage}
                    onChange={(e) => setBot({ ...bot, welcomeMessage: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bot-status">Status</Label>
                  <Select
                    value={bot.status}
                    onValueChange={(value) => setBot({ ...bot, status: value as "online" | "offline" | "maintenance" })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {bot.type === "whatsapp" && (
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-number">WhatsApp Business Number</Label>
                    <Input
                      id="whatsapp-number"
                      value={bot.whatsappNumber || ""}
                      onChange={(e) => setBot({ ...bot, whatsappNumber: e.target.value })}
                      placeholder="+1234567890"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={bot.primaryColor}
                      onChange={(e) => setBot({ ...bot, primaryColor: e.target.value })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      id="primary-color-hex"
                      value={bot.primaryColor}
                      onChange={(e) => setBot({ ...bot, primaryColor: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faqs" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Add questions and answers that your chatbot will respond to.</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button onClick={handleAddFaq} className="gap-1 w-full sm:w-auto" type="button">
                    <Plus className="h-4 w-4" />
                    Add FAQ
                  </Button>
                  <Button
                    onClick={handleGenerateFaqs}
                    variant="outline"
                    className="gap-1 w-full sm:w-auto"
                    disabled={isGeneratingFaqs}
                    type="button"
                  >
                    {isGeneratingFaqs ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Generate FAQs
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Label htmlFor="business-description">Business Description</Label>
                  <Textarea
                    id="business-description"
                    value={bot.businessDescription || ""}
                    onChange={(e) => setBot({ ...bot, businessDescription: e.target.value })}
                    placeholder={
                      language === "en"
                        ? "Provide a clear description of your business to help generate relevant FAQs..."
                        : "Proporciona una descripción clara de tu negocio para ayudar a generar preguntas frecuentes relevantes..."
                    }
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "A detailed description helps our AI generate more accurate and relevant FAQs for your business."
                      : "Una descripción detallada ayuda a nuestra IA a generar preguntas frecuentes más precisas y relevantes para tu negocio."}
                  </p>
                </div>

                <Accordion type="multiple" className="space-y-4">
                  {bot.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border rounded-md p-2">
                      <div className="flex items-center justify-between">
                        <AccordionTrigger className="hover:no-underline flex-1 text-left">
                          {faq.question || "New FAQ Item"}
                        </AccordionTrigger>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemoveFaq(index)
                          }}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove FAQ</span>
                        </Button>
                      </div>
                      <AccordionContent className="space-y-4 pt-2">
                        <div className="space-y-2">
                          <Label htmlFor={`faq-category-${index}`}>Category</Label>
                          <Select
                            value={faq.category}
                            onValueChange={(value) => handleUpdateFaq(index, "category", value)}
                          >
                            <SelectTrigger id={`faq-category-${index}`}>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="General">General</SelectItem>
                              <SelectItem value="Account">Account</SelectItem>
                              <SelectItem value="Billing">Billing</SelectItem>
                              <SelectItem value="Products">Products</SelectItem>
                              <SelectItem value="Shipping">Shipping</SelectItem>
                              <SelectItem value="Returns">Returns</SelectItem>
                              <SelectItem value="Support">Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`faq-question-${index}`}>Question</Label>
                          <Input
                            id={`faq-question-${index}`}
                            value={faq.question}
                            onChange={(e) => handleUpdateFaq(index, "question", e.target.value)}
                            placeholder="What are your business hours?"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`faq-answer-${index}`}>Answer</Label>
                          <Textarea
                            id={`faq-answer-${index}`}
                            value={faq.answer}
                            onChange={(e) => handleUpdateFaq(index, "answer", e.target.value)}
                            placeholder="Our business hours are Monday to Friday, 9am to 5pm."
                            className="min-h-[100px]"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                {bot.faqs.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground">No FAQs added yet.</p>
                    <Button onClick={handleAddFaq} variant="outline" className="mt-4 gap-1" type="button">
                      <Plus className="h-4 w-4" />
                      Add Your First FAQ
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div>
                  <CardTitle>Products & Services</CardTitle>
                  <CardDescription>Add products or services that your chatbot can recommend.</CardDescription>
                </div>
                <Button onClick={() => setIsProductModalOpen(true)} className="gap-1 w-full sm:w-auto" type="button">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  {bot.products.map((product, index) => (
                    <AccordionItem key={index} value={`product-${index}`} className="border rounded-md p-2">
                      <div className="flex items-center justify-between">
                        <AccordionTrigger className="hover:no-underline flex-1 text-left">
                          <div className="truncate">
                            {product.name || "New Product"}
                            {product.price && ` - ${product.price}`}
                            {product.stock && ` (Stock: ${product.stock})`}
                          </div>
                        </AccordionTrigger>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemoveProduct(index)
                          }}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove Product</span>
                        </Button>
                      </div>
                      <AccordionContent className="space-y-4 pt-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`product-name-${index}`}>Product Name</Label>
                            <Input
                              id={`product-name-${index}`}
                              value={product.name}
                              onChange={(e) => {
                                const updatedProducts = [...bot.products]
                                updatedProducts[index] = { ...updatedProducts[index], name: e.target.value }
                                setBot({ ...bot, products: updatedProducts })
                              }}
                              placeholder="Premium Plan"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`product-price-${index}`}>Price</Label>
                            <Input
                              id={`product-price-${index}`}
                              value={product.price}
                              onChange={(e) => {
                                const updatedProducts = [...bot.products]
                                updatedProducts[index] = { ...updatedProducts[index], price: e.target.value }
                                setBot({ ...bot, products: updatedProducts })
                              }}
                              placeholder="$99.99"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`product-description-${index}`}>Description</Label>
                          <Textarea
                            id={`product-description-${index}`}
                            value={product.description}
                            onChange={(e) => {
                              const updatedProducts = [...bot.products]
                              updatedProducts[index] = { ...updatedProducts[index], description: e.target.value }
                              setBot({ ...bot, products: updatedProducts })
                            }}
                            placeholder="Our premium plan includes all features..."
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="flex items-center space-x-2">
                            <Switch
                              id={`product-available-${index}`}
                              checked={product.available}
                              onCheckedChange={(checked) => {
                                const updatedProducts = [...bot.products]
                                updatedProducts[index] = { ...updatedProducts[index], available: checked }
                                setBot({ ...bot, products: updatedProducts })
                              }}
                            />
                            <Label htmlFor={`product-available-${index}`}>Available</Label>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`product-stock-${index}`}>Stock (Optional)</Label>
                            <Input
                              id={`product-stock-${index}`}
                              type="number"
                              min="0"
                              value={product.stock || ""}
                              onChange={(e) => {
                                const updatedProducts = [...bot.products]
                                updatedProducts[index] = { ...updatedProducts[index], stock: e.target.value }
                                setBot({ ...bot, products: updatedProducts })
                              }}
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                {bot.products.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground">No products added yet.</p>
                    <Button
                      onClick={() => setIsProductModalOpen(true)}
                      variant="outline"
                      className="mt-4 gap-1"
                      type="button"
                    >
                      <Plus className="h-4 w-4" />
                      Add Your First Product
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="functions" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div>
                  <CardTitle>Bot Functions & Services</CardTitle>
                  <CardDescription>Add custom functions and services that your bot can execute.</CardDescription>
                </div>
                <Button onClick={() => setIsFunctionModalOpen(true)} className="gap-1 w-full sm:w-auto" type="button">
                  <Plus className="h-4 w-4" />
                  Add Function
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {functions.length > 0 ? (
                    <Accordion type="multiple" className="space-y-4">
                      {functions.map((func, index) => (
                        <AccordionItem key={index} value={`function-${index}`} className="border rounded-md p-2">
                          <div className="flex items-center justify-between">
                            <AccordionTrigger className="hover:no-underline flex-1 text-left">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <Badge variant={func.type === "api" ? "default" : "secondary"}>
                                  {func.type === "api" ? "API" : "Custom"}
                                </Badge>
                                <span className="truncate">{func.name}</span>
                              </div>
                            </AccordionTrigger>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleRemoveFunction(index)
                              }}
                              className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0"
                              type="button"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove Function</span>
                            </Button>
                          </div>
                          <AccordionContent className="space-y-4 pt-2">
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">{func.description}</p>
                              {func.type === "api" && func.api && (
                                <div className="space-y-2">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <Badge variant="outline">{func.api.method}</Badge>
                                    <code className="text-xs bg-muted px-2 py-1 rounded break-all">{func.api.url}</code>
                                  </div>
                                  {func.api.parameters && func.api.parameters.length > 0 && (
                                    <div>
                                      <p className="text-sm font-medium mb-1">Parameters:</p>
                                      <div className="flex flex-wrap gap-1">
                                        {func.api.parameters.map((param, paramIndex) => (
                                          <Badge key={paramIndex} variant="outline" className="text-xs">
                                            {param.name} ({param.type}){param.required && "*"}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                              {func.type === "custom" && (
                                <div className="bg-muted p-3 rounded-md">
                                  <p className="text-xs font-medium mb-1">Custom Code:</p>
                                  <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                                    {func.code?.substring(0, 200)}
                                    {func.code && func.code.length > 200 && "..."}
                                  </pre>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground">No functions added yet.</p>
                      <Button
                        onClick={() => setIsFunctionModalOpen(true)}
                        variant="outline"
                        className="mt-4 gap-1"
                        type="button"
                      >
                        <Plus className="h-4 w-4" />
                        Add Your First Function
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat-customization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Chat Widget Customization</CardTitle>
                <CardDescription>Customize the appearance of your chat widget for your website.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="chat-title">Chat Title</Label>
                      <Input
                        id="chat-title"
                        value={bot.chatSettings?.title || ""}
                        onChange={(e) => handleUpdateChatSettings("title", e.target.value)}
                        placeholder="Support Chat"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="chat-subtitle">Chat Subtitle</Label>
                      <Input
                        id="chat-subtitle"
                        value={bot.chatSettings?.subtitle || ""}
                        onChange={(e) => handleUpdateChatSettings("subtitle", e.target.value)}
                        placeholder="Virtual Assistant"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="initial-message">Initial Message</Label>
                      <Textarea
                        id="initial-message"
                        value={bot.chatSettings?.initialMessage || ""}
                        onChange={(e) => handleUpdateChatSettings("initialMessage", e.target.value)}
                        placeholder="Hello! How can I help you today?"
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="placeholder-text">Input Placeholder</Label>
                      <Input
                        id="placeholder-text"
                        value={bot.chatSettings?.placeholderText || ""}
                        onChange={(e) => handleUpdateChatSettings("placeholderText", e.target.value)}
                        placeholder="Type your message..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="header-style">Header Style</Label>
                      <Select
                        value={bot.chatSettings?.headerStyle || "gradient"}
                        onValueChange={(value) => handleUpdateChatSettings("headerStyle", value)}
                      >
                        <SelectTrigger id="header-style">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gradient">Gradient</SelectItem>
                          <SelectItem value="solid">Solid Color</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Widget Position</Label>
                      <Select
                        value={bot.chatSettings?.position || "right"}
                        onValueChange={(value) => handleUpdateChatSettings("position", value)}
                      >
                        <SelectTrigger id="position">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="right">Bottom Right</SelectItem>
                          <SelectItem value="left">Bottom Left</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="show-logo"
                        checked={bot.chatSettings?.showLogo || false}
                        onCheckedChange={(checked) => handleUpdateChatSettings("showLogo", checked)}
                      />
                      <Label htmlFor="show-logo">Show Logo</Label>
                    </div>

                    {bot.chatSettings?.showLogo && (
                      <div className="space-y-2">
                        <Label htmlFor="logo-url">Logo URL</Label>
                        <Input
                          id="logo-url"
                          value={bot.chatSettings?.logo || ""}
                          onChange={(e) => handleUpdateChatSettings("logo", e.target.value)}
                          placeholder="https://example.com/logo.png"
                        />
                        <p className="text-xs text-muted-foreground">
                          {language === "en"
                            ? "Enter the URL of your logo image. Recommended size: 40x40px."
                            : "Ingresa la URL de tu imagen de logo. Tamaño recomendado: 40x40px."}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primary-color"
                          type="color"
                          value={bot.chatSettings?.primaryColor || "#4f46e5"}
                          onChange={(e) => handleUpdateChatSettings("primaryColor", e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          id="primary-color-hex"
                          value={bot.chatSettings?.primaryColor || "#4f46e5"}
                          onChange={(e) => handleUpdateChatSettings("primaryColor", e.target.value)}
                          className="flex-1"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {language === "en"
                          ? "Used for the header background and accent elements."
                          : "Usado para el fondo del encabezado y elementos de acento."}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="button-color">Button Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="button-color"
                          type="color"
                          value={bot.chatSettings?.buttonColor || "#4f46e5"}
                          onChange={(e) => handleUpdateChatSettings("buttonColor", e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          id="button-color-hex"
                          value={bot.chatSettings?.buttonColor || "#4f46e5"}
                          onChange={(e) => handleUpdateChatSettings("buttonColor", e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bubble-color">Bot Message Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="bubble-color"
                          type="color"
                          value={bot.chatSettings?.bubbleColor || "#f9fafb"}
                          onChange={(e) => handleUpdateChatSettings("bubbleColor", e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          id="bubble-color-hex"
                          value={bot.chatSettings?.bubbleColor || "#f9fafb"}
                          onChange={(e) => handleUpdateChatSettings("bubbleColor", e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="user-bubble-color">User Message Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="user-bubble-color"
                          type="color"
                          value={bot.chatSettings?.userBubbleColor || "#000000"}
                          onChange={(e) => handleUpdateChatSettings("userBubbleColor", e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          id="user-bubble-color-hex"
                          value={bot.chatSettings?.userBubbleColor || "#000000"}
                          onChange={(e) => handleUpdateChatSettings("userBubbleColor", e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        onClick={() => setIsChatPreviewOpen(!isChatPreviewOpen)}
                        variant="outline"
                        className="w-full"
                        type="button"
                      >
                        {isChatPreviewOpen ? "Hide Preview" : "Show Preview"}
                      </Button>
                    </div>

                    {isChatPreviewOpen && (
                      <div className="mt-4 border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                        <ChatWidgetPreview settings={bot.chatSettings} />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="test-chat" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Test Your Bot</CardTitle>
                <CardDescription>Test your bot's responses and functionality in real-time.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden bg-background">
                  {/* Chat Header */}
                  <div
                    className="p-4 border-b"
                    style={{
                      background:
                        bot.chatSettings?.headerStyle === "gradient"
                          ? `linear-gradient(to right, ${bot.chatSettings.primaryColor}, ${adjustColor(bot.chatSettings.primaryColor, -30)})`
                          : bot.chatSettings?.primaryColor || "#4f46e5",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {bot.chatSettings?.showLogo && (
                        <div className="bg-white/20 rounded-full p-2">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium text-white">{bot.chatSettings?.title || "Test Bot"}</h3>
                        <p className="text-sm text-gray-200">{bot.chatSettings?.subtitle || "Testing Mode"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
                    {testMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "bot" && (
                          <div className="mr-2 flex-shrink-0">
                            <div
                              className="rounded-full h-8 w-8 flex items-center justify-center"
                              style={{ background: bot.chatSettings?.primaryColor || "#4f46e5" }}
                            >
                              <MessageSquare className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] sm:max-w-[70%] p-3 rounded-lg`}
                          style={{
                            background:
                              message.sender === "user"
                                ? bot.chatSettings?.userBubbleColor || "#000000"
                                : bot.chatSettings?.bubbleColor || "#f9fafb",
                            color: message.sender === "user" ? "#fff" : "#000",
                          }}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-60">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                        {message.sender === "user" && (
                          <div className="ml-2 flex-shrink-0">
                            <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-800 dark:text-white">You</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t bg-background">
                    <div className="flex gap-2">
                      <Input
                        value={testInput}
                        onChange={(e) => setTestInput(e.target.value)}
                        placeholder={bot.chatSettings?.placeholderText || "Type your message..."}
                        className="flex-1"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            handleSendTestMessage()
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={handleSendTestMessage}
                        disabled={!testInput.trim()}
                        style={{ background: bot.chatSettings?.buttonColor || "#4f46e5" }}
                        className="text-white"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <ProductModal open={isProductModalOpen} onOpenChange={setIsProductModalOpen} onAddProduct={handleAddProduct} />
      <FunctionModal
        open={isFunctionModalOpen}
        onOpenChange={setIsFunctionModalOpen}
        onAddFunction={handleAddFunction}
        language={language as "en" | "es"}
      />
    </DashboardLayout>
  )
}
