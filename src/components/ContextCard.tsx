import { motion } from 'framer-motion';

export function ContextCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 py-3 shrink-0"
    >
      <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all hover:bg-white/[0.06] hover:border-white/[0.12] backdrop-blur-xl group">
        <div className="w-9 h-9 rounded-xl bg-[#111] flex flex-shrink-0 items-center justify-center overflow-hidden border border-white/10 shadow-inner group-hover:border-white/20 transition-colors">
          {/* Mock Favicon */}
          <div className="w-4 h-4 rounded-[4px] bg-gradient-to-tr from-blue-400 to-indigo-600 shadow-sm" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-medium text-gray-100 truncate shadow-sm">
            Designing a Modern Web Experience
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium">AI is analyzing this page</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
