"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg: Message = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate delay
    await new Promise(r => setTimeout(r, 500));
    setMessages((m) => [...m, { role: "assistant", content: "Data received." }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[500px] border border-gray-700 rounded-lg overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-900">
        {messages.map((m, i) => (
          <div key={i} className={`p-2 rounded ${m.role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"} max-w-[80%]`}>
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={send} className="flex p-2 bg-gray-800 border-t border-gray-700">
        <input 
          className="flex-1 p-2 rounded bg-gray-900 text-white border border-gray-600" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Type..."
        />
        <button 
          type="submit" 
          disabled={loading}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}