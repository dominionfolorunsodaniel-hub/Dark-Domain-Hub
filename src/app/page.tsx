import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4 md:p-8">
      <header className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            SHADOW FORGE
          </h1>
          <p className="text-slate-400 text-sm mt-1">Operator: Butter</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-slate-500">SYSTEM ONLINE</span>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
}