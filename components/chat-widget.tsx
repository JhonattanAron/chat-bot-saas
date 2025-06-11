"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "¡Hola! Soy el asistente virtual de ChatBot SaaS. ¿En qué puedo ayudarte hoy?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const ChatWidget = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "¡Gracias por tu mensaje! ¿En qué más puedo ayudarte?",
        "Entiendo lo que necesitas. ¿Hay algo más que quieras saber sobre nuestros chatbots?",
        "Nuestros planes incluyen todas las características que mencionaste. ¿Te gustaría una demostración personalizada?",
        "Puedo ayudarte a configurar tu primer chatbot en menos de 5 minutos. ¿Quieres comenzar ahora?",
        "Esa es una excelente pregunta. Nuestros chatbots son compatibles con WhatsApp Business y se integran fácilmente en tu sitio web.",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="chat-window bg-white dark:bg-gray-900 rounded-2xl overflow-hidden w-[350px] md:w-[400px] border border-gray-200 dark:border-gray-800">
            {/* Chat Header */}
            <div className="gradient-bg p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">ChatBot SaaS</h3>
                  <p className="text-xs text-gray-200">Asistente virtual</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMinimize}
                  className="text-gray-200 hover:text-white"
                >
                  {isMinimized ? (
                    <Maximize2 size={18} />
                  ) : (
                    <Minimize2 size={18} />
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="text-gray-200 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "350px" }}
                  exit={{ height: 0 }}
                  className="p-4 h-[350px] overflow-y-auto bg-gray-50 dark:bg-gray-950"
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.sender === "bot" && (
                        <div className="mr-2 flex-shrink-0">
                          <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      )}
                      <div
                        className={`chat-bubble ${
                          message.sender === "user"
                            ? "user-bubble bg-black text-white"
                            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        } p-3 rounded-lg max-w-[75%] shadow-sm`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs mt-1 opacity-60">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="ml-2 flex-shrink-0">
                          <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-800 dark:text-white">
                              Tú
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="mr-2 flex-shrink-0">
                        <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                        <div className="flex space-x-1">
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat Input */}
            {!isMinimized && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-grow mr-2"
                    disabled={isTyping}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isTyping || !input.trim()}
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg z-50"
        >
          <MessageSquare className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ChatWidget;
