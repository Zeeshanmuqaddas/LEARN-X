import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, ChevronDown, Activity, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

type Message = {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  agentType?: string;
};

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'agent',
      text: 'Hello! I am your LEARN-X Orchestrator. Would you like me to connect you with the GPT Tutor, Gemini Visualizer, or Claude Summarizer today?',
      agentType: 'Orchestrator'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: "I've routed your query to our specialized agents. The GPT Tutor is analyzing the logic, and Gemini is preparing visual context. Here is your synthesized answer: [Simulated specialized response based on the query].",
        agentType: 'Orchestrator Synthesis'
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 transition-colors z-50 flex items-center justify-center group"
          >
            <Bot className="w-6 h-6 group-hover:animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 w-96 h-[32rem] bg-slate-950 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight flex items-center gap-2">
                    LEARN-X Agent
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <Activity className="w-3 h-3" /> System Nominal
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={cn(
                    "flex max-w-[85%]",
                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    msg.sender === 'user' ? "ml-3 bg-indigo-500" : "mr-3 bg-cyan-600/20 border border-cyan-500/30"
                  )}>
                    {msg.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                  <div className={cn(
                    "rounded-2xl px-4 py-3",
                    msg.sender === 'user' 
                      ? "bg-indigo-600 text-white rounded-tr-sm" 
                      : "bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-sm"
                  )}>
                    {msg.agentType && (
                      <div className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold mb-1">
                        {msg.agentType}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-800 bg-slate-900">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the orchestration agents..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 bg-cyan-600 rounded-xl text-white hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-500">LEARN-X Multi-LLM System</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
