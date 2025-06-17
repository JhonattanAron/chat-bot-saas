/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIResponse } from "@/interfaces/api-response-interface";
import { create } from "zustand";

interface ChatAssistant {
  id?: string;
  user_id: string;
  name: string;
  description: string;
  funciones: string;
  type: string;
  status: string;
  use_case: string;
  welcome_menssaje: string;
}

interface ChatAssistantStore {
  assistants: ChatAssistant[];
  loading: boolean;
  error: string | null;
  createAssistant: (assistant: ChatAssistant) => Promise<APIResponse>;
  updateAssistant: (assistant: ChatAssistant) => Promise<void>;
  deleteAssistant: (id: string) => Promise<void>;
  setAssistants: (assistants: ChatAssistant[]) => void;
  setError: (error: string | null) => void;
}

export const useChatAssistantStore = create<ChatAssistantStore>((set, get) => ({
  assistants: [],
  loading: false,
  error: null,

  setAssistants: (assistants) => set({ assistants }),
  setError: (error) => set({ error }),

  createAssistant: async (assistant) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/asistant-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: assistant.user_id,
          name: assistant.name,
          description: assistant.description,
          funciones: assistant.funciones,
          type: assistant.type,
          status: assistant.status,
          use_case: assistant.use_case,
          welcome_menssaje: assistant.welcome_menssaje,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { data, error: true, local: assistant };
      } else {
        set((state) => ({
          assistants: [...state.assistants, data],
          loading: false,
        }));
        return { data, error: false }; // <-- retorna la respuesta del servidor
      }
    } catch (err: any) {
      set({ error: err.message, loading: false });
      throw err; // <-- lanza el error para manejarlo donde se llame
    }
  },

  updateAssistant: async (assistant) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/asistant-tasks", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(assistant),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error updating assistant");
      set((state) => ({
        assistants: state.assistants.map((a) =>
          a.id === assistant.id ? { ...a, ...assistant } : a
        ),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  deleteAssistant: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/asistant-tasks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error deleting assistant");
      set((state) => ({
        assistants: state.assistants.filter((a) => a.id !== id),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
