import React from 'react';
import { 
  BrainCircuit, 
  Activity, 
  Network, 
  Globe2, 
  Users, 
  Trophy, 
  Route, 
  Wrench,
  Bot
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function AgentsView() {
  const systems = [
    {
      title: "Specialized LLM Agents",
      description: "Uses Gemini (multimodal), GPT (reasoning/tutoring), Claude (summarization/synthesis), and LLaMA (fast/mobile latency) collaboratively.",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      stats: [
        { label: "Latency", value: "~450ms" },
        { label: "Success", value: "99.8%" },
        { label: "Models", value: "4 Active" }
      ]
    },
    {
      title: "Intelligent Orchestration",
      description: "Analyzes user intent and dynamically routes queries to the most appropriate LLM, combining outputs for optimal problem-solving.",
      icon: Activity,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      stats: [
        { label: "Routing Latency", value: "~45ms" },
        { label: "Accuracy", value: "99.9%" },
        { label: "System Load", value: "32%" }
      ]
    },
    {
      title: "Consensus & Debate System",
      description: "Multiple LLMs generate independent responses for complex queries; conflicts are analyzed to synthesize a unified, improved explanation.",
      icon: Bot,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      stats: [
        { label: "Sync Latency", value: "~850ms" },
        { label: "Resolved", value: "12.4k" },
        { label: "Accuracy", value: "98.5%" }
      ]
    },
    {
      title: "Fault Tolerance System",
      description: "Automatically reroutes to alternative models if an LLM is rate-limited or fails, ensuring an uninterrupted learning experience.",
      icon: Wrench,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      stats: [
        { label: "Uptime", value: "99.99%" },
        { label: "Reroutes", value: "2.1k" },
        { label: "Switch Speed", value: "<10ms" }
      ]
    },
    {
      title: "Hybrid Knowledge Graph",
      description: "LLM outputs interconnect dynamically into a shared adaptive graph, tracking learner history for personalized learning pathways.",
      icon: Network,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      stats: [
        { label: "Entities", value: "14.2M" },
        { label: "Read/Write", value: "~12ms" },
        { label: "Continuity", value: "100%" }
      ]
    },
    {
      title: "Cross-Modal Learning",
      description: "Enables multiple modalities—text, image, diagram, and structured summarization—supporting multiple languages and learning styles.",
      icon: Globe2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      stats: [
        { label: "Image Gen", value: "~2.1s" },
        { label: "Synthesis", value: "~1.2s" },
        { label: "Multi-modal", value: "Active" }
      ]
    },
    {
      title: "Agentic Learning Pipelines",
      description: "Automates multi-step workflows (e.g., Claude summarizes, GPT tutor creates questions, Gemini generates visual diagrams) into unified lessons.",
      icon: Route,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      stats: [
        { label: "Active Jobs", value: "840" },
        { label: "Task Success", value: "99.2%" },
        { label: "Avg Steps", value: "4.5" }
      ]
    },
    {
      title: "Core Output Objectives",
      description: "Delivers adaptive experiences, combines LLM strengths, ensures reliability, and builds conceptual understanding via knowledge graphs.",
      icon: Trophy,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
      stats: [
        { label: "Knowledge Gain", value: "+34%" },
        { label: "Retention", value: "92%" },
        { label: "Reliability", value: "99.9%" }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl shadow-cyan-900/10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e511_1px,transparent_1px),linear-gradient(to_bottom,#4f46e511_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
            LEARN-X Intelligence Core
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Multi-LLM Agentic Learning Orchestrator
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed font-medium">
            Simulating a team of expert AI teachers working collaboratively. Unifying multiple Large Language Models into a single intelligent ecosystem for adaptive, multimodal, and reliable education.
          </p>
        </div>
        
        {/* Background icon */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
           <Network className="w-80 h-80 -mb-20 -mr-20 text-cyan-200" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {systems.map((system, index) => {
          const Icon = system.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-2xl", system.bg)} />
              <div className="relative z-10">
                <div className={cn("inline-flex p-3 rounded-xl mb-4 border transition-colors", system.bg, system.color, system.border, "group-hover:bg-white group-hover:shadow-sm")}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight tracking-tight group-hover:text-slate-950">
                  {system.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 mb-4">
                  {system.description}
                </p>

                {system.stats && (
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    {system.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-0.5">
                          {stat.label}
                        </span>
                        <span className="text-sm font-bold text-slate-700">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center mt-8 relative overflow-hidden">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Core Output Objectives</h3>
        <p className="text-slate-500 font-medium max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">Adaptive & Personalized</span>
          <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">Combine LLM Strengths Intelligently</span>
          <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">Ensure Educational Reliability</span>
          <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">Build Deep Long-Term Knowledge</span>
        </p>
      </div>
    </div>
  );
}
