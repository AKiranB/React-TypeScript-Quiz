import { fetchQuestions, QuestionState } from "utils/API";
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
};

type CheckAnswerProps = {
  e: React.MouseEvent<HTMLButtonElement>;
  questions: QuestionState[];
  number: number;
  gameOver: boolean;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<AnswerObject[]>>;
  setShowNext: React.Dispatch<React.SetStateAction<boolean>>;
  userAnswers: AnswerObject[];
  score: number;
  TOTAL_QUESTIONS: number;
};

const startTrivia =
  ({
    setLoading,
    setGameOver,
    setQuestions,
    setScore,
    setUserAnswers,
    setNumber,
    TOTAL_QUESTIONS,
    difficulty,
    category,
  }: StartTriviaProps) =>
  async () => {
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

const checkAnswer = ({
  e,
  questions,
  number,
  gameOver,
  setScore,
  setIsCorrect,
  setMessage,
  setUserAnswers,
  setShowNext,
  userAnswers,
  score,
  TOTAL_QUESTIONS,
}: CheckAnswerProps) => {
  if (!gameOver) {
    const answer = e.currentTarget.value;
    const correct = questions[number].correct_answer === answer;
    setShowNext(true);
    if (correct) {
      setScore((prev) => prev + 1);
      setIsCorrect(true);
      setMessage("Good Job!");
    } else {
      setIsCorrect(false);
      setMessage(`The correct answer is "${questions[number].correct_answer}"`);
    }
    if (userAnswers.length === TOTAL_QUESTIONS - 1) {
      setMessage(`You scored ${score} out of ${TOTAL_QUESTIONS}, good job!`);
    }

    const answerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
  }
};

export { startTrivia, checkAnswer };
