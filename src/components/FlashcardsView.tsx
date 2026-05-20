import React from 'react';
import { BrainCircuit, Book, Layers, MoreVertical, PlayCircle } from 'lucide-react';
import { FlashcardDeck } from '@/src/types';
import { cn } from '@/src/lib/utils';

const MOCK_DECKS: FlashcardDeck[] = [
  { id: '1', title: 'EU Law: Key Cases', cardCount: 145, dueToday: 24 },
  { id: '2', title: 'German A2 Vocab', cardCount: 320, dueToday: 56 },
  { id: '3', title: 'Stats Formulas', cardCount: 45, dueToday: 0 },
];

export function FlashcardsView() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Memory Graph</h1>
          <p className="text-slate-500 mt-1">Spaced repetition and active recall.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
          <BrainCircuit className="w-4 h-4" />
          <span>Generate from Notes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_DECKS.map((deck) => (
          <div key={deck.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Layers className="w-6 h-6" />
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
            <h3 className="font-bold text-lg text-slate-900 mb-1">{deck.title}</h3>
            <p className="text-sm text-slate-500 flex items-center gap-2 mb-6">
              <Book className="w-4 h-4" /> {deck.cardCount} cards total
            </p>

            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                {deck.dueToday > 0 ? (
                  <div className="text-sm">
                    <span className="font-bold text-rose-600">{deck.dueToday}</span>
                    <span className="text-slate-500"> cards due</span>
                  </div>
                ) : (
                  <div className="text-sm font-medium text-emerald-600">All caught up!</div>
                )}
              </div>
              <button 
                className={cn(
                  "p-2 rounded-full transition-colors", 
                  deck.dueToday > 0 
                    ? "bg-indigo-600 text-white hover:bg-indigo-700" 
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                )}
                disabled={deck.dueToday === 0}
              >
                <PlayCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Empty State / Add New */}
        <button className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-6 flex flex-col items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition-all hover:bg-indigo-50/50">
          <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-3">
            <span className="text-2xl font-bold leading-none">+</span>
          </div>
          <h3 className="font-medium">Create New Deck</h3>
        </button>
      </div>
    </div>
  );
}

// Need to import cn locally or pass it down via utils if missing. Let's fix that.
// I will just use clsx/tailwind-merge for the FlashcardsView in the same file if needed.
