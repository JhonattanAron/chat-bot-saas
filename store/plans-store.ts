import { create } from "zustand";

export interface Plan {
  id: string;
  name: string;
  limits: {
    chatbots: number;
    tokens_per_month: number;
    conversations_per_month: number;
  };
  price: number;
  features: string[];
}

export interface UserPlan {
  user_id: string;
  plan: Plan;
  reference: string;
  created_at: string;
  expires_at?: string;
}

interface PlansState {
  userPlan: UserPlan | null;
  availablePlans: Plan[];
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchUserPlan: (userId: string) => Promise<void>;
  fetchAvailablePlans: () => Promise<void>;
  assignPlan: (userId: string, planId: string) => Promise<void>;
  checkLimits: (userId: string) => Promise<any>;
}

const API_BASE_URL = "http://localhost:8080";

export const usePlansStore = create<PlansState>((set, get) => ({
  userPlan: null,
  availablePlans: [
    {
      id: "basic",
      name: "Básico",
      limits: {
        chatbots: 3,
        tokens_per_month: 10000,
        conversations_per_month: 100,
      },
      price: 0,
      features: ["3 Chatbots", "10,000 tokens/mes", "100 conversaciones/mes"],
    },
    {
      id: "standard",
      name: "Estándar",
      limits: {
        chatbots: 10,
        tokens_per_month: 50000,
        conversations_per_month: 500,
      },
      price: 29,
      features: [
        "10 Chatbots",
        "50,000 tokens/mes",
        "500 conversaciones/mes",
        "Soporte prioritario",
      ],
    },
    {
      id: "advanced",
      name: "Avanzado",
      limits: {
        chatbots: 25,
        tokens_per_month: 150000,
        conversations_per_month: 1500,
      },
      price: 79,
      features: [
        "25 Chatbots",
        "150,000 tokens/mes",
        "1,500 conversaciones/mes",
        "Integraciones avanzadas",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      limits: {
        chatbots: 100,
        tokens_per_month: 500000,
        conversations_per_month: 5000,
      },
      price: 199,
      features: [
        "100 Chatbots",
        "500,000 tokens/mes",
        "5,000 conversaciones/mes",
        "API completa",
        "Soporte 24/7",
      ],
    },
  ],
  isLoading: false,
  error: null,

  fetchUserPlan: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/plans/user-plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error("Error al obtener el plan del usuario");
      }

      const userPlan = await response.json();
      set({ userPlan, isLoading: false });
    } catch (error) {
      console.error("Error fetching user plan:", error);
      // Si no hay plan asignado, usar plan básico por defecto
      const basicPlan = get().availablePlans.find((p) => p.id === "basic");
      if (basicPlan) {
        set({
          userPlan: {
            user_id: userId,
            plan: basicPlan,
            reference: "default",
            created_at: new Date().toISOString(),
          },
          isLoading: false,
          error: null,
        });
      } else {
        set({
          error: error instanceof Error ? error.message : "Error desconocido",
          isLoading: false,
        });
      }
    }
  },

  fetchAvailablePlans: async () => {
    // Los planes están hardcodeados por ahora
    set({ isLoading: false });
  },

  assignPlan: async (userId: string, planId: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/plans/assign`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId, planId }),
      });

      if (!response.ok) {
        throw new Error("Error al asignar el plan");
      }

      const result = await response.json();
      // Refrescar el plan del usuario
      await get().fetchUserPlan(userId);
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Error desconocido",
        isLoading: false,
      });
    }
  },

  checkLimits: async (userId: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/plans/limits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error("Error al verificar límites");
      }

      return await response.json();
    } catch (error) {
      console.error("Error checking limits:", error);
      return null;
    }
  },
}));
