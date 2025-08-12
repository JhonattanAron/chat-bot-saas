module.exports = {

"[project]/store/chatAsistantStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChatAssistantStore": (()=>useChatAssistantStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useChatAssistantStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
}}),

};

//# sourceMappingURL=store_chatAsistantStore_ts_142104d3._.js.map