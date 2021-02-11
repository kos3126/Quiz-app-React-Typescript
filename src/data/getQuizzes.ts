import { shuffleArray } from './utils';
import { QuizData } from './Quizzes';

// types
import { Quiz } from './Quizzes';

export type QuizState = Quiz & { answers: string[] };

const otherAnswers = (correct_answer: string) => {
  const wrongAnswers = QuizData.reduce((a: string[], c: Quiz): string[] => {
    if (c.correct_answer !== correct_answer) return a.concat(c.correct_answer);
    return a;
  }, []);
  return shuffleArray(wrongAnswers).slice(0, 3);
};

export const getQuizzes = (): QuizState[] => {
  return shuffleArray(
    QuizData.map((question: Quiz) => ({
      ...question,
      answers: shuffleArray([
        ...otherAnswers(question.correct_answer),
        question.correct_answer,
      ]),
    }))
  );
};
