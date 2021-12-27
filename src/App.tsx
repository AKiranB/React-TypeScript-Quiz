import React from "react";
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
  Radio,
  RadioGroup,
  Stack,
  Center,
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
  const [isCorrect, setIsCorrect] = useState<string>("blue");
  const [difficulty, setDifficulty] = useState('')
  const [category, setCategory] = useState<string | undefined>('')




  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, difficulty, category);

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

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <div className="App">

              <h1>React Quiz</h1>
              {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <>
                  <Center>
                    Select Difficulty
                    <RadioGroup onChange={event => setDifficulty(event)}>
                      <Stack direction='row'>
                        <Radio value='easy'>Easy</Radio>
                        <Radio value='medium'>Medium</Radio>
                        <Radio value='hard'>Hard</Radio>
                      </Stack>
                    </RadioGroup>

                  </Center>
                  <Center>
                    Please Choose the category

                    <RadioGroup onChange={event => setCategory(event as any)}>
                      <Stack direction='row'>
                        <Radio value={'9'}>General Knowledge</Radio>
                        <Radio value={'10'}>Books</Radio>
                        <Radio value={'11'}>Film</Radio>
                      </Stack>
                    </RadioGroup>
                  </Center>

                  <Button
                    colorScheme="blue"
                    className="start"
                    onClick={startTrivia}
                  >
                    Start
                  </Button>
                </>
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
                  isCorrect={isCorrect}
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
