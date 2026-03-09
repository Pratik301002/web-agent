import { Sparkles, MoreHorizontal } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.08] shrink-0 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-sm z-20 relative">
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.3)] border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="font-semibold text-sm tracking-wide bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
          Web Copilot
        </span>
      </div>
      <button className="p-1.5 text-gray-400 hover:text-white transition-all duration-200 rounded-md hover:bg-white/10 hover:shadow-sm">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
}
