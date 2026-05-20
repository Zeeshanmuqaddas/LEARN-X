import React, { useState } from 'react';
import { Eye, EyeOff, Fingerprint, ScanFace, BrainCircuit, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface LoginViewProps {
  onLogin: () => void;
}

export function LoginView({ onLogin }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Animated abstract AI neural network background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }} 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[150px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }} 
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }} 
          className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[100px]"
        />
        
        {/* Abstract structural grid/lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e511_1px,transparent_1px),linear-gradient(to_bottom,#4f46e511_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1, rotate: 360 }} 
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="relative p-3 mb-4 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <BrainCircuit className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl"></div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-tight"
            >
              LEARN-X
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-sm mt-2 font-medium"
            >
              Advanced AI Education Ecosystem
            </motion.p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, type: "spring" }}>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-3.5 pl-11 pr-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-medium"
                  placeholder="Email or Username"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, type: "spring" }}>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-3.5 pl-11 pr-12 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all font-medium"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Forgot Password?
                </a>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isLoading}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold py-3.5 px-4 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 disabled:opacity-70"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    Initialize Session <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </div>
            </motion.button>
          </form>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-4 border-t border-slate-800 pt-6"
          >
            <motion.button 
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0px 0px 20px rgba(34,211,238,0.5)" }} 
              whileTap={{ scale: 0.9, boxShadow: "0px 0px 10px rgba(34,211,238,0.8)" }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              <ScanFace className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.15, rotate: -5, boxShadow: "0px 0px 20px rgba(168,85,247,0.5)" }} 
              whileTap={{ scale: 0.9, boxShadow: "0px 0px 10px rgba(168,85,247,0.8)" }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
            >
              <Fingerprint className="w-6 h-6" />
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-6 text-center space-y-4">
            <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" /> Secure AI-encrypted login system
            </p>
            <p className="text-sm text-slate-400">
              New to the network?{' '}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline decoration-cyan-400/30 underline-offset-4 transition-all">
                Sign Up
              </a>
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
