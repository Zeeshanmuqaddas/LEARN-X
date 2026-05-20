import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';
import { Target, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Subject } from '@/src/types';
import { cn } from '@/src/lib/utils';

const MOCK_DATA = [
  { name: 'Mon', score: 65 },
  { name: 'Tue', score: 72 },
  { name: 'Wed', score: 68 },
  { name: 'Thu', score: 85 },
  { name: 'Fri', score: 82 },
  { name: 'Sat', score: 90 },
  { name: 'Sun', score: 94 },
];

const MOCK_SUBJECTS: Subject[] = [
  { id: '1', name: 'EU Law: Direct Effect', progress: 75, weakTopics: ['Van Gend en Loos', 'Vertical vs Horizontal'], nextRevision: 'Today' },
  { id: '2', name: 'Statistics: Probability', progress: 40, weakTopics: ['Bayes Theorem', 'Distributions'], nextRevision: 'Tomorrow' },
  { id: '3', name: 'German: A2 Conversation', progress: 85, weakTopics: ['Dative Case'], nextRevision: 'In 2 Days' },
];

export function DashboardView() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back, JD</h1>
          <p className="text-slate-500 mt-1">Here's your learning progress for the week.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
          <TrendingUp className="w-4 h-4" />
          <span>7 Day Study Streak!</span>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Overall Mastery</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">68%</span>
              <span className="text-emerald-600 text-sm font-medium">+4%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Needs Attention</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">3</span>
              <span className="text-slate-500 text-sm">Topics</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Quizzes Passed</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">12</span>
              <span className="text-slate-500 text-sm">This week</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Performance Intelligence</h2>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="4 4" />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Priority Focus */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Priority Focus</h2>
          <div className="space-y-4">
            {MOCK_SUBJECTS.map((sub) => (
              <div key={sub.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 group hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-800">{sub.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded-md">
                    {sub.nextRevision}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mb-3">
                  <div 
                    className={cn("h-1.5 rounded-full", sub.progress > 70 ? "bg-emerald-500" : sub.progress > 40 ? "bg-amber-500" : "bg-rose-500")} 
                    style={{ width: `${sub.progress}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sub.weakTopics.map(topic => (
                    <span key={topic} className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
