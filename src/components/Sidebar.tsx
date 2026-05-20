import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  PenTool, 
  BrainCircuit, 
  Calendar,
  Settings,
  Brain,
  Bot
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type NavItem = 'Dashboard' | 'Planner' | 'Assessment' | 'Flashcards' | 'Calendar' | 'Agents';

interface SidebarProps {
  currentView: NavItem;
  setCurrentView: (view: NavItem) => void;
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const items = [
    { name: 'Dashboard' as NavItem, icon: LayoutDashboard, label: 'Overview' },
    { name: 'Planner' as NavItem, icon: Map, label: 'Study Planner' },
    { name: 'Assessment' as NavItem, icon: PenTool, label: 'Assess & Quiz' },
    { name: 'Flashcards' as NavItem, icon: BrainCircuit, label: 'Memory' },
    { name: 'Calendar' as NavItem, icon: Calendar, label: 'Schedule' },
    { name: 'Agents' as NavItem, icon: Bot, label: 'AI Core' },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-slate-50/50 hidden md:flex flex-col h-screen">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-sm">
          <Brain className="w-6 h-6" />
        </div>
        <div className="font-bold text-xl tracking-tight text-slate-900">LEARN-X</div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setCurrentView(item.name)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-indigo-100/50 text-indigo-700" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-indigo-600" : "text-slate-400")} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
          <Settings className="w-5 h-5 text-slate-400" />
          Settings
        </button>
      </div>
    </aside>
  );
}
