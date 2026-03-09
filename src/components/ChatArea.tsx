import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const MOCK_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    content: "Hi! I'm Web Copilot. How can I help you with this page today?",
  },
  {
    id: 2,
    role: 'user',
    content: "Can you summarize the main points?",
  },
  {
    id: 3,
    role: 'assistant',
    content: "Sure! This page is about modern web design principles. Key points include:\n\n1. Embracing minimalism and clear typography.\n2. Strategic use of white space.\n3. Incorporating subtle micro-interactions to delight users.\n\nWould you like me to extract any specific quotes?",
  }
];

export function ChatArea() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 flex flex-col scroll-smooth">
      {MOCK_MESSAGES.map((msg, i) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
          className={`flex w-full group ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          {msg.role === 'assistant' && (
            <div className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-2 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
               <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
          )}
          <div 
            className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap ${
              msg.role === 'user' 
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-br-sm shadow-[0_4px_14px_rgba(79,70,229,0.3)] border border-blue-400/20' 
                : 'bg-[#18181b]/80 text-gray-200 border border-white/[0.08] rounded-bl-sm shadow-sm backdrop-blur-md'
            }`}
          >
            {msg.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
