import React, { ChangeEvent } from "react";
import { useState } from "react";
import { fetchQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import { QuestionState } from "./API";
import {
  ChakraProvider,
  theme,
  Box,
  Grid,
  Button,
  Center,
  Image
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import logo from './images/quiz.png'
import OptionsCard from "./components/OptionsCard";

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
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [isCorrect, setIsCorrect] = useState<string>("blue");
  const [difficulty, setDifficulty] = useState<string>('')
  const [category, setCategory] = useState<string>('')


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, difficulty, category);

    console.log(await fetchQuestions(TOTAL_QUESTIONS, difficulty, category))

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
      if (correct) {
        setScore((prev) => prev + 1);
        setIsCorrect("green");
      } else {
        setIsCorrect("red");
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

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setIsCorrect("blue");
      setNumber(nextQ);
    }
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid dir="column" minH="100vh">
            <ColorModeSwitcher justifySelf="flex-end" />
            <Center>
              <Image src={logo} />
            </Center>
            <div className="App">
              {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <>
                  <OptionsCard
                    handleDropdownChange={handleDropdownChange}
                    setDifficulty={setDifficulty}
                  />
                  <Button
                    m={'30px'}
                    colorScheme="blue"
                    className="start"
                    onClick={startTrivia}
                  >
                    Start
                  </Button>
                </>
              ) : null}
              <Box marginBottom={'200px'}>
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
                    isCorrect={isCorrect}
                  />
                ) : null}
                {!gameOver && !loading &&
                  userAnswers.length === number + 1 &&
                  number !== TOTAL_QUESTIONS - 1 ? (
                  <button className="next" onClick={nextQuestion}>
                    Next Question
                  </button>
                ) : null}
              </Box>
            </div>

          </Grid>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
