import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === 'user';

  return (
    <div className={cn(
      "flex w-full",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl p-4",
        isUser 
          ? "bg-blue-600 text-white rounded-br-none" 
          : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
      )}>
        <div className="text-sm leading-relaxed whitespace-pre-wrap font-mono">
          {content}
        </div>
      </div>
    </div>
  );
}