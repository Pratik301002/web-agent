import { ArrowUp } from 'lucide-react';

export function InputSection() {
  return (
    <div className="p-4 shrink-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent relative z-10 pt-6 mt-[-10px]">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl opacity-40 group-focus-within:opacity-80 blur-md transition duration-500"></div>
        <div className="relative flex items-center bg-[#111111]/80 backdrop-blur-xl border border-white/[0.15] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-focus-within:border-blue-500/50 transition-colors">
          <input 
            type="text"
            placeholder="Ask anything about this page..."
            className="w-full bg-transparent border-none text-[13.5px] text-gray-100 placeholder-gray-400 px-4 py-3.5 focus:outline-none focus:ring-0"
          />
          <button className="flex items-center justify-center p-2 mr-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="text-center mt-3 mb-1">
        <span className="text-[10px] text-gray-500 tracking-wide font-medium">AI can make mistakes. Consider verifying important info.</span>
      </div>
    </div>
  );
}
