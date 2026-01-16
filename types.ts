
export enum Grade {
  GRADE_6 = '6',
  GRADE_7 = '7',
  GRADE_8 = '8',
  GRADE_9 = '9'
}

export enum ExerciseType {
  MULTIPLE_CHOICE = 'MCQ',
  FILL_BLANK = 'FILL',
  MATCHING = 'MATCH',
  SENTENCE_USAGE = 'SENTENCE',
  MEMORY_GAME = 'MEMORY',
  CROSSWORD = 'CROSSWORD'
}

export interface Vocabulary {
  word: string;
  pronunciation: string;
  meaning: string;
  example?: string;
}

export interface StudentInfo {
  name: string;
  grade: Grade;
  className: string;
  avatar: string | null;
  mode: 'free' | 'certificate';
}

export interface Question {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  word?: string;
}

export interface Unit {
  id: number;
  title: string;
  vocab: Vocabulary[];
}
