```tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { CategorySelector } from "./CategorySelector";
import { MessageBubble } from "./MessageBubble";
import { Send, Loader2 } from "lucide-react";

export function ChatInterface() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, category: activeCategory }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Could not connect to Shadow Forge core." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <CategorySelector onSelect={setActiveCategory} activeCategory={activeCategory} />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 mt-20">
            <p className="text-lg">Welcome, Operator Butter.</p>
            <p className="text-sm">Select a category and send a command.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role} content={msg.content} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-sm border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate