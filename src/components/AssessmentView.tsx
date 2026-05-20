import React, { useState } from 'react';
import { PenTool, CheckCircle, XCircle, AlertCircle, Play, Settings2, BookOpen, HelpCircle, ListOrdered } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Subject } from '@/src/types';

const MOCK_SUBJECTS: Partial<Subject>[] = [
  { id: '1', name: 'EU Law', weakTopics: ['Van Gend en Loos', 'Vertical vs Horizontal'] },
  { id: '2', name: 'Statistics', weakTopics: ['Bayes Theorem', 'Distributions'] },
  { id: '3', name: 'German: A2', weakTopics: [] },
];

export function AssessmentView() {
  const [difficulty, setDifficulty] = useState('Adaptive');
  const [questionType, setQuestionType] = useState('Mixed');
  const [questionCount, setQuestionCount] = useState(20);
  const [selectedSubjectId, setSelectedSubjectId] = useState('all');

  const selectedSubjects = selectedSubjectId === 'all' 
    ? MOCK_SUBJECTS 
    : MOCK_SUBJECTS.filter(s => s.id === selectedSubjectId);

  const combinedWeakTopics = selectedSubjects.flatMap(s => s.weakTopics || []);
  const hasWeakTopics = combinedWeakTopics.length > 0;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Assessments & Quizzes</h1>
          <p className="text-slate-500 mt-1">Test your knowledge and identify weak spots.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
             <div className="relative z-10">
               <h2 className="text-2xl font-bold tracking-tight mb-2">Generate Custom Quiz</h2>
               <p className="text-slate-300 mb-6">
                 Configure your quiz parameters. The AI Agent will dynamically adapt the focus based on your performance.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="sm:col-span-2">
                   <label className="text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                     <BookOpen className="w-4 h-4" /> Subject
                   </label>
                   <select 
                     value={selectedSubjectId}
                     onChange={(e) => setSelectedSubjectId(e.target.value)}
                     className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none cursor-pointer"
                   >
                     <option value="all" className="text-slate-900">All Subjects (Mixed)</option>
                     {MOCK_SUBJECTS.map(sub => (
                       <option key={sub.id} value={sub.id} className="text-slate-900">{sub.name}</option>
                     ))}
                   </select>
                 </div>

                 <div className="sm:col-span-2">
                   <label className="text-sm font-medium text-slate-400 mb-2 block">Agentic Focus Selection</label>
                   <select 
                     value={hasWeakTopics ? 'weak_topics' : 'general'}
                     disabled
                     className="w-full bg-indigo-500/10 border border-indigo-400/30 rounded-lg px-3 py-2 text-indigo-200 focus:outline-none appearance-none cursor-not-allowed"
                   >
                     {hasWeakTopics ? (
                       <option value="weak_topics" className="text-slate-900">Targeting Weak Topics ({combinedWeakTopics.join(', ')})</option>
                     ) : (
                       <option value="general" className="text-slate-900">General Subject Review (Mastery Verified)</option>
                     )}
                   </select>
                   <p className="text-xs text-indigo-300/70 mt-2">
                     * Automatically selected by the AI based on your performance history.
                   </p>
                 </div>

                 <div>
                   <label className="text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                     <Settings2 className="w-4 h-4" /> Difficulty
                   </label>
                   <select 
                     value={difficulty}
                     onChange={(e) => setDifficulty(e.target.value)}
                     className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none cursor-pointer"
                   >
                     <option value="Adaptive" className="text-slate-900">Adaptive</option>
                     <option value="Beginner" className="text-slate-900">Beginner</option>
                     <option value="Intermediate" className="text-slate-900">Intermediate</option>
                     <option value="Advanced" className="text-slate-900">Advanced</option>
                   </select>
                 </div>
                 
                 <div>
                   <label className="text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                     <HelpCircle className="w-4 h-4" /> Question Type
                   </label>
                   <select 
                     value={questionType}
                     onChange={(e) => setQuestionType(e.target.value)}
                     className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none cursor-pointer"
                   >
                     <option value="Mixed" className="text-slate-900">Mixed</option>
                     <option value="MCQ" className="text-slate-900">Multiple Choice (MCQ)</option>
                     <option value="Short Answer" className="text-slate-900">Short Answer</option>
                   </select>
                 </div>

                 <div className="sm:col-span-2">
                   <label className="text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                     <ListOrdered className="w-4 h-4" /> Number of Questions
                   </label>
                   <select 
                     value={questionCount}
                     onChange={(e) => setQuestionCount(Number(e.target.value))}
                     className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none cursor-pointer"
                   >
                     <option value={10} className="text-slate-900">10 Questions</option>
                     <option value={20} className="text-slate-900">20 Questions</option>
                     <option value={30} className="text-slate-900">30 Questions</option>
                     <option value={50} className="text-slate-900">50 Questions</option>
                   </select>
                 </div>
               </div>

               <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors">
                 <Play className="w-5 h-5" /> Start Custom Quiz
               </button>
             </div>
             {/* Decorative Background */}
             <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
               <PenTool className="w-64 h-64 -mb-16 -mr-16" />
             </div>
          </div>

          <h3 className="font-bold text-lg text-slate-900">Recent Results</h3>
          <div className="space-y-4">
            {[
              { title: 'EU Law: Direct Effect', score: 85, total: 20, icon: CheckCircle, iconColor: 'text-emerald-500' },
              { title: 'Stats: Distributions', score: 45, total: 20, icon: XCircle, iconColor: 'text-rose-500' },
            ].map((result, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <result.icon className={cn("w-8 h-8", result.iconColor)} />
                  <div>
                    <h4 className="font-bold text-slate-900">{result.title}</h4>
                    <p className="text-sm text-slate-500">Completed 2 days ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-slate-900">{result.score}%</div>
                  <div className="text-sm text-slate-500">{Math.round((result.score/100) * result.total)} / {result.total}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Focus Areas
            </h3>
            {hasWeakTopics ? (
              <>
                <p className="text-sm text-amber-800 mb-4">
                  Your recent performance indicates you should review the following topics before taking another mock exam:
                </p>
                <ul className="space-y-2">
                  {selectedSubjects.flatMap(sub => 
                    (sub.weakTopics || []).map(topic => (
                      <li key={`${sub.id}-${topic}`} className="text-sm font-medium text-amber-900 bg-amber-100/50 px-3 py-2 rounded-lg flex items-center justify-between">
                        <span className="truncate pr-4">{topic}</span>
                        <span className="text-amber-700/80 text-xs font-medium bg-amber-200/50 px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap">
                          <BookOpen className="w-3 h-3" />
                          Subject: {sub.name}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
                <button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-xl transition-colors text-sm">
                  Generate Focus Quiz
                </button>
              </>
            ) : (
              <p className="text-sm text-amber-800">
                No specific weak topics detected for the selected subject. Keep up the good work!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
