import React from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { format, addDays, startOfWeek } from 'date-fns';

export function CalendarView() {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Habits & Schedule</h1>
          <p className="text-slate-500 mt-1">Consistency is key to mastery.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h2 className="font-semibold text-lg text-slate-900">This Week</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-medium text-slate-700 min-w-[100px] text-center">
              {format(today, 'MMMM yyyy')}
            </span>
            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 border-b border-slate-100 divide-x divide-slate-100">
          {weekDays.map((date, i) => {
            const isToday = format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
            // Mock some completed days
            const isCompleted = i < 3; 
            
            return (
              <div key={i} className={cn(
                "p-4 flex flex-col items-center justify-center gap-2",
                isToday ? "bg-indigo-50/50" : "bg-white"
              )}>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {format(date, 'EEE')}
                </span>
                <span className={cn(
                  "text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full",
                  isToday ? "bg-indigo-600 text-white shadow-sm" : "text-slate-700"
                )}>
                  {format(date, 'd')}
                </span>
                
                <div className="mt-2 h-6 flex items-center justify-center">
                  {isCompleted && <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center"><Check className="w-4 h-4" /></div>}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-slate-900 mb-4">Today's Tasks</h3>
          <div className="space-y-3">
            {[
              { time: '09:00 AM', title: 'EU Law: Flashcards Due', type: 'Memory', duration: '15m' },
              { time: '02:00 PM', title: 'Stats Mock Test', type: 'Assessment', duration: '45m' },
              { time: '06:00 PM', title: 'German Speaking Partner', type: 'Practice', duration: '30m' },
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-sm transition-all group">
                <div className="text-sm font-bold text-slate-500 w-20 pt-1">
                  {task.time}
                </div>
                <div className="w-1.5 h-full min-h-[40px] bg-slate-200 rounded-full group-hover:bg-indigo-400 transition-colors"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{task.title}</h4>
                  <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-md text-xs font-medium">{task.type}</span>
                    <span>{task.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
