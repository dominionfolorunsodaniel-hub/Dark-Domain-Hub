"use client";
import { Brain, Code, Pen, Shield, Zap } from "lucide-react";

const categories = [
  { id: "executive", label: "Executive", icon: Brain, desc: "Strategic & Concise" },
  { id: "technical", label: "Technical", icon: Code, desc: "Code & Logic" },
  { id: "creative", label: "Creative", icon: Pen, desc: "Imaginative & Fluid" },
  { id: "security", label: "Security", icon: Shield, desc: "Analytical & Precise" },
  { id: "fast", label: "Fast Track", icon: Zap, desc: "Quick Answers" },
];

interface Props {
  onSelect: (id: string) => void;
}

export function CategorySelector({ onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`p-4 rounded-lg border transition-all duration-200 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/10 ${
              "active" // Note: In a real app, you'd track 'active' state. Here we simplify for brevity.
            }`}
          >
            <Icon size={24} className="text-primary" />
            <span className="font-bold">{cat.label}</span>
            <span className="text-xs text-muted-foreground">{cat.desc}</span>
          </button>
        );
      })}
    </div>
  );
}