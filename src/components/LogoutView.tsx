import React, { useEffect, useState } from 'react';
import { BrainCircuit, LogIn, LogOut } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LogoutViewProps {
  onLoginAgain: () => void;
}

export function LogoutView({ onLoginAgain }: LogoutViewProps) {
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    if (countdown <= 0) {
      onLoginAgain();
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onLoginAgain]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Animated fading AI learning waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-cyan-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-purple-900/10 blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-sm px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex flex-col items-center text-center backdrop-blur-md bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
          
          <div className="mb-6 relative">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center opacity-50">
              <BrainCircuit className="w-8 h-8 text-slate-500" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <LogOut className="w-4 h-4 ml-0.5" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-200 mb-3 tracking-tight">Session Terminated</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            You have successfully logged out of the LEARN-X neural network.
          </p>

          <div className="w-full space-y-3">
            <button
              onClick={onLoginAgain}
              className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" /> Login Again
            </button>
            <button className="w-full rounded-xl bg-transparent border border-slate-700 text-slate-300 font-medium py-3 px-4 hover:bg-slate-800 hover:text-white transition-colors duration-300">
              Exit
            </button>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800/50 w-full">
            <p className="text-xs font-medium text-slate-500">
              Redirecting to authentication portal in <span className="text-cyan-400 tabular-nums">{countdown}s</span>...
            </p>
            <div className="w-full h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
               <div 
                 className="h-full bg-cyan-500/50 rounded-full transition-all duration-1000 ease-linear"
                 style={{ width: `${(countdown / 8) * 100}%` }}
               ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
