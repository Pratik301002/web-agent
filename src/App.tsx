import { Header } from './components/Header';
import { ContextCard } from './components/ContextCard';
import { QuickActions } from './components/QuickActions';
import { ChatArea } from './components/ChatArea';
import { InputSection } from './components/InputSection';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-black/40 border-l border-white/5 shadow-2xl backdrop-blur-2xl text-gray-100 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Header />

      {/* Scrollable main content */}
      <div className="flex-1 overflow-y-auto flex flex-col pt-1 relative z-10 scroll-smooth">
        <ContextCard />

        <div className="mt-1">
          <QuickActions />
        </div>

        <div className="my-2 mx-4 border-t border-white/[0.04]" />

        <ChatArea />
      </div>

      <InputSection />
      
    </div>
  );
}

export default App;
