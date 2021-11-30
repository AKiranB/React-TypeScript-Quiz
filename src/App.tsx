import React from "react";
import { useState } from "react";
import { fetchQuestions } from "./API";

//componenets
import QuestionCard from "./components/QuestionCard";

//types
import { QuestionState, Difficulty } from "./API";
import {
  ChakraProvider,
  theme,
  Box,
  Grid,
  VStack,
  Code,
  Link,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    console.log(newQuestions);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <div className="App">
              <h1>React Quiz</h1>
              {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className="start" onClick={startTrivia}>
                  Start
                </button>
              ) : null}
              {!gameOver ? <p className="score">Score:{score}</p> : null}
              {loading && <p>Loading Questions...</p>}
              {!loading && !gameOver ? (
                <QuestionCard
                  questionNumber={number + 1}
                  totalQuestions={TOTAL_QUESTIONS}
                  question={questions[number].question}
                  answer={questions[number].answers}
                  userAnswer={userAnswers ? userAnswers[number] : undefined}
                  callback={checkAnswer}
                />
              ) : null}
              {!gameOver &&
              !loading &&
              userAnswers.length === number + 1 &&
              number !== TOTAL_QUESTIONS - 1 ? (
                <button className="next" onClick={nextQuestion}>
                  Next Question
                </button>
              ) : null}
            </div>
          </Grid>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
