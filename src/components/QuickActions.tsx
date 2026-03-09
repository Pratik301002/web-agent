import { Sparkles, Link as LinkIcon, FileText, Lightbulb } from 'lucide-react';

const actions = [
  { icon: FileText, label: 'Summarize Page' },
  { icon: LinkIcon, label: 'Extract Links' },
  { icon: Lightbulb, label: 'Key Insights' },
  { icon: Sparkles, label: 'Explain This' },
];

export function QuickActions() {
  return (
    <div className="px-4 py-2 shrink-0">
      <div className="grid grid-cols-2 gap-2.5 mt-2">
        {actions.map((action, i) => (
          <button 
            key={i}
            className="group flex items-center gap-2.5 px-3 py-2.5 bg-[#111111]/60 hover:bg-[#1f1f1f]/80 border border-white/[0.08] hover:border-white/[0.15] rounded-xl transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(255,255,255,0.03)] backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <action.icon className="w-[15px] h-[15px] text-gray-400 group-hover:text-blue-400 transition-colors relative z-10" />
            <span className="text-[11.5px] tracking-wider font-medium text-gray-300 group-hover:text-white transition-colors relative z-10">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
