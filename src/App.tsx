import React, { useState } from 'react';
import { Sidebar, NavItem } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { PlannerView } from './components/PlannerView';
import { FlashcardsView } from './components/FlashcardsView';
import { CalendarView } from './components/CalendarView';
import { AssessmentView } from './components/AssessmentView';
import { LoginView } from './components/LoginView';
import { LogoutView } from './components/LogoutView';
import { AgentsView } from './components/AgentsView';
import { FloatingChat } from './components/FloatingChat';

type AuthState = 'login' | 'app' | 'logout';

export default function App() {
  const [authState, setAuthState] = useState<AuthState>('login');
  const [currentView, setCurrentView] = useState<NavItem>('Dashboard');

  if (authState === 'login') {
    return <LoginView onLogin={() => setAuthState('app')} />;
  }

  if (authState === 'logout') {
    return <LogoutView onLoginAgain={() => setAuthState('login')} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <DashboardView />;
      case 'Planner':
        return <PlannerView />;
      case 'Assessment':
        return <AssessmentView />;
      case 'Flashcards':
        return <FlashcardsView />;
      case 'Calendar':
        return <CalendarView />;
      case 'Agents':
        return <AgentsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header onLogout={() => setAuthState('logout')} />
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderView()}
        </div>
      </main>
      <FloatingChat />
    </div>
  );
}
