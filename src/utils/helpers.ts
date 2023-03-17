import { fetchQuestions, QuestionState } from "API";
import { AnswerObject } from "types/types";

type StartTriviaProps = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    setQuestions: React.Dispatch<React.SetStateAction<QuestionState[]>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setUserAnswers: React.Dispatch<React.SetStateAction<AnswerObject[]>>;
    setNumber: React.Dispatch<React.SetStateAction<number>>;
    TOTAL_QUESTIONS: number;
    difficulty: string;
    category: string;
  }

 const startTrivia = async ({
  setLoading,
  setGameOver,
  setQuestions,
  setScore,
  setUserAnswers,
  setNumber,
  TOTAL_QUESTIONS,
  difficulty,
  category,
}: StartTriviaProps) => {
  setLoading(true);
  setGameOver(false);
  const newQuestions = await fetchQuestions(
    TOTAL_QUESTIONS,
    difficulty,
    category
  );
  setQuestions(newQuestions);
  setScore(0);
  setUserAnswers([]);
  setNumber(0);
  setLoading(false);
};

  export { startTrivia}