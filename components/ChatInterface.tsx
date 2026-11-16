"use client";

import { useChat } from "ai/react";
import { Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto h-[80vh] border rounded-lg bg-white shadow-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <Bot className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p>Welcome to Young AI. How can I help you today?</p>
          </div>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex items-start gap-3 p-3 rounded-lg",
              m.role === "user" ? "bg-blue-50 ml-12" : "bg-gray-50 mr-12"
            )}
          >
            {m.role === "user" ? <User className="w-5 h-5 mt-1" /> : <Bot className="w-5 h-5 mt-1" />}
            <div className="text-sm leading-relaxed">
              <span className="font-bold block mb-1">
                {m.role === "user" ? "You" : "AI"}
              </span>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="relative flex items-center">
          <input
            className="w-full p-3 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input}
            className="absolute right-2 p-2 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
