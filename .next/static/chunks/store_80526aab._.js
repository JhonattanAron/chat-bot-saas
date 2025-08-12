(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/store/chatAsistantStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChatAssistantStore": (()=>useChatAssistantStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const NEST_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEST_API_URL || "http://localhost:8080";
const useChatAssistantStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        assistants: [],
        loading: false,
        error: null,
        setAssistants: (assistants)=>set({
                assistants
            }),
        setError: (error)=>set({
                error
            }),
        createFaq: async (faqData)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/faq-tasks", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(faqData)
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error creating FAQ");
                // Opcional: actualizar el estado local si lo necesitas
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        },
        updateFaq: async (faqUpdate)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/faq-tasks", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(faqUpdate)
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error updating FAQ");
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        },
        deleteFaq: async (params)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const query = new URLSearchParams(params).toString();
                const res = await fetch(`/api/faq-tasks?${query}`, {
                    method: "DELETE"
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error deleting FAQ");
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        },
        getAssistants: async (user_id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/asistant-tasks?user_id=${user_id}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error fetching assistants");
                set({
                    assistants: data,
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                return [];
            }
        },
        getAssistantById: async (chat_id, user_id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/asistant-get?chat_id=${chat_id}&user_id=${user_id}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error fetching assistants");
                set({
                    assistant: data,
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                return [];
            }
        },
        createAssistant: async (assistant)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/asistant-tasks", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id: assistant.user_id,
                        name: assistant.name,
                        description: assistant.description,
                        funciones: assistant.funciones,
                        type: assistant.type,
                        status: assistant.status,
                        use_case: assistant.use_case,
                        welcome_message: assistant.welcome_message
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    return {
                        data,
                        error: true,
                        local: assistant
                    };
                } else {
                    set((state)=>({
                            assistants: [
                                ...state.assistants,
                                data
                            ],
                            loading: false
                        }));
                    return {
                        data,
                        error: false
                    };
                }
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        },
        updateAssistant: async (assistant)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/asistant-tasks", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(assistant)
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error updating assistant");
                set((state)=>({
                        assistants: state.assistants.map((a)=>a._id === assistant._id ? {
                                ...a,
                                ...assistant
                            } : a),
                        loading: false
                    }));
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        deleteAssistant: async (id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/asistant-tasks", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id
                    })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error deleting assistant");
                set((state)=>({
                        assistants: state.assistants.filter((a)=>a._id !== id),
                        loading: false
                    }));
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/store/ProductStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useProductStore": (()=>useProductStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        products: [],
        loading: false,
        error: null,
        setProducts: (products)=>set({
                products
            }),
        setError: (error)=>set({
                error
            }),
        AddProduct: async (product, user_id, assistant_id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/products-tasks?user_id=${encodeURIComponent(user_id)}&assistant_id=${encodeURIComponent(assistant_id)}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error fetching products");
                set({
                    products: data,
                    loading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        fetchProducts: async (user_id, assistant_id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/products-tasks?user_id=${encodeURIComponent(user_id)}&assistant_id=${encodeURIComponent(assistant_id)}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error fetching products");
                set({
                    products: data,
                    loading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        fetchProductById: async (id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/products-tasks?id=${encodeURIComponent(id)}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Error fetching product");
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                return null;
            }
        },
        updateProduct: async (id, data, user_id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/products-tasks?id=${encodeURIComponent(id)}&user_id=${encodeURIComponent(user_id)}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                if (!res.ok) throw new Error(result.error || "Error updating product");
                // Opcional: refresca productos
                // await get().fetchProducts(user_id);
                set({
                    loading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        deleteProduct: async (id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/products-tasks?id=${encodeURIComponent(id)}`, {
                    method: "DELETE"
                });
                const result = await res.json();
                if (!res.ok) throw new Error(result.error || "Error deleting product");
                set((state)=>({
                        products: state.products.filter((p)=>p.id !== id),
                        loading: false
                    }));
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/store/functionsStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFunctionsStore": (()=>useFunctionsStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useFunctionsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        functions: [],
        loading: false,
        error: null,
        setFunctions: (functions)=>set({
                functions
            }),
        setError: (error)=>set({
                error
            }),
        fetchFunctions: async (user_id, assistant_id)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/functions-tasks?user_id=${encodeURIComponent(user_id)}&assistant_id=${encodeURIComponent(assistant_id)}`);
                const data = await res.json();
                if (!res.ok || !data.success) throw new Error(data.error || "Error fetching functions");
                set({
                    functions: data.functions,
                    loading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        addFunction: async (user_id, assistant_id, func)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/functions-tasks", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id,
                        assistant_id,
                        function: func
                    })
                });
                const data = await res.json();
                if (!res.ok || !data.success) throw new Error(data.error || "Error adding function");
                // Opcional: refresca funciones
                await get().fetchFunctions(user_id, assistant_id);
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        },
        updateFunction: async (user_id, assistant_id, functionId, func)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/functions-tasks/${functionId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id,
                        assistant_id,
                        function: func
                    })
                });
                const data = await res.json();
                if (!res.ok || !data.success) throw new Error(data.error || "Error updating function");
                await get().fetchFunctions(user_id, assistant_id);
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        },
        deleteFunction: async (user_id, assistant_id, functionId)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const url = `/api/functions-tasks/${functionId}?user_id=${encodeURIComponent(user_id)}&assistant_id=${encodeURIComponent(assistant_id)}`;
                const res = await fetch(url, {
                    method: "DELETE"
                });
                const data = await res.json();
                if (!res.ok || !data.success) throw new Error(data.error || "Error deleting function");
                await get().fetchFunctions(user_id, assistant_id);
                set({
                    loading: false
                });
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
                throw err;
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/store/chatControlStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChatStore": (()=>useChatStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useChatStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        currentChat: null,
        chats: [],
        loading: false,
        error: null,
        startChat: async ({ userId, assistant_id, promt })=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/chat/start", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId,
                        assistant_id,
                        promt
                    })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to start chat");
                return data;
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        sendMessage: async ({ chatId, assistant_id, role, content })=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch("/api/chat/message", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chatId,
                        assistant_id,
                        role,
                        content
                    })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to send message");
                set((state)=>({
                        currentChat: state.currentChat ? {
                            ...state.currentChat,
                            messages: [
                                ...state.currentChat.messages || [],
                                {
                                    role,
                                    content
                                },
                                {
                                    role: "assistant",
                                    content: data.response
                                }
                            ]
                        } : null,
                        loading: false
                    }));
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        fetchChat: async (chatId)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/chat/${chatId}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to fetch chat");
                set({
                    currentChat: data.chat,
                    loading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        fetchUserChats: async (userId)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const res = await fetch(`/api/chat/user/${userId}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to fetch chats");
                set({
                    chats: data.chats,
                    loading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    loading: false
                });
            }
        },
        clearError: ()=>set({
                error: null
            })
    })));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=store_80526aab._.js.map