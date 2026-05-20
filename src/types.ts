export type Subject = {
  id: string;
  name: string;
  progress: number;
  weakTopics: string[];
  nextRevision: string;
};

export type StudyMode = 'Planner' | 'ExamPrep' | 'LanguagePartner';

export type AssessmentScore = {
  date: string;
  score: number;
  topic: string;
};

export type FlashcardDeck = {
  id: string;
  title: string;
  cardCount: number;
  dueToday: number;
};
