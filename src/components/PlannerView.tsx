import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Clock, Target, ArrowRight } from 'lucide-react';
import { StudyMode } from '@/src/types';

export function PlannerView() {
  const [prompt, setPrompt] = useState<string>('');
  
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            AI Study Planner Agent
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What do you want to master next?
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Tell me your goal, subject, and deadline. I'll generate an adaptive learning roadmap.
          </p>
          
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I want to learn EU Law in 30 days..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-32 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-md text-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 rounded-xl font-medium transition-colors flex items-center gap-2">
              Generate
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">Subject Mastery</h3>
          <p className="text-slate-500 line-clamp-2">Create a structured roadmap for a new subject with daily breakdowns.</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">Exam Prep Coach</h3>
          <p className="text-slate-500 line-clamp-2">Crash course planning with focus on mock tests and weak topics.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">Language Partner</h3>
          <p className="text-slate-500 line-clamp-2">Daily speaking, writing tasks, and grammatical error correction.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Active Roadmaps</h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
        
        <div className="space-y-4">
           {/* Mock Roadmap Item */}
           <div className="p-4 border border-slate-100 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-500">
                 EU
               </div>
               <div>
                 <h4 className="font-bold text-slate-900">EU Law Masterclass</h4>
                 <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                   <Calendar className="w-3 h-3" /> Ends in 12 days
                 </p>
               </div>
             </div>
             
             <div className="flex items-center gap-6 w-full md:w-auto">
               <div className="flex-1 md:w-48">
                 <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                   <span>Day 18 / 30</span>
                   <span>60%</span>
                 </div>
                 <div className="w-full bg-slate-100 rounded-full h-2">
                   <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                 </div>
               </div>
               <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shrink-0">
                 Resume
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
