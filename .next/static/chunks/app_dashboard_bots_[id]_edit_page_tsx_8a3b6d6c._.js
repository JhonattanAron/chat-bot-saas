(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/dashboard/bots/[id]/edit/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "default": (()=>EditBotPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript) <export default as FilePen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$function$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/function-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat_cuztomization$2f$chat$2d$widget$2d$customization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat_cuztomization/chat-widget-customization.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$chatAsistantStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/chatAsistantStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/ProductStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$functionsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/functionsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$chatControlStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/chatControlStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$automatizaciones$2d$admin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/automatizaciones-admin.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function EditBotPage({ params }) {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bot, setBot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProductModalOpen, setIsProductModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingFaqs, setIsGeneratingFaqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChatPreviewOpen, setIsChatPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFunctionModalOpen, setIsFunctionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChatTestOpen, setIsChatTestOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { getAssistantById, assistant, createFaq, deleteFaq, updateFaq } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$chatAsistantStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatAssistantStore"])();
    const { fetchFunctions, functions, addFunction, deleteFunction, updateFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$functionsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionsStore"])(); // Añadir updateFunction
    const { fetchProducts, products, updateProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])();
    const [temporalMessage, setTemporalMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedChatId, setSelectedChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const [chatTiitle, setChatTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Selecciona un Chat o Inicia uno nuevo");
    const { startChat, sendMessage, currentChat, fetchChat, chats, fetchUserChats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$chatControlStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])();
    const [errorBot, setErrorBot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { id } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(params);
    const [editingFaqs, setEditingFaqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EditBotPage.useState": ()=>assistant?.faqs || []
    }["EditBotPage.useState"]);
    const [localProducts, setLocalProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(products.map({
        "EditBotPage.useState": (product)=>{
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseProductString"])(product.name);
            return {
                ...product,
                name: parsed.name,
                price: parsed.price,
                description: parsed.description,
                stock: parsed.stock
            };
        }
    }["EditBotPage.useState"]));
    // Nuevo estado para la función que se está editando
    const [editingFunction, setEditingFunction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditBotPage.useEffect": ()=>{
            setLocalProducts(products.map({
                "EditBotPage.useEffect": (product)=>{
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseProductString"])(product.name);
                    return {
                        ...product,
                        name: parsed.name,
                        price: parsed.price,
                        description: parsed.description,
                        stock: parsed.stock
                    };
                }
            }["EditBotPage.useEffect"]));
        }
    }["EditBotPage.useEffect"], [
        products
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditBotPage.useEffect": ()=>{
            setEditingFaqs(assistant?.faqs || []);
        }
    }["EditBotPage.useEffect"], [
        assistant
    ]);
    const [testMessages, setTestMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            content: assistant?.welcome_message || "Hola Como puedo ayudarte?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [testInput, setTestInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    // Simulate fetching bot data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditBotPage.useEffect": ()=>{
            setIsLoading(true);
            const getBotData = {
                "EditBotPage.useEffect.getBotData": async ()=>{
                    if (id === undefined) {
                        setIsLoading(false);
                        return;
                    }
                    if (!session?.binding_id) {
                        toast({
                            title: "Error",
                            description: "Intenta Cerrar sesión y volver a ingresar."
                        });
                    } else {
                        await getAssistantById(id, session.binding_id);
                        await fetchProducts(session.binding_id, id);
                        await fetchFunctions(session.binding_id, id);
                        await fetchUserChats(session.binding_id);
                        /* eslint-disable */ console.log(...oo_oo(`99816027_216_8_216_30_4`, assistant));
                        setErrorBot(false);
                    }
                    setIsLoading(false);
                }
            }["EditBotPage.useEffect.getBotData"];
            getBotData();
        }
    }["EditBotPage.useEffect"], [
        session,
        id,
        getAssistantById,
        fetchProducts,
        fetchFunctions,
        fetchUserChats
    ]); // Añadir fetchFunctions y fetchUserChats a las dependencias
    const handleAddFunction = async (functionData)=>{
        if (!session?.binding_id) {
            toast({
                title: "Error",
                description: "La session no funciono intenta Cerrar Session y volver a ingresar"
            });
            return;
        }
        try {
            const data = await addFunction(session?.binding_id, id, functionData);
            toast({
                title: "Info",
                description: data.message
            });
            /* eslint-disable */ console.log(...oo_oo(`99816027_246_6_246_23_4`, data));
            await fetchFunctions(session.binding_id, id); // Refrescar la lista de funciones
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            toast({
                title: "Error",
                description: `${message.replace(/\.*$/, "")}.`
            });
        }
    };
    // Nueva función para manejar la edición de una función
    const handleEditFunction = async (updatedFunctionData)=>{
        if (!session?.binding_id || !updatedFunctionData.id) {
            toast({
                title: "Error",
                description: "La sesión no funcionó o el ID de la función no está disponible. Intenta cerrar sesión y volver a ingresar."
            });
            return;
        }
        try {
            const data = await updateFunction(session.binding_id, id, updatedFunctionData.id, updatedFunctionData);
            toast({
                title: "Éxito",
                description: data.message
            });
            /* eslint-disable */ console.log(...oo_oo(`99816027_278_6_278_23_4`, data));
            await fetchFunctions(session.binding_id, id); // Refrescar la lista de funciones
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            toast({
                title: "Error",
                description: `Error al editar la función: ${message.replace(/\.*$/, "")}.`
            });
        } finally{
            setEditingFunction(undefined); // Limpiar la función en edición
            setIsFunctionModalOpen(false); // Cerrar el modal
        }
    };
    const handleRemoveFunction = async (function_id)=>{
        if (!session?.binding_id) {
            toast({
                title: "Error",
                description: "La session no funciono intenta Cerrar Session y volver a ingresar"
            });
            return;
        }
        if (!function_id) {
            toast({
                title: "Error",
                description: "No se obtuvo el id de la funcion"
            });
            return;
        }
        try {
            const data = await deleteFunction(session?.binding_id, id, function_id);
            toast({
                title: "Info",
                description: data.message
            });
            /* eslint-disable */ console.log(...oo_oo(`99816027_317_6_317_23_4`, data));
            await fetchFunctions(session.binding_id, id); // Refrescar la lista de funciones
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            toast({
                title: "Error",
                description: `${message.replace(/\.*$/, "")}.`
            });
        }
    };
    // ✅ SOLUCIÓN: Función corregida para manejar el mensaje temporal
    const handleSendTestMessage = async ()=>{
        if (!testInput.trim()) return;
        // 🔥 CLAVE: Guardar el mensaje ANTES de limpiar el input
        const messageToSend = testInput.trim();
        setTemporalMessage(messageToSend); // Mostrar inmediatamente
        setTestInput(""); // Limpiar el input
        if (!session?.binding_id || !assistant?._id) {
            toast({
                title: "Error",
                description: "Intenta Cerrar sesión y volver a ingresar."
            });
            return;
        }
        try {
            // Si es un nuevo chat, créalo
            if (selectedChatId === "1") {
                const data = await startChat({
                    userId: session?.binding_id,
                    assistant_id: assistant?._id,
                    promt: messageToSend
                });
                const response = data;
                const chatId = response.chat_id;
                setSelectedChatId(chatId);
                await fetchChat(chatId);
                await fetchUserChats(session.binding_id);
            } else {
                await sendMessage({
                    chatId: selectedChatId,
                    assistant_id: assistant?._id,
                    role: "user",
                    content: messageToSend
                });
            }
        } catch (error) {
            /* eslint-disable */ console.error(...oo_tx(`99816027_364_6_364_52_11`, "Error sending message:", error));
            toast({
                title: "Error",
                description: "Error al enviar el mensaje"
            });
        } finally{
            // Limpiar el mensaje temporal después de que se procese
            setTimeout(()=>{
                setTemporalMessage("");
            }, 1000);
        }
    };
    const handleSave = async ()=>{
        setIsSaving(true);
        // Simulate saving
        setTimeout(()=>{
            setIsSaving(false);
            toast({
                title: "Changes saved",
                description: "Your bot has been updated successfully."
            });
        }, 1500);
    };
    const handleAddFaq = ()=>{
        const HandleFaq = async ()=>{
            if (!session?.binding_id) {
                toast({
                    title: "Error",
                    description: "Intenta Cerrar sesión y volver a ingresar."
                });
            } else {
                await createFaq({
                    user_id: session?.binding_id,
                    assistant_id: id,
                    faqs: [
                        {
                            question: "",
                            answer: "",
                            category: ""
                        }
                    ]
                });
                await getAssistantById(id, session.binding_id);
            }
            toast({
                title: "Exito",
                description: "Pregunta Lista para editar"
            });
        };
        HandleFaq();
    };
    const handleLocalChange = (index, field, value)=>{
        setEditingFaqs((prev)=>{
            const updated = [
                ...prev
            ];
            updated[index] = {
                ...updated[index],
                [field]: value
            };
            return updated;
        });
    };
    const handleSaveFaq = (index)=>{
        const updatedFaq = editingFaqs[index];
        const handleUpdate = async ()=>{
            if (!session?.binding_id || !updatedFaq._id) {
                toast({
                    title: "Error",
                    description: "Intenta Cerrar sesión y volver a ingresar."
                });
            } else {
                updateFaq({
                    user_id: session.binding_id,
                    assistant_id: id,
                    faqId: updatedFaq._id,
                    update: {
                        question: updatedFaq.question,
                        answer: updatedFaq.answer,
                        category: updatedFaq.category
                    }
                });
                await getAssistantById(id, session.binding_id);
                toast({
                    title: "Exito",
                    description: "El FAQ se edito correctamente"
                });
            }
        };
        handleUpdate();
    };
    const handleRemoveFaq = (index)=>{
        const handleRemove = async ()=>{
            if (!session?.binding_id || !assistant?.faqs[index]._id) {
                toast({
                    title: "Error",
                    description: "Intenta Cerrar sesión y volver a ingresar."
                });
                return;
            } else {
                await deleteFaq({
                    user_id: session?.binding_id,
                    assistant_id: id,
                    faqId: assistant?.faqs[index]._id
                });
                toast({
                    title: "Success",
                    description: "Se ha eliminado la pregunta frecuente correctamente."
                });
            }
            await getAssistantById(id, session.binding_id);
        };
        handleRemove();
    };
    const handleAddProduct = (product, method)=>{
        if (!bot) return;
        if (method === "manual") {
            setBot({
                ...bot,
                products: [
                    ...bot.products,
                    product
                ]
            });
        } else {
            // En un caso real, aquí se procesaría la configuración de la API
            toast({
                title: language === "en" ? "API Connected" : "API Conectada",
                description: language === "en" ? "Your product API has been connected successfully. Products will be imported automatically." : "Tu API de productos ha sido conectada exitosamente. Los productos se importarán automáticamente."
            });
        }
    };
    const handleRemoveProduct = (index)=>{
        if (!bot) return;
        const updatedProducts = bot.products.filter((_, i)=>i !== index);
        setBot({
            ...bot,
            products: updatedProducts
        });
    };
    const handleGenerateCode = ()=>{
        toast({
            title: "Code generated",
            description: "The code has been copied to your clipboard."
        });
    };
    const handleGenerateFaqs = ()=>{
        if (!bot || !bot.businessDescription) {
            toast({
                title: language === "en" ? "Missing information" : "Información faltante",
                description: language === "en" ? "Please provide a business description to generate FAQs." : "Por favor proporciona una descripción del negocio para generar preguntas frecuentes.",
                variant: "destructive"
            });
            return;
        }
        setIsGeneratingFaqs(true);
        // Simulate generating FAQs with AI
        setTimeout(()=>{
            const generatedFaqs = [
                {
                    question: language === "en" ? "What makes your products unique?" : "¿Qué hace que tus productos sean únicos?",
                    answer: language === "en" ? "Our products are designed with cutting-edge technology and user-centric approach, making them intuitive and powerful." : "Nuestros productos están diseñados con tecnología de vanguardia y un enfoque centrado en el usuario, haciéndolos intuitivos y potentes.",
                    category: "Products"
                },
                {
                    question: language === "en" ? "Do you offer customer support?" : "¿Ofrecen soporte al cliente?",
                    answer: language === "en" ? "Yes, we provide 24/7 customer support through various channels including chat, email, and phone." : "Sí, proporcionamos soporte al cliente 24/7 a través de varios canales, incluyendo chat, correo electrónico y teléfono.",
                    category: "Support"
                },
                {
                    question: language === "en" ? "What payment methods do you accept?" : "¿Qué métodos de pago aceptan?",
                    answer: language === "en" ? "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing options." : "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias. Para clientes empresariales, también ofrecemos opciones de facturación.",
                    category: "Billing"
                }
            ];
            if (bot) {
                setBot({
                    ...bot,
                    faqs: [
                        ...bot.faqs,
                        ...generatedFaqs
                    ]
                });
            }
            setIsGeneratingFaqs(false);
            toast({
                title: language === "en" ? "FAQs Generated" : "Preguntas Frecuentes Generadas",
                description: language === "en" ? "AI has generated new FAQs based on your business description." : "La IA ha generado nuevas preguntas frecuentes basadas en la descripción de tu negocio."
            });
        }, 2000);
    };
    const handleUpdateChatSettings = (settings)=>{
        if (!bot) return;
        setBot({
            ...bot,
            chatSettings: settings
        });
    };
    function adjustColor(hex, amount) {
        return "#" + hex.replace(/^#/, "").replace(/../g, (color)=>("0" + Math.min(255, Math.max(0, Number.parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }
    if (!assistant) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold tracking-tight",
                            children: "Bot not found"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "The bot you're looking for doesn't exist or you don't have access."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "mt-4",
                            onClick: ()=>router.push("/dashboard/bots"),
                            children: "Back to Bots"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                            lineNumber: 617,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                    lineNumber: 611,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                lineNumber: 610,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
            lineNumber: 609,
            columnNumber: 7
        }, this);
    }
    if (errorBot) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold tracking-tight",
                            children: "Error con la sesión"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                            lineNumber: 634,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Hubo un error con tu sesión. Por favor, cierra sesión y vuelve a ingresar."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                            lineNumber: 637,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "mt-4",
                            onClick: ()=>router.push("/api/auth/signout"),
                            children: "Cerrar sesión"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                            lineNumber: 641,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                    lineNumber: 633,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                lineNumber: 632,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
            lineNumber: 631,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 p-2 sm:p-4 md:gap-8 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: ()=>router.back(),
                                        type: "button",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                        lineNumber: 658,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl sm:text-3xl font-bold tracking-tight",
                                                        children: assistant?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: assistant?.status === "online" ? "default" : assistant.status === "maintenance" ? "outline" : "secondary",
                                                        children: assistant && assistant.status.charAt(0).toUpperCase() + assistant.status.slice(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 668,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm",
                                                children: "Manage your chatbot settings, FAQs, and products."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 686,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>router.push(`/dashboard/bots/${assistant?._id}/preview`),
                                        type: "button",
                                        className: "w-full sm:w-auto",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSave,
                                        disabled: isSaving,
                                        type: "button",
                                        className: "w-full sm:w-auto",
                                        children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 19
                                                }, this),
                                                "Saving..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 19
                                                }, this),
                                                "Save Changes"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                        lineNumber: 702,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: "basic",
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "w-full h-auto p-1 grid grid-cols-3 md:grid-cols-6 gap-0.5 bg-muted rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "basic",
                                            className: "text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all",
                                            children: "Basic"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "faqs",
                                            className: "text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all",
                                            children: "FAQs"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 732,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "products",
                                            className: "text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all",
                                            children: "Products"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "functions",
                                            className: "text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all",
                                            children: "Servicios Tecnicos"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "chat-customization",
                                            className: "text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all",
                                            children: "Chat"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "test-chat",
                                            className: "text-xs sm:text-sm px-1 sm:px-3 py-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all",
                                            children: "Test"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 725,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "basic",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Bot Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Basic information about your chatbot."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 767,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "bot-name",
                                                            children: "Bot Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "bot-name",
                                                            value: assistant.name,
                                                            onChange: (e)=>assistant.name !== e.target.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "bot-description",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 783,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            id: "bot-description",
                                                            value: assistant.description,
                                                            onChange: (e)=>assistant?.description !== e.target.value,
                                                            className: "min-h-[100px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "welcome-message",
                                                            children: "Welcome Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            id: "welcome-message",
                                                            value: assistant.welcome_message,
                                                            onChange: (e)=>assistant.welcome_message !== e.target.value,
                                                            className: "min-h-[100px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "bot-status",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            value: assistant.status,
                                                            onValueChange: (value)=>/* eslint-disable */ console.log(...oo_oo(`99816027_806_46_806_64_4`, value)),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                        placeholder: "Select status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 809,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 808,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "online",
                                                                            children: "Online"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 812,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "offline",
                                                                            children: "Offline"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 813,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "maintenance",
                                                                            children: "Maintenance"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 814,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 811,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 17
                                                }, this),
                                                assistant.type === "whatsapp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "whatsapp-number",
                                                            children: "WhatsApp Business Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 820,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "whatsapp-number",
                                                            value: "",
                                                            onChange: (e)=>/* eslint-disable */ console.log(...oo_oo(`99816027_826_39_826_66_4`, e.target.value)),
                                                            placeholder: "+1234567890"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "primary-color",
                                                            children: "Primary Color"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 832,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "primary-color",
                                                                    type: "color",
                                                                    value: "",
                                                                    onChange: (e)=>/* eslint-disable */ console.log(...oo_oo(`99816027_838_39_838_53_4`, e)),
                                                                    className: "w-12 h-10 p-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 834,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "primary-color-hex",
                                                                    value: "",
                                                                    onChange: (e)=>/* eslint-disable */ console.log(...oo_oo(`99816027_844_39_844_66_4`, e.target.value)),
                                                                    className: "flex-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 833,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 773,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 766,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "faqs",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            children: "Frequently Asked Questions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 856,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: "Add questions and answers that your chatbot will respond to."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: handleAddFaq,
                                                            className: "gap-1 w-full sm:w-auto",
                                                            type: "button",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Add FAQ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 862,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: handleGenerateFaqs,
                                                            variant: "outline",
                                                            className: "gap-1 w-full sm:w-auto bg-transparent",
                                                            disabled: isGeneratingFaqs,
                                                            type: "button",
                                                            children: isGeneratingFaqs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "h-4 w-4 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 879,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Generating..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 884,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Generate FAQs"
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 870,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 861,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 854,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "business-description",
                                                            children: "Business Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            id: "business-description",
                                                            value: "",
                                                            onChange: (e)=>/* eslint-disable */ console.log(...oo_oo(`99816027_899_37_899_64_4`, e.target.value)),
                                                            placeholder: language === "en" ? "Provide a clear description of your business to help generate relevant FAQs..." : "Proporciona una descripción clara de tu negocio para ayudar a generar preguntas frecuentes relevantes...",
                                                            className: "min-h-[100px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: language === "en" ? "A detailed description helps our AI generate more accurate and relevant FAQs for your business." : "Una descripción detallada ayuda a nuestra IA a generar preguntas frecuentes más precisas y relevantes para tu negocio."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                                    type: "multiple",
                                                    className: "space-y-4",
                                                    children: assistant && editingFaqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                            value: `faq-${index}`,
                                                            className: "border rounded-md p-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                            className: "hover:no-underline flex-1 text-left",
                                                                            children: faq.question || "New FAQ Item"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 922,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "icon",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleRemoveFaq(index);
                                                                            },
                                                                            className: "h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 934,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "sr-only",
                                                                                    children: "Remove FAQ"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 935,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 925,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                    className: "space-y-4 p-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: `faq-category-${index}`,
                                                                                    children: "Tag"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 940,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    id: `faq-category-${index}`,
                                                                                    value: faq.category,
                                                                                    onChange: (e)=>handleLocalChange(index, "category", e.target.value),
                                                                                    placeholder: "Category"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 941,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 939,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: `faq-question-${index}`,
                                                                                    children: "Question"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 955,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    id: `faq-question-${index}`,
                                                                                    value: faq.question,
                                                                                    onChange: (e)=>handleLocalChange(index, "question", e.target.value),
                                                                                    placeholder: "What are your business hours?"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 958,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 954,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: `faq-answer-${index}`,
                                                                                    children: "Answer"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 972,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                                    id: `faq-answer-${index}`,
                                                                                    value: faq.answer,
                                                                                    onChange: (e)=>handleLocalChange(index, "answer", e.target.value),
                                                                                    placeholder: "Our business hours are Monday to Friday, 9am to 5pm.",
                                                                                    className: "min-h-[100px]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 975,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 971,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            onClick: ()=>handleSaveFaq(index),
                                                                            className: "w-full",
                                                                            type: "button",
                                                                            children: "Save"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 989,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 938,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, faq._id, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 916,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 913,
                                                    columnNumber: 17
                                                }, this),
                                                bot && bot.faqs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-8 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: "No FAQs added yet."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: handleAddFaq,
                                                            variant: "outline",
                                                            className: "mt-4 gap-1 bg-transparent",
                                                            type: "button",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1009,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Add Your First FAQ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 891,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 853,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 852,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "products",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            children: "Products & Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1021,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: "Add products or services that your chatbot can recommend."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1022,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>setIsProductModalOpen(true),
                                                    className: "gap-1 w-full sm:w-auto",
                                                    type: "button",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Add Product"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                                    type: "multiple",
                                                    className: "space-y-4",
                                                    children: assistant && localProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                            value: `product-${index}`,
                                                            className: "border rounded-md p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                            className: "hover:no-underline flex-1 text-left",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "truncate",
                                                                                children: [
                                                                                    product.name || "New Product",
                                                                                    product.price && ` - ${product.price}`,
                                                                                    product.stock == 0 ? "" : product.stock && ` (Stock: ${product.stock})`
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1046,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1045,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "icon",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleRemoveProduct(index);
                                                                            },
                                                                            className: "h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1063,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "sr-only",
                                                                                    children: "Remove Product"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1064,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1054,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1044,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                    className: "space-y-4 pt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid gap-4 md:grid-cols-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `product-name-${index}`,
                                                                                            children: "Product Name"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1070,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            id: `product-name-${index}`,
                                                                                            value: product.name,
                                                                                            onChange: (e)=>{
                                                                                                const updated = [
                                                                                                    ...localProducts
                                                                                                ];
                                                                                                updated[index].name = e.target.value;
                                                                                                setLocalProducts(updated);
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1073,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1069,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `product-price-${index}`,
                                                                                            children: "Price"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1084,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            id: `product-price-${index}`,
                                                                                            value: product.price,
                                                                                            onChange: (e)=>{
                                                                                                const updated = [
                                                                                                    ...localProducts
                                                                                                ];
                                                                                                updated[index].price = e.target.value;
                                                                                                setLocalProducts(updated);
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1087,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1083,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1068,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: `product-description-${index}`,
                                                                                    children: "Description"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1099,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                                    id: `product-description-${index}`,
                                                                                    value: product.description,
                                                                                    onChange: (e)=>{
                                                                                        const updated = [
                                                                                            ...localProducts
                                                                                        ];
                                                                                        updated[index].description = e.target.value;
                                                                                        setLocalProducts(updated);
                                                                                    },
                                                                                    className: "min-h-[100px]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1102,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1098,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid gap-4 md:grid-cols-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center space-x-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                                            id: `product-available-${index}`,
                                                                                            checked: product.available,
                                                                                            onCheckedChange: (checked)=>{
                                                                                                const updated = [
                                                                                                    ...localProducts
                                                                                                ];
                                                                                                updated[index].available = checked;
                                                                                                setLocalProducts(updated);
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1115,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `product-available-${index}`,
                                                                                            children: "Available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1124,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1114,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `product-stock-${index}`,
                                                                                            children: "Stock (Optional)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1129,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            id: `product-stock-${index}`,
                                                                                            type: "number",
                                                                                            min: "0",
                                                                                            value: product.stock || "",
                                                                                            onChange: (e)=>{
                                                                                                const updated = [
                                                                                                    ...localProducts
                                                                                                ];
                                                                                                updated[index].stock = Number.parseInt(e.target.value, 10);
                                                                                                setLocalProducts(updated);
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1132,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1128,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1113,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            onClick: ()=>{
                                                                                updateProduct(product._id, {
                                                                                    name: product.name,
                                                                                    price: product.price,
                                                                                    description: product.description,
                                                                                    stock: product.stock,
                                                                                    available: product.available,
                                                                                    tags: []
                                                                                }, session?.binding_id || "");
                                                                                return toast({
                                                                                    title: "Exito",
                                                                                    description: "Se Guardaron los cambios del Producto"
                                                                                });
                                                                            },
                                                                            className: "w-full",
                                                                            type: "button",
                                                                            children: "Guardar Cambios"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1148,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1067,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, product._id, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1039,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 17
                                                }, this),
                                                assistant && products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-8 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: "No products added yet."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>setIsProductModalOpen(true),
                                                            variant: "outline",
                                                            className: "mt-4 gap-1",
                                                            type: "button",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1188,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Add Your First Product"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1182,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 1018,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 1017,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "functions",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                        defaultValue: "functions-list",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                                className: "w-full h-auto p-1 grid grid-cols-2 md:grid-cols-2 gap-0.5 bg-muted rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                        value: "functions-list",
                                                        children: "Funciones"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                        value: "autimatizaciones",
                                                        children: "Automtizaciones"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 1201,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                        value: "functions-list",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "my-5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                                    children: "Bot Functions & Services"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1210,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                                    children: "Add custom functions and services that your bot can execute."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1211,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1209,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            onClick: ()=>{
                                                                                setEditingFunction(undefined); // Asegurarse de que es para añadir
                                                                                setIsFunctionModalOpen(true);
                                                                            },
                                                                            className: "gap-1 w-full sm:w-auto",
                                                                            type: "button",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1224,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "Add Function"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1216,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1208,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-4",
                                                                        children: functions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                                                            type: "multiple",
                                                                            className: "space-y-4",
                                                                            children: functions.map((func, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                                                    value: `function-${index}`,
                                                                                    className: "border rounded-md p-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                                                    className: "hover:no-underline flex-1 text-left",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-col sm:flex-row sm:items-center gap-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                                variant: func.type === "api" ? "default" : "secondary",
                                                                                                                children: func.type === "api" ? "API" : "Custom"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                lineNumber: 1241,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "truncate",
                                                                                                                children: func.name
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                lineNumber: 1252,
                                                                                                                columnNumber: 41
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                        lineNumber: 1240,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                    lineNumber: 1239,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                            variant: "ghost",
                                                                                                            size: "icon",
                                                                                                            onClick: (e)=>{
                                                                                                                e.stopPropagation();
                                                                                                                setEditingFunction(func); // Establecer la función a editar
                                                                                                                setIsFunctionModalOpen(true); // Abrir el modal
                                                                                                            },
                                                                                                            className: "h-8 w-8 text-muted-foreground hover:text-green-700 flex-shrink-0",
                                                                                                            type: "button",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePen$3e$__["FilePen"], {
                                                                                                                    className: "h-4 w-4"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                    lineNumber: 1269,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "sr-only",
                                                                                                                    children: "Edit Function"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                    lineNumber: 1270,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                            lineNumber: 1258,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                            variant: "ghost",
                                                                                                            size: "icon",
                                                                                                            onClick: (e)=>{
                                                                                                                e.stopPropagation();
                                                                                                                handleRemoveFunction(func._id); // Usar _id para eliminar
                                                                                                            },
                                                                                                            className: "h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0",
                                                                                                            type: "button",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                                    className: "h-4 w-4"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                    lineNumber: 1284,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "sr-only",
                                                                                                                    children: "Remove Function"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                    lineNumber: 1285,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                            lineNumber: 1274,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                    lineNumber: 1257,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1238,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                                            className: "space-y-4 pt-2",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "space-y-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-sm text-muted-foreground",
                                                                                                        children: func.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                        lineNumber: 1293,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    func.hasApi && func.api && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "space-y-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "flex flex-col sm:flex-row sm:items-center gap-2",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                                        variant: "outline",
                                                                                                                        children: func.api.method
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                        lineNumber: 1299,
                                                                                                                        columnNumber: 45
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                                                        className: "text-xs bg-muted px-2 py-1 rounded break-all",
                                                                                                                        children: func.api.url
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                        lineNumber: 1302,
                                                                                                                        columnNumber: 45
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                lineNumber: 1298,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            func.api.parameters && func.api.parameters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                        className: "text-sm font-medium mb-1",
                                                                                                                        children: "Parameters:"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                        lineNumber: 1309,
                                                                                                                        columnNumber: 49
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "flex flex-wrap gap-1",
                                                                                                                        children: func.api.parameters.map((param, paramIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                                                variant: "outline",
                                                                                                                                className: "text-xs",
                                                                                                                                children: [
                                                                                                                                    param.name,
                                                                                                                                    " (",
                                                                                                                                    param.type,
                                                                                                                                    ")",
                                                                                                                                    param.required && "*"
                                                                                                                                ]
                                                                                                                            }, paramIndex, true, {
                                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                                lineNumber: 1322,
                                                                                                                                columnNumber: 55
                                                                                                                            }, this))
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                        lineNumber: 1312,
                                                                                                                        columnNumber: 49
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                lineNumber: 1308,
                                                                                                                columnNumber: 47
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                        lineNumber: 1297,
                                                                                                        columnNumber: 41
                                                                                                    }, this),
                                                                                                    func.type === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "bg-muted p-3 rounded-md",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-xs font-medium mb-1",
                                                                                                                children: "Custom Code:"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                lineNumber: 1340,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                                                                className: "text-xs overflow-x-auto whitespace-pre-wrap",
                                                                                                                children: [
                                                                                                                    func.code?.substring(0, 200),
                                                                                                                    func.code && func.code.length > 200 && "..."
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                                lineNumber: 1343,
                                                                                                                columnNumber: 43
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                        lineNumber: 1339,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                                lineNumber: 1292,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1291,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, func._id || index, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1233,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1231,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col items-center justify-center py-8 text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-muted-foreground",
                                                                                    children: "No functions added yet."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1358,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    onClick: ()=>{
                                                                                        setEditingFunction(undefined); // Asegurarse de que es para añadir
                                                                                        setIsFunctionModalOpen(true);
                                                                                    },
                                                                                    variant: "outline",
                                                                                    className: "mt-4 gap-1",
                                                                                    type: "button",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1370,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        "Add Your First Function"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1361,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1357,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1229,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1228,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1207,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 1206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                        value: "autimatizaciones",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$automatizaciones$2d$admin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                            lineNumber: 1380,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 1379,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 1205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 1197,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 1196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "chat-customization",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat_cuztomization$2f$chat$2d$widget$2d$customization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatWidgetCustomization"], {
                                    language: language,
                                    chatSettings: bot && bot.chatSettings ? {
                                        ...bot.chatSettings,
                                        title: bot.chatSettings.title ?? "",
                                        subtitle: bot.chatSettings.subtitle ?? "",
                                        primaryColor: bot.chatSettings.primaryColor ?? "#4f46e5",
                                        buttonColor: bot.chatSettings.buttonColor ?? "#4f46e5",
                                        bubbleColor: bot.chatSettings.bubbleColor ?? "#f9fafb",
                                        userBubbleColor: bot.chatSettings.userBubbleColor ?? "#000000",
                                        headerStyle: bot.chatSettings.headerStyle ?? "gradient",
                                        showLogo: bot.chatSettings.showLogo ?? true,
                                        position: bot.chatSettings.position ?? "right",
                                        initialMessage: bot.chatSettings.initialMessage ?? "",
                                        placeholderText: bot.chatSettings.placeholderText ?? "",
                                        userTextColor: bot.chatSettings.userTextColor ?? "#ffffff",
                                        botTextColor: bot.chatSettings.botTextColor ?? "#000000"
                                    } : {
                                        title: "",
                                        subtitle: "",
                                        primaryColor: "#4f46e5",
                                        buttonColor: "#4f46e5",
                                        bubbleColor: "#f9fafb",
                                        userBubbleColor: "#000000",
                                        headerStyle: "gradient",
                                        logo: "",
                                        showLogo: true,
                                        position: "right",
                                        initialMessage: "",
                                        placeholderText: "",
                                        userTextColor: "#ffffff",
                                        botTextColor: "#000000"
                                    },
                                    onSettingsChange: handleUpdateChatSettings
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 1387,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 1386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "test-chat",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Test Your Bot"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1432,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Test your bot's responses and functionality in real-time. Manage multiple chat sessions."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                    lineNumber: 1433,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 1431,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-[600px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-r bg-gray-50 dark:bg-gray-900 transition-all duration-300", sidebarOpen ? "w-80" : "w-0 overflow-hidden"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 border-b",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-sm",
                                                                                children: "Chat Sessions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1449,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                onClick: ()=>setSidebarOpen(false),
                                                                                size: "sm",
                                                                                variant: "ghost",
                                                                                className: "lg:hidden",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1456,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1450,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1448,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: async ()=>{
                                                                            setSelectedChatId("1");
                                                                            setTemporalMessage("");
                                                                            fetchChat("1");
                                                                        },
                                                                        size: "sm",
                                                                        className: "w-full bg-transparent",
                                                                        variant: "outline",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "h-4 w-4 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1469,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "New Chat"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1459,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "overflow-y-auto h-[calc(100%-80px)]",
                                                                children: chats.map((chat, index)=>{
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            fetchChat(chat.id);
                                                                        },
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-4 py-3 transition-colors border-b", selectedChatId === chat.id ? "bg-slate-100 font-semibold" : "bg-white hover:bg-slate-100"),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col w-full",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-900 truncate",
                                                                                    children: [
                                                                                        "🗨️ Chat ",
                                                                                        index + 1
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1489,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-500 truncate",
                                                                                    children: chat.lastActivity || "No recent activity"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1492,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1488,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, chat.id, false, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1476,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                lineNumber: 1473,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 1441,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col",
                                                        children: [
                                                            !sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 border-b lg:hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    onClick: ()=>setSidebarOpen(true),
                                                                    size: "sm",
                                                                    variant: "ghost",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1511,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                lineNumber: 1505,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 border-b",
                                                                style: {
                                                                    background: bot && bot.chatSettings?.headerStyle === "gradient" ? `linear-gradient(to right, ${bot.chatSettings.primaryColor}, ${adjustColor(bot.chatSettings.primaryColor || "#4f46e5", -30)})` : bot && bot.chatSettings?.primaryColor || "#4f46e5"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        bot && bot.chatSettings?.showLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white/20 rounded-full p-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                                className: "h-5 w-5 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1534,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1533,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "font-medium text-white",
                                                                                    children: chatTiitle
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1538,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-200",
                                                                                    children: bot && bot.chatSettings?.subtitle || "Testing Mode"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1541,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1537,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1531,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                lineNumber: 1516,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: " flex justify-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mr-2 flex-shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "rounded-full h-8 w-8 flex items-center justify-center",
                                                                                    style: {
                                                                                        background: bot && bot.chatSettings?.primaryColor || "#4f46e5"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                                        className: "h-4 w-4 text-white"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                        lineNumber: 1560,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1552,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1551,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `max-w-[80%] sm:max-w-[70%] p-3 rounded-lg`,
                                                                                style: {
                                                                                    background: bot && bot.chatSettings?.bubbleColor || "#f9fafb",
                                                                                    color: "#000"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm",
                                                                                    children: assistant.welcome_message
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1572,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1563,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1550,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    currentChat?.messages.map((message, index)=>{
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
                                                                            children: [
                                                                                message.role == "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mr-2 flex-shrink-0",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-full h-8 w-8 flex items-center justify-center",
                                                                                        style: {
                                                                                            background: bot && bot.chatSettings?.primaryColor || "#4f46e5"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                                            className: "h-4 w-4 text-white"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1595,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                        lineNumber: 1587,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1586,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `max-w-[80%] sm:max-w-[70%] p-3 rounded-lg`,
                                                                                    style: {
                                                                                        background: message.role === "user" ? bot && bot.chatSettings?.userBubbleColor || "#000000" : bot && bot.chatSettings?.bubbleColor || "#f9fafb",
                                                                                        color: message.role === "user" ? "#fff" : "#000"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm",
                                                                                            children: message.content
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1613,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs mt-1 text-muted-foreground italic",
                                                                                            children: message.createdAt && new Date(message.createdAt).toLocaleString("es-EC", {
                                                                                                weekday: "short",
                                                                                                hour: "2-digit",
                                                                                                minute: "2-digit",
                                                                                                day: "2-digit",
                                                                                                month: "short"
                                                                                            })
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1614,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1599,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                message.role === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "ml-2 flex-shrink-0",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-gray-300 dark:bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs font-medium text-gray-800 dark:text-white",
                                                                                            children: "You"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                            lineNumber: 1631,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                        lineNumber: 1630,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1629,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1577,
                                                                            columnNumber: 27
                                                                        }, this);
                                                                    }),
                                                                    temporalMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "max-w-[80%] sm:max-w-[70%] p-3 rounded-lg opacity-70",
                                                                                style: {
                                                                                    background: bot && bot.chatSettings?.userBubbleColor || "#000000",
                                                                                    color: "#fff"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm",
                                                                                        children: temporalMessage
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                        lineNumber: 1652,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs mt-1 opacity-60",
                                                                                        children: "Enviando..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                        lineNumber: 1653,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1643,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-2 flex-shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-300 dark:bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs font-medium text-gray-800 dark:text-white",
                                                                                        children: "You"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                        lineNumber: 1659,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                    lineNumber: 1658,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1657,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                        lineNumber: 1642,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                lineNumber: 1549,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 border-t bg-background",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            value: testInput,
                                                                            onChange: (e)=>setTestInput(e.target.value),
                                                                            placeholder: bot && bot.chatSettings?.placeholderText || "Type your message...",
                                                                            className: "flex-1",
                                                                            onKeyDown: (e)=>{
                                                                                if (e.key === "Enter") {
                                                                                    e.preventDefault();
                                                                                    handleSendTestMessage();
                                                                                }
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1670,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            type: "button",
                                                                            onClick: handleSendTestMessage,
                                                                            disabled: !testInput.trim(),
                                                                            style: {
                                                                                background: bot && bot.chatSettings?.buttonColor || "#4f46e5"
                                                                            },
                                                                            className: "text-white",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                                lineNumber: 1696,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                            lineNumber: 1685,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                    lineNumber: 1669,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                                lineNumber: 1668,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                        lineNumber: 1502,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                                lineNumber: 1439,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                            lineNumber: 1438,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                    lineNumber: 1430,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                                lineNumber: 1429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                        lineNumber: 722,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                lineNumber: 655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                open: isProductModalOpen,
                onOpenChange: setIsProductModalOpen,
                onAddProduct: handleAddProduct
            }, void 0, false, {
                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                lineNumber: 1707,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$function$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionModal"], {
                open: isFunctionModalOpen,
                onOpenChange: setIsFunctionModalOpen,
                // @ts-ignore
                onAddFunction: handleAddFunction,
                // @ts-ignore
                editFunction: editingFunction,
                // @ts-ignore
                onEditFunction: handleEditFunction,
                language: language
            }, void 0, false, {
                fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
                lineNumber: 1712,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/bots/[id]/edit/page.tsx",
        lineNumber: 654,
        columnNumber: 5
    }, this);
}
_s(EditBotPage, "lfJHsVAAQNWQdRAoH4TvvqGN294=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$chatAsistantStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatAssistantStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$functionsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$chatControlStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = EditBotPage;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x170d0d=_0x49f3;function _0x49f3(_0x31d1b1,_0x501ca7){var _0x445485=_0x4454();return _0x49f3=function(_0x49f329,_0x2d53d7){_0x49f329=_0x49f329-0x1a9;var _0x1c5fc3=_0x445485[_0x49f329];return _0x1c5fc3;},_0x49f3(_0x31d1b1,_0x501ca7);}(function(_0x3e6b2f,_0x209b9d){var _0x381a5c=_0x49f3,_0x336573=_0x3e6b2f();while(!![]){try{var _0x1df70e=-parseInt(_0x381a5c(0x1c5))/0x1+parseInt(_0x381a5c(0x238))/0x2+parseInt(_0x381a5c(0x24b))/0x3*(parseInt(_0x381a5c(0x22b))/0x4)+parseInt(_0x381a5c(0x1c7))/0x5+parseInt(_0x381a5c(0x244))/0x6*(-parseInt(_0x381a5c(0x227))/0x7)+parseInt(_0x381a5c(0x1d2))/0x8*(-parseInt(_0x381a5c(0x1e2))/0x9)+-parseInt(_0x381a5c(0x2b4))/0xa*(-parseInt(_0x381a5c(0x27b))/0xb);if(_0x1df70e===_0x209b9d)break;else _0x336573['push'](_0x336573['shift']());}catch(_0x4e1f13){_0x336573['push'](_0x336573['shift']());}}}(_0x4454,0x8b4d3));function z(_0x46c369,_0x31bb7a,_0x4c2165,_0x15337b,_0x26fe7a,_0x369e96){var _0x26a750=_0x49f3,_0x3552c5,_0xc19f1b,_0x4f9181,_0x1b225e;this[_0x26a750(0x23b)]=_0x46c369,this[_0x26a750(0x2a0)]=_0x31bb7a,this['port']=_0x4c2165,this['nodeModules']=_0x15337b,this['dockerizedApp']=_0x26fe7a,this[_0x26a750(0x1f7)]=_0x369e96,this['_allowedToSend']=!0x0,this[_0x26a750(0x293)]=!0x0,this[_0x26a750(0x210)]=!0x1,this['_connecting']=!0x1,this[_0x26a750(0x1f0)]=((_0xc19f1b=(_0x3552c5=_0x46c369[_0x26a750(0x258)])==null?void 0x0:_0x3552c5['env'])==null?void 0x0:_0xc19f1b[_0x26a750(0x225)])===_0x26a750(0x22d),this[_0x26a750(0x1f6)]=!((_0x1b225e=(_0x4f9181=this[_0x26a750(0x23b)]['process'])==null?void 0x0:_0x4f9181[_0x26a750(0x21b)])!=null&&_0x1b225e[_0x26a750(0x1e7)])&&!this[_0x26a750(0x1f0)],this[_0x26a750(0x269)]=null,this[_0x26a750(0x288)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x26a750(0x239),this[_0x26a750(0x1ca)]=(this[_0x26a750(0x1f6)]?_0x26a750(0x2a4):_0x26a750(0x262))+this[_0x26a750(0x275)];}z[_0x170d0d(0x232)][_0x170d0d(0x2b9)]=async function(){var _0xef2b79=_0x170d0d,_0x3bc0c0,_0x2a58e9;if(this[_0xef2b79(0x269)])return this['_WebSocketClass'];let _0x3e8284;if(this['_inBrowser']||this[_0xef2b79(0x1f0)])_0x3e8284=this['global']['WebSocket'];else{if((_0x3bc0c0=this[_0xef2b79(0x23b)][_0xef2b79(0x258)])!=null&&_0x3bc0c0[_0xef2b79(0x214)])_0x3e8284=(_0x2a58e9=this[_0xef2b79(0x23b)]['process'])==null?void 0x0:_0x2a58e9['_WebSocket'];else try{_0x3e8284=(await new Function('path',_0xef2b79(0x1ec),_0xef2b79(0x276),_0xef2b79(0x21a))(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0xef2b79(0x1a9)),this[_0xef2b79(0x276)]))[_0xef2b79(0x207)];}catch{try{_0x3e8284=require(require(_0xef2b79(0x299))[_0xef2b79(0x22c)](this['nodeModules'],'ws'));}catch{throw new Error(_0xef2b79(0x220));}}}return this[_0xef2b79(0x269)]=_0x3e8284,_0x3e8284;},z[_0x170d0d(0x232)]['_connectToHostNow']=function(){var _0x30469d=_0x170d0d;this[_0x30469d(0x295)]||this['_connected']||this['_connectAttemptCount']>=this[_0x30469d(0x26c)]||(this[_0x30469d(0x293)]=!0x1,this['_connecting']=!0x0,this[_0x30469d(0x288)]++,this[_0x30469d(0x216)]=new Promise((_0x4fb164,_0x61e3a7)=>{var _0x19d02a=_0x30469d;this['getWebSocketClass']()[_0x19d02a(0x1c0)](_0xa8f3bc=>{var _0x3f4a7a=_0x19d02a;let _0x541589=new _0xa8f3bc(_0x3f4a7a(0x1bc)+(!this[_0x3f4a7a(0x1f6)]&&this['dockerizedApp']?'gateway.docker.internal':this[_0x3f4a7a(0x2a0)])+':'+this[_0x3f4a7a(0x235)]);_0x541589[_0x3f4a7a(0x2b6)]=()=>{var _0x568210=_0x3f4a7a;this[_0x568210(0x1e8)]=!0x1,this[_0x568210(0x283)](_0x541589),this[_0x568210(0x260)](),_0x61e3a7(new Error('logger\\x20websocket\\x20error'));},_0x541589[_0x3f4a7a(0x1c6)]=()=>{var _0x1b163d=_0x3f4a7a;this[_0x1b163d(0x1f6)]||_0x541589[_0x1b163d(0x285)]&&_0x541589[_0x1b163d(0x285)][_0x1b163d(0x1d0)]&&_0x541589[_0x1b163d(0x285)]['unref'](),_0x4fb164(_0x541589);},_0x541589['onclose']=()=>{var _0x2e5602=_0x3f4a7a;this['_allowedToConnectOnSend']=!0x0,this[_0x2e5602(0x283)](_0x541589),this[_0x2e5602(0x260)]();},_0x541589[_0x3f4a7a(0x1df)]=_0x1976f8=>{var _0x51fa89=_0x3f4a7a;try{if(!(_0x1976f8!=null&&_0x1976f8['data'])||!this[_0x51fa89(0x1f7)])return;let _0x576932=JSON['parse'](_0x1976f8[_0x51fa89(0x278)]);this['eventReceivedCallback'](_0x576932[_0x51fa89(0x1d4)],_0x576932[_0x51fa89(0x2b0)],this['global'],this['_inBrowser']);}catch{}};})['then'](_0x17ad28=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x19d02a(0x1e8)]=!0x0,this['_connectAttemptCount']=0x0,_0x17ad28))[_0x19d02a(0x1f3)](_0x635f5e=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x19d02a(0x29a)](_0x19d02a(0x2a9)+this[_0x19d02a(0x275)]),_0x61e3a7(new Error(_0x19d02a(0x240)+(_0x635f5e&&_0x635f5e[_0x19d02a(0x1e5)])))));}));},z['prototype'][_0x170d0d(0x283)]=function(_0x787daa){var _0x565917=_0x170d0d;this[_0x565917(0x210)]=!0x1,this[_0x565917(0x295)]=!0x1;try{_0x787daa[_0x565917(0x1c4)]=null,_0x787daa[_0x565917(0x2b6)]=null,_0x787daa['onopen']=null;}catch{}try{_0x787daa[_0x565917(0x270)]<0x2&&_0x787daa[_0x565917(0x1fb)]();}catch{}},z[_0x170d0d(0x232)][_0x170d0d(0x260)]=function(){var _0x2433af=_0x170d0d;clearTimeout(this[_0x2433af(0x267)]),!(this['_connectAttemptCount']>=this[_0x2433af(0x26c)])&&(this[_0x2433af(0x267)]=setTimeout(()=>{var _0x503eaf=_0x2433af,_0x5b7f82;this['_connected']||this[_0x503eaf(0x295)]||(this[_0x503eaf(0x27c)](),(_0x5b7f82=this[_0x503eaf(0x216)])==null||_0x5b7f82[_0x503eaf(0x1f3)](()=>this[_0x503eaf(0x260)]()));},0x1f4),this[_0x2433af(0x267)][_0x2433af(0x1d0)]&&this[_0x2433af(0x267)][_0x2433af(0x1d0)]());},z[_0x170d0d(0x232)]['send']=async function(_0x35791f){var _0x516b18=_0x170d0d;try{if(!this['_allowedToSend'])return;this[_0x516b18(0x293)]&&this[_0x516b18(0x27c)](),(await this[_0x516b18(0x216)])[_0x516b18(0x26a)](JSON['stringify'](_0x35791f));}catch(_0x39ff3f){this[_0x516b18(0x1f4)]?console[_0x516b18(0x29a)](this['_sendErrorMessage']+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)])):(this[_0x516b18(0x1f4)]=!0x0,console[_0x516b18(0x29a)](this[_0x516b18(0x1ca)]+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)]),_0x35791f)),this[_0x516b18(0x1e8)]=!0x1,this[_0x516b18(0x260)]();}};function H(_0x4a9673,_0x59dab2,_0x2e78dc,_0x18d211,_0x50b318,_0x1b12d1,_0x5be49f,_0x25b9f9=ne){var _0x17e373=_0x170d0d;let _0x46bfe9=_0x2e78dc['split'](',')[_0x17e373(0x24e)](_0x22f653=>{var _0x1d1f66=_0x17e373,_0x1f6dbf,_0x5da8e1,_0x568148,_0x3d0db9,_0x5fb235,_0x6995d1,_0x68cb4,_0x301fa9;try{if(!_0x4a9673[_0x1d1f66(0x25b)]){let _0x33755b=((_0x5da8e1=(_0x1f6dbf=_0x4a9673['process'])==null?void 0x0:_0x1f6dbf['versions'])==null?void 0x0:_0x5da8e1[_0x1d1f66(0x1e7)])||((_0x3d0db9=(_0x568148=_0x4a9673[_0x1d1f66(0x258)])==null?void 0x0:_0x568148[_0x1d1f66(0x2a6)])==null?void 0x0:_0x3d0db9['NEXT_RUNTIME'])==='edge';(_0x50b318===_0x1d1f66(0x208)||_0x50b318===_0x1d1f66(0x218)||_0x50b318===_0x1d1f66(0x1db)||_0x50b318===_0x1d1f66(0x1fa))&&(_0x50b318+=_0x33755b?'\\x20server':_0x1d1f66(0x1bb));let _0x3fab9d='';_0x50b318===_0x1d1f66(0x205)&&(_0x3fab9d=(((_0x68cb4=(_0x6995d1=(_0x5fb235=_0x4a9673[_0x1d1f66(0x222)])==null?void 0x0:_0x5fb235[_0x1d1f66(0x298)])==null?void 0x0:_0x6995d1[_0x1d1f66(0x1f8)])==null?void 0x0:_0x68cb4[_0x1d1f66(0x28f)])||_0x1d1f66(0x2a3))[_0x1d1f66(0x277)](),_0x3fab9d&&(_0x50b318+='\\x20'+_0x3fab9d,(_0x3fab9d===_0x1d1f66(0x1f1)||_0x3fab9d===_0x1d1f66(0x2a3)&&((_0x301fa9=_0x4a9673[_0x1d1f66(0x1ac)])==null?void 0x0:_0x301fa9['hostname'])===_0x1d1f66(0x255))&&(_0x59dab2=_0x1d1f66(0x255)))),_0x4a9673[_0x1d1f66(0x25b)]={'id':+new Date(),'tool':_0x50b318},_0x5be49f&&_0x50b318&&!_0x33755b&&(_0x3fab9d?console['log'](_0x1d1f66(0x23c)+_0x3fab9d+_0x1d1f66(0x1fe)):console[_0x1d1f66(0x219)](_0x1d1f66(0x21e)+(_0x50b318[_0x1d1f66(0x268)](0x0)[_0x1d1f66(0x1ee)]()+_0x50b318[_0x1d1f66(0x23a)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x1d1f66(0x202)));}let _0x723bc9=new z(_0x4a9673,_0x59dab2,_0x22f653,_0x18d211,_0x1b12d1,_0x25b9f9);return _0x723bc9[_0x1d1f66(0x26a)][_0x1d1f66(0x1d9)](_0x723bc9);}catch(_0x1dcae0){return console[_0x1d1f66(0x29a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1dcae0&&_0x1dcae0['message']),()=>{};}});return _0x4074f0=>_0x46bfe9['forEach'](_0x3b1e24=>_0x3b1e24(_0x4074f0));}function ne(_0x308454,_0x1d36b1,_0x392c69,_0x127166){var _0x34f168=_0x170d0d;_0x127166&&_0x308454===_0x34f168(0x1cb)&&_0x392c69[_0x34f168(0x1ac)]['reload']();}function _0x4454(){var _0x5027dc=['failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','1765302656379','expo','null','resolveGetters','NEXT_RUNTIME','50645','4071333UxBIEf','some','_property','_Symbol','184hpAoHa','join','edge','hasOwnProperty','_processTreeNodeResult','current','get','prototype','match','expId','port','now','_p_name','35414wrIIFK','https://tinyurl.com/37x8b79t','substr','global','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reducePolicy','valueOf','isArray','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_getOwnPropertyNames','_capIfString','set','6GlIwoZ','noFunctions','_consoleNinjaAllowedToStart','1.0.0','_p_length','_propertyName','symbol','28347HVtbJl','length','_treeNodePropertiesAfterFullValue','map','test','push','disabledTrace','stackTraceLimit','reduceOnAccumulatedProcessingTimeMs','_setNodeQueryPath','10.0.2.2','getOwnPropertyNames','_addObjectProperty','process','getter','bound\\x20Promise','_console_ninja_session','expressionsToEvaluate','[object\\x20BigInt]','timeStamp','_cleanNode','_attemptToReconnectShortly','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','includes','NEGATIVE_INFINITY','bigint','replace','_reconnectTimeout','charAt','_WebSocketClass','send','forEach','_maxConnectAttemptCount','1','_setNodeExpandableState','autoExpandLimit','readyState','_numberRegExp','elements','_setNodeExpressionPath','level','_webSocketErrorDocsLink','nodeModules','toLowerCase','data','iterator','_p_','23771zalruo','_connectToHostNow','allStrLength','elapsed','ninjaSuppressConsole','_console_ninja','resetOnProcessingTimeAverageMs','nan','_disposeWebsocket','_isPrimitiveType','_socket','props','_blacklistedProperty','_connectAttemptCount','','autoExpandPreviousObjects','constructor','value','time','unknown','osName','sort','_additionalMetadata','count','_allowedToConnectOnSend','call','_connecting','date',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'modules','path','warn','origin','_isMap','defaultLimits','Number','Boolean','host','concat','error','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','capped','env','cappedProps','root_exp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','number','negativeZero','_isArray','rootExpression','strLength','_isSet','args','_setNodePermissions','startsWith','_sortProps','3350IxDazF','reducedLimits','onerror','_dateToString','hits','getWebSocketClass','[object\\x20Map]','HTMLAllCollection','import(\\x27url\\x27)','fromCharCode','setter','location','pop','autoExpandMaxDepth','RegExp','serialize','getOwnPropertyDescriptor','toString','console','_isNegativeZero','[object\\x20Array]','resetWhenQuietMs','function','_getOwnPropertyDescriptor','Error','resolve','\\x20browser','ws://','_undefined','_hasMapOnItsPath','object','then','perf_hooks','negativeInfinity','Set','onclose','465187GsrXlm','onopen','5002750hodMWQ','','_treeNodePropertiesBeforeFullValue','_sendErrorMessage','reload','_isUndefined','cappedElements','endsWith','_quotedRegExp','unref','_objectToString','56PSTtkw','name','method','_hasSymbolPropertyOnItsPath','autoExpand','parent','_ninjaIgnoreNextError','bind','[object\\x20Date]','astro','autoExpandPropertyCount','getOwnPropertySymbols','totalStrLength','onmessage','_type','perLogpoint','719307uAMoSD','disabledLog','stack','message',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"DESKTOP-OSC5NI0\",\"192.168.137.239\"],'node','_allowedToSend','undefined','sortProps','Map','url','_addProperty','toUpperCase','Promise','_inNextEdge','android','depth','catch','_extendedWarning','...','_inBrowser','eventReceivedCallback','ExpoDevice','root_exp_id','angular','close','_addFunctionsNode','POSITIVE_INFINITY',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','isExpressionToEvaluate','indexOf','_setNodeId','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','stringify','react-native','_HTMLAllCollection','default','next.js','hrtime','index','hostname','funcName','string','_getOwnPropertySymbols','_regExpToString','_connected','performance','Buffer','_isPrimitiveWrapperType','_WebSocket','trace','_ws','String','remix','log','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','versions','type','_setNodeLabel','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reduceOnCount'];_0x4454=function(){return _0x5027dc;};return _0x4454();}function b(_0x20b4df){var _0x341416=_0x170d0d,_0x5c3140,_0x279186;let _0x5e0593=function(_0x18f860,_0x56c571){return _0x56c571-_0x18f860;},_0xa8122e;if(_0x20b4df[_0x341416(0x211)])_0xa8122e=function(){var _0x4e82db=_0x341416;return _0x20b4df[_0x4e82db(0x211)]['now']();};else{if(_0x20b4df[_0x341416(0x258)]&&_0x20b4df[_0x341416(0x258)][_0x341416(0x209)]&&((_0x279186=(_0x5c3140=_0x20b4df[_0x341416(0x258)])==null?void 0x0:_0x5c3140[_0x341416(0x2a6)])==null?void 0x0:_0x279186[_0x341416(0x225)])!==_0x341416(0x22d))_0xa8122e=function(){var _0x37dd12=_0x341416;return _0x20b4df[_0x37dd12(0x258)]['hrtime']();},_0x5e0593=function(_0x23c14c,_0x154e92){return 0x3e8*(_0x154e92[0x0]-_0x23c14c[0x0])+(_0x154e92[0x1]-_0x23c14c[0x1])/0xf4240;};else try{let {performance:_0x60ea4e}=require(_0x341416(0x1c1));_0xa8122e=function(){var _0x53ab6d=_0x341416;return _0x60ea4e[_0x53ab6d(0x236)]();};}catch{_0xa8122e=function(){return+new Date();};}}return{'elapsed':_0x5e0593,'timeStamp':_0xa8122e,'now':()=>Date[_0x341416(0x236)]()};}function X(_0x32c56f,_0x303cdf,_0x1e9211){var _0x5cc213=_0x170d0d,_0x52c45e,_0x527212,_0x4abe95,_0x522168,_0x4d4988,_0x5da700,_0x56376a;if(_0x32c56f['_consoleNinjaAllowedToStart']!==void 0x0)return _0x32c56f[_0x5cc213(0x246)];let _0x36e85b=((_0x527212=(_0x52c45e=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x52c45e[_0x5cc213(0x21b)])==null?void 0x0:_0x527212[_0x5cc213(0x1e7)])||((_0x522168=(_0x4abe95=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x4abe95[_0x5cc213(0x2a6)])==null?void 0x0:_0x522168[_0x5cc213(0x225)])==='edge',_0x111b0e=!!(_0x1e9211==='react-native'&&((_0x4d4988=_0x32c56f[_0x5cc213(0x222)])==null?void 0x0:_0x4d4988[_0x5cc213(0x298)]));function _0x58872e(_0xa99034){var _0x43b74e=_0x5cc213;if(_0xa99034[_0x43b74e(0x2b2)]('/')&&_0xa99034[_0x43b74e(0x1ce)]('/')){let _0x53deaa=new RegExp(_0xa99034['slice'](0x1,-0x1));return _0x120a69=>_0x53deaa[_0x43b74e(0x24f)](_0x120a69);}else{if(_0xa99034[_0x43b74e(0x263)]('*')||_0xa99034[_0x43b74e(0x263)]('?')){let _0x47d203=new RegExp('^'+_0xa99034[_0x43b74e(0x266)](/\\./g,String[_0x43b74e(0x1aa)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x43b74e(0x266)](/\\?/g,'.')+String[_0x43b74e(0x1aa)](0x24));return _0x395f2f=>_0x47d203[_0x43b74e(0x24f)](_0x395f2f);}else return _0x15e080=>_0x15e080===_0xa99034;}}let _0x206953=_0x303cdf[_0x5cc213(0x24e)](_0x58872e);return _0x32c56f[_0x5cc213(0x246)]=_0x36e85b||!_0x303cdf,!_0x32c56f[_0x5cc213(0x246)]&&((_0x5da700=_0x32c56f[_0x5cc213(0x1ac)])==null?void 0x0:_0x5da700['hostname'])&&(_0x32c56f['_consoleNinjaAllowedToStart']=_0x206953[_0x5cc213(0x228)](_0x1d89c5=>_0x1d89c5(_0x32c56f[_0x5cc213(0x1ac)][_0x5cc213(0x20b)]))),_0x111b0e&&!_0x32c56f[_0x5cc213(0x246)]&&!((_0x56376a=_0x32c56f['location'])!=null&&_0x56376a['hostname'])&&(_0x32c56f[_0x5cc213(0x246)]=!0x0),_0x32c56f[_0x5cc213(0x246)];}function J(_0x367e2a,_0x56498a,_0x55bbfc,_0x1d4312,_0x3e1f78,_0x52ee0a){var _0x105bb6=_0x170d0d;_0x367e2a=_0x367e2a,_0x56498a=_0x56498a,_0x55bbfc=_0x55bbfc,_0x1d4312=_0x1d4312,_0x3e1f78=_0x3e1f78,_0x3e1f78=_0x3e1f78||{},_0x3e1f78[_0x105bb6(0x29d)]=_0x3e1f78[_0x105bb6(0x29d)]||{},_0x3e1f78['reducedLimits']=_0x3e1f78[_0x105bb6(0x2b5)]||{},_0x3e1f78[_0x105bb6(0x23d)]=_0x3e1f78[_0x105bb6(0x23d)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]=_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)]=_0x3e1f78['reducePolicy'][_0x105bb6(0x23b)]||{};let _0x18f631={'perLogpoint':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x21f)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x253)]||0x64,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x3e1f78['reducePolicy'][_0x105bb6(0x1e1)][_0x105bb6(0x281)]||0x64},'global':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x21f)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)]['global'][_0x105bb6(0x253)]||0x12c,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['global']['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x281)]||0x64}},_0x173958=b(_0x367e2a),_0x14baa2=_0x173958[_0x105bb6(0x27e)],_0x15ddd1=_0x173958[_0x105bb6(0x25e)];function _0x5d0f9e(){var _0x4535fc=_0x105bb6;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4535fc(0x271)]=/^(0|[1-9][0-9]*)$/,this[_0x4535fc(0x1cf)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x367e2a[_0x4535fc(0x1e9)],this['_HTMLAllCollection']=_0x367e2a['HTMLAllCollection'],this[_0x4535fc(0x1b8)]=Object[_0x4535fc(0x1b1)],this[_0x4535fc(0x241)]=Object[_0x4535fc(0x256)],this['_Symbol']=_0x367e2a['Symbol'],this[_0x4535fc(0x20f)]=RegExp[_0x4535fc(0x232)][_0x4535fc(0x1b2)],this[_0x4535fc(0x2b7)]=Date[_0x4535fc(0x232)][_0x4535fc(0x1b2)];}_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b0)]=function(_0x51810f,_0x251ef9,_0x39494e,_0x442bc7){var _0x5e3337=_0x105bb6,_0x5b9963=this,_0x5e0af2=_0x39494e[_0x5e3337(0x1d6)];function _0x228c0e(_0x4bb7b6,_0x49d5eb,_0x3bdd2c){var _0x59344b=_0x5e3337;_0x49d5eb[_0x59344b(0x21c)]=_0x59344b(0x28e),_0x49d5eb['error']=_0x4bb7b6['message'],_0x14328f=_0x3bdd2c[_0x59344b(0x1e7)]['current'],_0x3bdd2c[_0x59344b(0x1e7)][_0x59344b(0x230)]=_0x49d5eb,_0x5b9963[_0x59344b(0x1c9)](_0x49d5eb,_0x3bdd2c);}let _0x2cd839,_0x3ed180,_0x386849=_0x367e2a[_0x5e3337(0x27f)];_0x367e2a['ninjaSuppressConsole']=!0x0,_0x367e2a[_0x5e3337(0x1b3)]&&(_0x2cd839=_0x367e2a['console'][_0x5e3337(0x2a2)],_0x3ed180=_0x367e2a['console'][_0x5e3337(0x29a)],_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=function(){}),_0x3ed180&&(_0x367e2a['console'][_0x5e3337(0x29a)]=function(){}));try{try{_0x39494e['level']++,_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x250)](_0x251ef9);var _0x3e6539,_0x4877be,_0x38261b,_0x5c9df3,_0x3d7082=[],_0x4b7e1b=[],_0x4dafeb,_0x433a0c=this[_0x5e3337(0x1e0)](_0x251ef9),_0x517caf=_0x433a0c==='array',_0x51e574=!0x1,_0x29977e=_0x433a0c==='function',_0x530bbf=this[_0x5e3337(0x284)](_0x433a0c),_0x4cdde3=this[_0x5e3337(0x213)](_0x433a0c),_0x2e97c4=_0x530bbf||_0x4cdde3,_0x7840f7={},_0x17c28f=0x0,_0x4a13ab=!0x1,_0x14328f,_0x4c9a3b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x39494e[_0x5e3337(0x1f2)]){if(_0x517caf){if(_0x4877be=_0x251ef9['length'],_0x4877be>_0x39494e['elements']){for(_0x38261b=0x0,_0x5c9df3=_0x39494e[_0x5e3337(0x272)],_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));_0x51810f[_0x5e3337(0x1cd)]=!0x0;}else{for(_0x38261b=0x0,_0x5c9df3=_0x4877be,_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));}_0x39494e[_0x5e3337(0x1dc)]+=_0x4b7e1b[_0x5e3337(0x24c)];}if(!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c===_0x5e3337(0x1e9))&&!_0x530bbf&&_0x433a0c!==_0x5e3337(0x217)&&_0x433a0c!==_0x5e3337(0x212)&&_0x433a0c!=='bigint'){var _0x40a893=_0x442bc7[_0x5e3337(0x286)]||_0x39494e[_0x5e3337(0x286)];if(this[_0x5e3337(0x2af)](_0x251ef9)?(_0x3e6539=0x0,_0x251ef9[_0x5e3337(0x26b)](function(_0x25616c){var _0x724ab4=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x724ab4(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x724ab4(0x1ff)]&&_0x39494e[_0x724ab4(0x1d6)]&&_0x39494e[_0x724ab4(0x1dc)]>_0x39494e[_0x724ab4(0x26f)]){_0x4a13ab=!0x0;return;}_0x4b7e1b['push'](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x724ab4(0x1c3),_0x3e6539++,_0x39494e,function(_0x1a560f){return function(){return _0x1a560f;};}(_0x25616c)));})):this[_0x5e3337(0x29c)](_0x251ef9)&&_0x251ef9[_0x5e3337(0x26b)](function(_0x53a84d,_0x448d50){var _0x1b3cc3=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x1b3cc3(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x1b3cc3(0x1ff)]&&_0x39494e[_0x1b3cc3(0x1d6)]&&_0x39494e[_0x1b3cc3(0x1dc)]>_0x39494e[_0x1b3cc3(0x26f)]){_0x4a13ab=!0x0;return;}var _0x4a6eda=_0x448d50[_0x1b3cc3(0x1b2)]();_0x4a6eda[_0x1b3cc3(0x24c)]>0x64&&(_0x4a6eda=_0x4a6eda['slice'](0x0,0x64)+_0x1b3cc3(0x1f5)),_0x4b7e1b[_0x1b3cc3(0x250)](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x1b3cc3(0x1eb),_0x4a6eda,_0x39494e,function(_0x5e6cf){return function(){return _0x5e6cf;};}(_0x53a84d)));}),!_0x51e574){try{for(_0x4dafeb in _0x251ef9)if(!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)){if(_0x17c28f++,_0x39494e[_0x5e3337(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e[_0x5e3337(0x1ff)]&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e[_0x5e3337(0x26f)]){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}catch{}if(_0x7840f7[_0x5e3337(0x248)]=!0x0,_0x29977e&&(_0x7840f7[_0x5e3337(0x237)]=!0x0),!_0x4a13ab){var _0x55d68e=[][_0x5e3337(0x2a1)](this[_0x5e3337(0x241)](_0x251ef9))['concat'](this[_0x5e3337(0x20e)](_0x251ef9));for(_0x3e6539=0x0,_0x4877be=_0x55d68e[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)if(_0x4dafeb=_0x55d68e[_0x3e6539],!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb['toString']()))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)&&!_0x7840f7[typeof _0x4dafeb!=_0x5e3337(0x24a)?_0x5e3337(0x27a)+_0x4dafeb[_0x5e3337(0x1b2)]():_0x4dafeb]){if(_0x17c28f++,_0x39494e['autoExpandPropertyCount']++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e['isExpressionToEvaluate']&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e['autoExpandLimit']){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}}}}if(_0x51810f[_0x5e3337(0x21c)]=_0x433a0c,_0x2e97c4?(_0x51810f[_0x5e3337(0x28c)]=_0x251ef9['valueOf'](),this[_0x5e3337(0x242)](_0x433a0c,_0x51810f,_0x39494e,_0x442bc7)):_0x433a0c==='date'?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x2b7)][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='bigint'?_0x51810f[_0x5e3337(0x28c)]=_0x251ef9[_0x5e3337(0x1b2)]():_0x433a0c===_0x5e3337(0x1af)?_0x51810f['value']=this['_regExpToString'][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='symbol'&&this[_0x5e3337(0x22a)]?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x22a)][_0x5e3337(0x232)][_0x5e3337(0x1b2)]['call'](_0x251ef9):!_0x39494e[_0x5e3337(0x1f2)]&&!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c==='undefined')&&(delete _0x51810f['value'],_0x51810f[_0x5e3337(0x2a5)]=!0x0),_0x4a13ab&&(_0x51810f[_0x5e3337(0x2a7)]=!0x0),_0x14328f=_0x39494e['node'][_0x5e3337(0x230)],_0x39494e[_0x5e3337(0x1e7)]['current']=_0x51810f,this[_0x5e3337(0x1c9)](_0x51810f,_0x39494e),_0x4b7e1b[_0x5e3337(0x24c)]){for(_0x3e6539=0x0,_0x4877be=_0x4b7e1b[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)_0x4b7e1b[_0x3e6539](_0x3e6539);}_0x3d7082[_0x5e3337(0x24c)]&&(_0x51810f[_0x5e3337(0x286)]=_0x3d7082);}catch(_0x2a34e7){_0x228c0e(_0x2a34e7,_0x51810f,_0x39494e);}this[_0x5e3337(0x291)](_0x251ef9,_0x51810f),this['_treeNodePropertiesAfterFullValue'](_0x51810f,_0x39494e),_0x39494e[_0x5e3337(0x1e7)][_0x5e3337(0x230)]=_0x14328f,_0x39494e[_0x5e3337(0x274)]--,_0x39494e[_0x5e3337(0x1d6)]=_0x5e0af2,_0x39494e['autoExpand']&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x1ad)]();}finally{_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=_0x2cd839),_0x3ed180&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x29a)]=_0x3ed180),_0x367e2a['ninjaSuppressConsole']=_0x386849;}return _0x51810f;},_0x5d0f9e[_0x105bb6(0x232)]['_getOwnPropertySymbols']=function(_0x4d363d){var _0xa28b65=_0x105bb6;return Object[_0xa28b65(0x1dd)]?Object['getOwnPropertySymbols'](_0x4d363d):[];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2af)]=function(_0x10025a){var _0x434c7b=_0x105bb6;return!!(_0x10025a&&_0x367e2a[_0x434c7b(0x1c3)]&&this['_objectToString'](_0x10025a)==='[object\\x20Set]'&&_0x10025a[_0x434c7b(0x26b)]);},_0x5d0f9e['prototype']['_blacklistedProperty']=function(_0x120e00,_0x390f06,_0x2d17dd){var _0x1609a5=_0x105bb6;if(!_0x2d17dd[_0x1609a5(0x224)]){let _0x581703=this[_0x1609a5(0x1b8)](_0x120e00,_0x390f06);if(_0x581703&&_0x581703[_0x1609a5(0x231)])return!0x0;}return _0x2d17dd[_0x1609a5(0x245)]?typeof _0x120e00[_0x390f06]==_0x1609a5(0x1b7):!0x1;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1e0)]=function(_0x59f256){var _0x324ad8=_0x105bb6,_0x5bfe31='';return _0x5bfe31=typeof _0x59f256,_0x5bfe31==='object'?this['_objectToString'](_0x59f256)===_0x324ad8(0x1b5)?_0x5bfe31='array':this['_objectToString'](_0x59f256)===_0x324ad8(0x1da)?_0x5bfe31=_0x324ad8(0x296):this['_objectToString'](_0x59f256)===_0x324ad8(0x25d)?_0x5bfe31=_0x324ad8(0x265):_0x59f256===null?_0x5bfe31='null':_0x59f256[_0x324ad8(0x28b)]&&(_0x5bfe31=_0x59f256['constructor'][_0x324ad8(0x1d3)]||_0x5bfe31):_0x5bfe31==='undefined'&&this[_0x324ad8(0x206)]&&_0x59f256 instanceof this[_0x324ad8(0x206)]&&(_0x5bfe31=_0x324ad8(0x2bb)),_0x5bfe31;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1d1)]=function(_0x16aeba){var _0x51ce8=_0x105bb6;return Object[_0x51ce8(0x232)]['toString']['call'](_0x16aeba);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x284)]=function(_0x3836db){var _0x2f107a=_0x105bb6;return _0x3836db==='boolean'||_0x3836db===_0x2f107a(0x20d)||_0x3836db===_0x2f107a(0x2aa);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x213)]=function(_0x345086){var _0x53d599=_0x105bb6;return _0x345086===_0x53d599(0x29f)||_0x345086===_0x53d599(0x217)||_0x345086===_0x53d599(0x29e);},_0x5d0f9e['prototype'][_0x105bb6(0x1ed)]=function(_0x592d75,_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029){var _0x4012f1=this;return function(_0x36de93){var _0x3f867f=_0x49f3,_0xe3db2=_0x4400d5[_0x3f867f(0x1e7)]['current'],_0x22e5a3=_0x4400d5[_0x3f867f(0x1e7)]['index'],_0x2e8e88=_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)];_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)]=_0xe3db2,_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x20a)]=typeof _0x54009e==_0x3f867f(0x2aa)?_0x54009e:_0x36de93,_0x592d75[_0x3f867f(0x250)](_0x4012f1[_0x3f867f(0x229)](_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029)),_0x4400d5[_0x3f867f(0x1e7)]['parent']=_0x2e8e88,_0x4400d5['node']['index']=_0x22e5a3;};},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x257)]=function(_0x3b49cc,_0x49dbe9,_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f){var _0x59bea1=_0x105bb6,_0x3c8a44=this;return _0x49dbe9[typeof _0x130934!='symbol'?_0x59bea1(0x27a)+_0x130934[_0x59bea1(0x1b2)]():_0x130934]=!0x0,function(_0x306fcd){var _0x4f9062=_0x59bea1,_0x5bdf7f=_0x3757aa['node'][_0x4f9062(0x230)],_0x34bd51=_0x3757aa['node'][_0x4f9062(0x20a)],_0x2c525f=_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)];_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)]=_0x5bdf7f,_0x3757aa['node'][_0x4f9062(0x20a)]=_0x306fcd,_0x3b49cc[_0x4f9062(0x250)](_0x3c8a44['_property'](_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f)),_0x3757aa['node'][_0x4f9062(0x1d7)]=_0x2c525f,_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x20a)]=_0x34bd51;};},_0x5d0f9e['prototype'][_0x105bb6(0x229)]=function(_0x3332c1,_0x1b554f,_0x2a5116,_0x11f0cc,_0x24d27e){var _0x4a984a=_0x105bb6,_0x3b924d=this;_0x24d27e||(_0x24d27e=function(_0x42903f,_0x396f4b){return _0x42903f[_0x396f4b];});var _0x51f195=_0x2a5116[_0x4a984a(0x1b2)](),_0x2b91b7=_0x11f0cc[_0x4a984a(0x25c)]||{},_0xc69a03=_0x11f0cc[_0x4a984a(0x1f2)],_0x5e7c39=_0x11f0cc['isExpressionToEvaluate'];try{var _0x4f0c31=this['_isMap'](_0x3332c1),_0x51f0cf=_0x51f195;_0x4f0c31&&_0x51f0cf[0x0]==='\\x27'&&(_0x51f0cf=_0x51f0cf[_0x4a984a(0x23a)](0x1,_0x51f0cf['length']-0x2));var _0x3e74e4=_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7[_0x4a984a(0x27a)+_0x51f0cf];_0x3e74e4&&(_0x11f0cc[_0x4a984a(0x1f2)]=_0x11f0cc[_0x4a984a(0x1f2)]+0x1),_0x11f0cc['isExpressionToEvaluate']=!!_0x3e74e4;var _0x44a3a3=typeof _0x2a5116=='symbol',_0x35e15d={'name':_0x44a3a3||_0x4f0c31?_0x51f195:this[_0x4a984a(0x249)](_0x51f195)};if(_0x44a3a3&&(_0x35e15d[_0x4a984a(0x24a)]=!0x0),!(_0x1b554f==='array'||_0x1b554f===_0x4a984a(0x1b9))){var _0x313691=this['_getOwnPropertyDescriptor'](_0x3332c1,_0x2a5116);if(_0x313691&&(_0x313691[_0x4a984a(0x243)]&&(_0x35e15d[_0x4a984a(0x1ab)]=!0x0),_0x313691[_0x4a984a(0x231)]&&!_0x3e74e4&&!_0x11f0cc[_0x4a984a(0x224)]))return _0x35e15d[_0x4a984a(0x259)]=!0x0,this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0x6ded2a;try{_0x6ded2a=_0x24d27e(_0x3332c1,_0x2a5116);}catch(_0x3c6ff3){return _0x35e15d={'name':_0x51f195,'type':_0x4a984a(0x28e),'error':_0x3c6ff3['message']},this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0xe0b659=this[_0x4a984a(0x1e0)](_0x6ded2a),_0x5639de=this[_0x4a984a(0x284)](_0xe0b659);if(_0x35e15d[_0x4a984a(0x21c)]=_0xe0b659,_0x5639de)this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x242701=_0x4a984a;_0x35e15d[_0x242701(0x28c)]=_0x6ded2a[_0x242701(0x23e)](),!_0x3e74e4&&_0x3b924d[_0x242701(0x242)](_0xe0b659,_0x35e15d,_0x11f0cc,{});});else{var _0x47af2b=_0x11f0cc[_0x4a984a(0x1d6)]&&_0x11f0cc['level']<_0x11f0cc[_0x4a984a(0x1ae)]&&_0x11f0cc[_0x4a984a(0x28a)][_0x4a984a(0x200)](_0x6ded2a)<0x0&&_0xe0b659!==_0x4a984a(0x1b7)&&_0x11f0cc['autoExpandPropertyCount']<_0x11f0cc[_0x4a984a(0x26f)];_0x47af2b||_0x11f0cc[_0x4a984a(0x274)]<_0xc69a03||_0x3e74e4?this[_0x4a984a(0x1b0)](_0x35e15d,_0x6ded2a,_0x11f0cc,_0x3e74e4||{}):this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x9e827f=_0x4a984a;_0xe0b659===_0x9e827f(0x223)||_0xe0b659===_0x9e827f(0x1e9)||(delete _0x35e15d['value'],_0x35e15d[_0x9e827f(0x2a5)]=!0x0);});}return _0x35e15d;}finally{_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7,_0x11f0cc[_0x4a984a(0x1f2)]=_0xc69a03,_0x11f0cc[_0x4a984a(0x1ff)]=_0x5e7c39;}},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x242)]=function(_0x399669,_0x210936,_0xab59d7,_0x2be8d3){var _0x44fa0a=_0x105bb6,_0x420ad6=_0x2be8d3['strLength']||_0xab59d7[_0x44fa0a(0x2ae)];if((_0x399669===_0x44fa0a(0x20d)||_0x399669==='String')&&_0x210936[_0x44fa0a(0x28c)]){let _0x2ff4e7=_0x210936[_0x44fa0a(0x28c)]['length'];_0xab59d7[_0x44fa0a(0x27d)]+=_0x2ff4e7,_0xab59d7[_0x44fa0a(0x27d)]>_0xab59d7[_0x44fa0a(0x1de)]?(_0x210936[_0x44fa0a(0x2a5)]='',delete _0x210936[_0x44fa0a(0x28c)]):_0x2ff4e7>_0x420ad6&&(_0x210936['capped']=_0x210936[_0x44fa0a(0x28c)][_0x44fa0a(0x23a)](0x0,_0x420ad6),delete _0x210936[_0x44fa0a(0x28c)]);}},_0x5d0f9e[_0x105bb6(0x232)]['_isMap']=function(_0x2a4a89){var _0x461e8b=_0x105bb6;return!!(_0x2a4a89&&_0x367e2a[_0x461e8b(0x1eb)]&&this[_0x461e8b(0x1d1)](_0x2a4a89)===_0x461e8b(0x2ba)&&_0x2a4a89[_0x461e8b(0x26b)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x249)]=function(_0x2383db){var _0x222450=_0x105bb6;if(_0x2383db['match'](/^\\d+$/))return _0x2383db;var _0x2709fd;try{_0x2709fd=JSON[_0x222450(0x204)](''+_0x2383db);}catch{_0x2709fd='\\x22'+this[_0x222450(0x1d1)](_0x2383db)+'\\x22';}return _0x2709fd[_0x222450(0x233)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2709fd=_0x2709fd['substr'](0x1,_0x2709fd[_0x222450(0x24c)]-0x2):_0x2709fd=_0x2709fd[_0x222450(0x266)](/'/g,'\\x5c\\x27')[_0x222450(0x266)](/\\\\\"/g,'\\x22')[_0x222450(0x266)](/(^\"|\"$)/g,'\\x27'),_0x2709fd;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x22f)]=function(_0xa209b3,_0x115190,_0x2acd83,_0x303d96){var _0x46b928=_0x105bb6;this[_0x46b928(0x1c9)](_0xa209b3,_0x115190),_0x303d96&&_0x303d96(),this[_0x46b928(0x291)](_0x2acd83,_0xa209b3),this[_0x46b928(0x24d)](_0xa209b3,_0x115190);},_0x5d0f9e['prototype'][_0x105bb6(0x1c9)]=function(_0x458a15,_0x512c85){var _0x23bc61=_0x105bb6;this[_0x23bc61(0x201)](_0x458a15,_0x512c85),this[_0x23bc61(0x254)](_0x458a15,_0x512c85),this[_0x23bc61(0x273)](_0x458a15,_0x512c85),this['_setNodePermissions'](_0x458a15,_0x512c85);},_0x5d0f9e[_0x105bb6(0x232)]['_setNodeId']=function(_0x36c77c,_0x3a2a96){},_0x5d0f9e['prototype'][_0x105bb6(0x254)]=function(_0x5276cd,_0x506cc0){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x21d)]=function(_0x1f7f4d,_0x23480e){},_0x5d0f9e['prototype'][_0x105bb6(0x1cc)]=function(_0x5184f2){var _0x348ff9=_0x105bb6;return _0x5184f2===this[_0x348ff9(0x1bd)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x24d)]=function(_0xb25f0c,_0x26cf9d){var _0x7e320f=_0x105bb6;this[_0x7e320f(0x21d)](_0xb25f0c,_0x26cf9d),this['_setNodeExpandableState'](_0xb25f0c),_0x26cf9d['sortProps']&&this[_0x7e320f(0x2b3)](_0xb25f0c),this[_0x7e320f(0x1fc)](_0xb25f0c,_0x26cf9d),this['_addLoadNode'](_0xb25f0c,_0x26cf9d),this['_cleanNode'](_0xb25f0c);},_0x5d0f9e[_0x105bb6(0x232)]['_additionalMetadata']=function(_0x2726b3,_0x1c214e){var _0x2f2a09=_0x105bb6;try{_0x2726b3&&typeof _0x2726b3[_0x2f2a09(0x24c)]==_0x2f2a09(0x2aa)&&(_0x1c214e[_0x2f2a09(0x24c)]=_0x2726b3[_0x2f2a09(0x24c)]);}catch{}if(_0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x2aa)||_0x1c214e[_0x2f2a09(0x21c)]==='Number'){if(isNaN(_0x1c214e[_0x2f2a09(0x28c)]))_0x1c214e[_0x2f2a09(0x282)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];else switch(_0x1c214e[_0x2f2a09(0x28c)]){case Number[_0x2f2a09(0x1fd)]:_0x1c214e['positiveInfinity']=!0x0,delete _0x1c214e['value'];break;case Number['NEGATIVE_INFINITY']:_0x1c214e[_0x2f2a09(0x1c2)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];break;case 0x0:this[_0x2f2a09(0x1b4)](_0x1c214e['value'])&&(_0x1c214e[_0x2f2a09(0x2ab)]=!0x0);break;}}else _0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x1b7)&&typeof _0x2726b3[_0x2f2a09(0x1d3)]==_0x2f2a09(0x20d)&&_0x2726b3[_0x2f2a09(0x1d3)]&&_0x1c214e[_0x2f2a09(0x1d3)]&&_0x2726b3[_0x2f2a09(0x1d3)]!==_0x1c214e[_0x2f2a09(0x1d3)]&&(_0x1c214e[_0x2f2a09(0x20c)]=_0x2726b3[_0x2f2a09(0x1d3)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b4)]=function(_0x58289d){var _0x347d33=_0x105bb6;return 0x1/_0x58289d===Number[_0x347d33(0x264)];},_0x5d0f9e['prototype'][_0x105bb6(0x2b3)]=function(_0x348e5c){var _0x3b9c76=_0x105bb6;!_0x348e5c['props']||!_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x24c)]||_0x348e5c[_0x3b9c76(0x21c)]==='array'||_0x348e5c[_0x3b9c76(0x21c)]==='Map'||_0x348e5c[_0x3b9c76(0x21c)]===_0x3b9c76(0x1c3)||_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x290)](function(_0xea3fc1,_0x42d360){var _0x1755cf=_0x3b9c76,_0x4f3b4a=_0xea3fc1['name'][_0x1755cf(0x277)](),_0x14750b=_0x42d360['name']['toLowerCase']();return _0x4f3b4a<_0x14750b?-0x1:_0x4f3b4a>_0x14750b?0x1:0x0;});},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1fc)]=function(_0x21e5fd,_0x1075d8){var _0x37150f=_0x105bb6;if(!(_0x1075d8['noFunctions']||!_0x21e5fd[_0x37150f(0x286)]||!_0x21e5fd[_0x37150f(0x286)]['length'])){for(var _0xccfa8c=[],_0x36e1c4=[],_0x28710e=0x0,_0x13a0de=_0x21e5fd[_0x37150f(0x286)][_0x37150f(0x24c)];_0x28710e<_0x13a0de;_0x28710e++){var _0x30019=_0x21e5fd['props'][_0x28710e];_0x30019[_0x37150f(0x21c)]===_0x37150f(0x1b7)?_0xccfa8c['push'](_0x30019):_0x36e1c4[_0x37150f(0x250)](_0x30019);}if(!(!_0x36e1c4[_0x37150f(0x24c)]||_0xccfa8c[_0x37150f(0x24c)]<=0x1)){_0x21e5fd[_0x37150f(0x286)]=_0x36e1c4;var _0x304fdb={'functionsNode':!0x0,'props':_0xccfa8c};this[_0x37150f(0x201)](_0x304fdb,_0x1075d8),this['_setNodeLabel'](_0x304fdb,_0x1075d8),this[_0x37150f(0x26e)](_0x304fdb),this['_setNodePermissions'](_0x304fdb,_0x1075d8),_0x304fdb['id']+='\\x20f',_0x21e5fd[_0x37150f(0x286)]['unshift'](_0x304fdb);}}},_0x5d0f9e['prototype']['_addLoadNode']=function(_0x2d95c4,_0x33bb77){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x26e)]=function(_0x4c5fcb){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2ac)]=function(_0xae9e15){var _0x5592af=_0x105bb6;return Array[_0x5592af(0x23f)](_0xae9e15)||typeof _0xae9e15=='object'&&this[_0x5592af(0x1d1)](_0xae9e15)===_0x5592af(0x1b5);},_0x5d0f9e['prototype'][_0x105bb6(0x2b1)]=function(_0xae5534,_0x4da24a){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x25f)]=function(_0x6748ea){var _0xf3c5c9=_0x105bb6;delete _0x6748ea[_0xf3c5c9(0x1d5)],delete _0x6748ea['_hasSetOnItsPath'],delete _0x6748ea[_0xf3c5c9(0x1be)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x273)]=function(_0x323d56,_0x7249f7){};let _0x3a9ca1=new _0x5d0f9e(),_0xa6a15a={'props':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x286)]||0x64,'elements':_0x3e1f78[_0x105bb6(0x29d)]['elements']||0x64,'strLength':_0x3e1f78['defaultLimits'][_0x105bb6(0x2ae)]||0x400*0x32,'totalStrLength':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x1de)]||0x400*0x32,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x26f)]||0x1388,'autoExpandMaxDepth':_0x3e1f78[_0x105bb6(0x29d)]['autoExpandMaxDepth']||0xa},_0x1edace={'props':_0x3e1f78['reducedLimits'][_0x105bb6(0x286)]||0x5,'elements':_0x3e1f78[_0x105bb6(0x2b5)]['elements']||0x5,'strLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x2ae)]||0x100,'totalStrLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x1de)]||0x100*0x3,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x26f)]||0x1e,'autoExpandMaxDepth':_0x3e1f78['reducedLimits'][_0x105bb6(0x1ae)]||0x2};if(_0x52ee0a){let _0xa62a02=_0x3a9ca1['serialize']['bind'](_0x3a9ca1);_0x3a9ca1['serialize']=function(_0x230ce2,_0x2c9e2e,_0xcf6767,_0x48686e){return _0xa62a02(_0x230ce2,_0x52ee0a(_0x2c9e2e),_0xcf6767,_0x48686e);};}function _0x916645(_0x2587cc,_0x5b2586,_0x43d5fc,_0x2ab8e1,_0x2b1e5b,_0x50e3dd){var _0x133717=_0x105bb6;let _0x55384c,_0x446778;try{_0x446778=_0x15ddd1(),_0x55384c=_0x55bbfc[_0x5b2586],!_0x55384c||_0x446778-_0x55384c['ts']>_0x18f631[_0x133717(0x1e1)][_0x133717(0x1b6)]&&_0x55384c[_0x133717(0x292)]&&_0x55384c[_0x133717(0x28d)]/_0x55384c[_0x133717(0x292)]<_0x18f631['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x55bbfc[_0x5b2586]=_0x55384c={'count':0x0,'time':0x0,'ts':_0x446778},_0x55bbfc[_0x133717(0x2b8)]={}):_0x446778-_0x55bbfc[_0x133717(0x2b8)]['ts']>_0x18f631[_0x133717(0x23b)][_0x133717(0x1b6)]&&_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]&&_0x55bbfc['hits']['time']/_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]<_0x18f631[_0x133717(0x23b)][_0x133717(0x281)]&&(_0x55bbfc[_0x133717(0x2b8)]={});let _0x4a3eb6=[],_0x37c4cb=_0x55384c[_0x133717(0x203)]||_0x55bbfc[_0x133717(0x2b8)]['reduceLimits']?_0x1edace:_0xa6a15a,_0x346ed7=_0x4fed08=>{var _0x5c8242=_0x133717;let _0x6f6f7d={};return _0x6f6f7d[_0x5c8242(0x286)]=_0x4fed08[_0x5c8242(0x286)],_0x6f6f7d['elements']=_0x4fed08[_0x5c8242(0x272)],_0x6f6f7d['strLength']=_0x4fed08[_0x5c8242(0x2ae)],_0x6f6f7d[_0x5c8242(0x1de)]=_0x4fed08['totalStrLength'],_0x6f6f7d[_0x5c8242(0x26f)]=_0x4fed08[_0x5c8242(0x26f)],_0x6f6f7d['autoExpandMaxDepth']=_0x4fed08[_0x5c8242(0x1ae)],_0x6f6f7d[_0x5c8242(0x1ea)]=!0x1,_0x6f6f7d['noFunctions']=!_0x56498a,_0x6f6f7d[_0x5c8242(0x1f2)]=0x1,_0x6f6f7d['level']=0x0,_0x6f6f7d[_0x5c8242(0x234)]=_0x5c8242(0x1f9),_0x6f6f7d[_0x5c8242(0x2ad)]=_0x5c8242(0x2a8),_0x6f6f7d['autoExpand']=!0x0,_0x6f6f7d[_0x5c8242(0x28a)]=[],_0x6f6f7d[_0x5c8242(0x1dc)]=0x0,_0x6f6f7d['resolveGetters']=_0x3e1f78[_0x5c8242(0x224)],_0x6f6f7d['allStrLength']=0x0,_0x6f6f7d[_0x5c8242(0x1e7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x6f6f7d;};for(var _0x1ed53f=0x0;_0x1ed53f<_0x2b1e5b[_0x133717(0x24c)];_0x1ed53f++)_0x4a3eb6['push'](_0x3a9ca1[_0x133717(0x1b0)]({'timeNode':_0x2587cc===_0x133717(0x28d)||void 0x0},_0x2b1e5b[_0x1ed53f],_0x346ed7(_0x37c4cb),{}));if(_0x2587cc==='trace'||_0x2587cc===_0x133717(0x2a2)){let _0x53806a=Error[_0x133717(0x252)];try{Error[_0x133717(0x252)]=0x1/0x0,_0x4a3eb6[_0x133717(0x250)](_0x3a9ca1['serialize']({'stackNode':!0x0},new Error()[_0x133717(0x1e4)],_0x346ed7(_0x37c4cb),{'strLength':0x1/0x0}));}finally{Error[_0x133717(0x252)]=_0x53806a;}}return{'method':'log','version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':_0x4a3eb6,'id':_0x5b2586,'context':_0x50e3dd}]};}catch(_0x2def73){return{'method':_0x133717(0x219),'version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':[{'type':_0x133717(0x28e),'error':_0x2def73&&_0x2def73[_0x133717(0x1e5)]}],'id':_0x5b2586,'context':_0x50e3dd}]};}finally{try{if(_0x55384c&&_0x446778){let _0x3cb214=_0x15ddd1();_0x55384c[_0x133717(0x292)]++,_0x55384c[_0x133717(0x28d)]+=_0x14baa2(_0x446778,_0x3cb214),_0x55384c['ts']=_0x3cb214,_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]++,_0x55bbfc[_0x133717(0x2b8)]['time']+=_0x14baa2(_0x446778,_0x3cb214),_0x55bbfc['hits']['ts']=_0x3cb214,(_0x55384c['count']>_0x18f631['perLogpoint'][_0x133717(0x21f)]||_0x55384c[_0x133717(0x28d)]>_0x18f631['perLogpoint'][_0x133717(0x253)])&&(_0x55384c['reduceLimits']=!0x0),(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x21f)]||_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x28d)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x253)])&&(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x203)]=!0x0);}}catch{}}}return _0x916645;}function G(_0x51a9ee){var _0x4b4642=_0x170d0d;if(_0x51a9ee&&typeof _0x51a9ee==_0x4b4642(0x1bf)&&_0x51a9ee[_0x4b4642(0x28b)])switch(_0x51a9ee[_0x4b4642(0x28b)]['name']){case _0x4b4642(0x1ef):return _0x51a9ee[_0x4b4642(0x22e)](Symbol[_0x4b4642(0x279)])?Promise[_0x4b4642(0x1ba)]():_0x51a9ee;case _0x4b4642(0x25a):return Promise['resolve']();}return _0x51a9ee;}((_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x2168ce,_0x3ccb8b,_0xeb75e5,_0x1d8110,_0x4d8f7f,_0x42531a,_0x169273)=>{var _0x328bec=_0x170d0d;if(_0x41edbb['_console_ninja'])return _0x41edbb[_0x328bec(0x280)];let _0x16d08d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x41edbb,_0xeb75e5,_0x193232))return _0x41edbb[_0x328bec(0x280)]=_0x16d08d,_0x41edbb[_0x328bec(0x280)];let _0x4236ba=b(_0x41edbb),_0x1b07b2=_0x4236ba[_0x328bec(0x27e)],_0x55c58e=_0x4236ba[_0x328bec(0x25e)],_0x2cd226=_0x4236ba['now'],_0x5f554c={'hits':{},'ts':{}},_0x1ff60a=J(_0x41edbb,_0x1d8110,_0x5f554c,_0x2168ce,_0x169273,_0x193232===_0x328bec(0x208)?G:void 0x0),_0x2718cd=(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b)=>{let _0xccae86=_0x41edbb['_console_ninja'];try{return _0x41edbb['_console_ninja']=_0x16d08d,_0x1ff60a(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b);}finally{_0x41edbb['_console_ninja']=_0xccae86;}},_0x2a7126=_0x2aacd3=>{_0x5f554c['ts'][_0x2aacd3]=_0x55c58e();},_0x6190d9=(_0x4b8b9a,_0x39ce0d)=>{var _0x48141e=_0x328bec;let _0x241899=_0x5f554c['ts'][_0x39ce0d];if(delete _0x5f554c['ts'][_0x39ce0d],_0x241899){let _0x1589a5=_0x1b07b2(_0x241899,_0x55c58e());_0x159082(_0x2718cd(_0x48141e(0x28d),_0x4b8b9a,_0x2cd226(),_0x217436,[_0x1589a5],_0x39ce0d));}},_0x2ae855=_0x40b04f=>{var _0x5530db=_0x328bec,_0x163aad;return _0x193232===_0x5530db(0x208)&&_0x41edbb['origin']&&((_0x163aad=_0x40b04f==null?void 0x0:_0x40b04f[_0x5530db(0x2b0)])==null?void 0x0:_0x163aad['length'])&&(_0x40b04f[_0x5530db(0x2b0)][0x0][_0x5530db(0x29b)]=_0x41edbb[_0x5530db(0x29b)]),_0x40b04f;};_0x41edbb['_console_ninja']={'consoleLog':(_0xcdac44,_0x49a38d)=>{var _0x380c53=_0x328bec;_0x41edbb[_0x380c53(0x1b3)][_0x380c53(0x219)][_0x380c53(0x1d3)]!==_0x380c53(0x1e3)&&_0x159082(_0x2718cd(_0x380c53(0x219),_0xcdac44,_0x2cd226(),_0x217436,_0x49a38d));},'consoleTrace':(_0x4ae7de,_0x1c3fa5)=>{var _0x331167=_0x328bec,_0x5b578d,_0x15c8c6;_0x41edbb[_0x331167(0x1b3)][_0x331167(0x219)]['name']!==_0x331167(0x251)&&((_0x15c8c6=(_0x5b578d=_0x41edbb[_0x331167(0x258)])==null?void 0x0:_0x5b578d['versions'])!=null&&_0x15c8c6[_0x331167(0x1e7)]&&(_0x41edbb['_ninjaIgnoreNextError']=!0x0),_0x159082(_0x2ae855(_0x2718cd(_0x331167(0x215),_0x4ae7de,_0x2cd226(),_0x217436,_0x1c3fa5))));},'consoleError':(_0xa1808c,_0x49bd48)=>{var _0x375d16=_0x328bec;_0x41edbb[_0x375d16(0x1d8)]=!0x0,_0x159082(_0x2ae855(_0x2718cd(_0x375d16(0x2a2),_0xa1808c,_0x2cd226(),_0x217436,_0x49bd48)));},'consoleTime':_0x32b043=>{_0x2a7126(_0x32b043);},'consoleTimeEnd':(_0x3cc349,_0x481352)=>{_0x6190d9(_0x481352,_0x3cc349);},'autoLog':(_0x2653f8,_0x5ef56c)=>{var _0x7f57ff=_0x328bec;_0x159082(_0x2718cd(_0x7f57ff(0x219),_0x5ef56c,_0x2cd226(),_0x217436,[_0x2653f8]));},'autoLogMany':(_0x2a6453,_0x1e7eea)=>{var _0x5ee2bd=_0x328bec;_0x159082(_0x2718cd(_0x5ee2bd(0x219),_0x2a6453,_0x2cd226(),_0x217436,_0x1e7eea));},'autoTrace':(_0x2144f3,_0x36cfc5)=>{_0x159082(_0x2ae855(_0x2718cd('trace',_0x36cfc5,_0x2cd226(),_0x217436,[_0x2144f3])));},'autoTraceMany':(_0x3ce65f,_0x4f40c3)=>{var _0x273171=_0x328bec;_0x159082(_0x2ae855(_0x2718cd(_0x273171(0x215),_0x3ce65f,_0x2cd226(),_0x217436,_0x4f40c3)));},'autoTime':(_0x10cbb8,_0x396cf2,_0x9ed779)=>{_0x2a7126(_0x9ed779);},'autoTimeEnd':(_0x1ad158,_0x56c01d,_0x591bd6)=>{_0x6190d9(_0x56c01d,_0x591bd6);},'coverage':_0x69ebeb=>{var _0x326f3f=_0x328bec;_0x159082({'method':_0x326f3f(0x261),'version':_0x2168ce,'args':[{'id':_0x69ebeb}]});}};let _0x159082=H(_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x4d8f7f,_0x42531a),_0x217436=_0x41edbb[_0x328bec(0x25b)];return _0x41edbb['_console_ninja'];})(globalThis,'127.0.0.1',_0x170d0d(0x226),\"c:\\\\Users\\\\aronc\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.500\\\\node_modules\",'next.js',_0x170d0d(0x247),_0x170d0d(0x221),_0x170d0d(0x1e6),_0x170d0d(0x1c8),_0x170d0d(0x289),_0x170d0d(0x26d),_0x170d0d(0x297));");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
var _c;
__turbopack_context__.k.register(_c, "EditBotPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_dashboard_bots_%5Bid%5D_edit_page_tsx_8a3b6d6c._.js.map