import React, { ChangeEvent } from "react";
import { useState } from "react";
import { fetchQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import { QuestionState } from "./API";
import {
  Box,
  Grid,
  Button,
  Center,
  Image,
  Badge,
  Flex
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
  const [message, setMessage] = useState<string>('')

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
        setMessage('Good Job!')
      } else {
        setIsCorrect("red");
        setMessage(`sorry! the correct answer is "${questions[number].correct_answer}"`)
      }
      if (userAnswers.length === TOTAL_QUESTIONS - 1) {
        console.log('hello')
        setMessage(`You scored ${score} out of 10, good job!`)
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
      console.log('hello')
      setMessage(`You scored ${score} out of 10, good job!`)
    } else {
      setIsCorrect("blue");
      setNumber(nextQ);
      setMessage('')
    }
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  };

  const retry = () => {
    setGameOver(true)
    setMessage('')
  }

  return (
    <>
      <Box textAlign="center" fontSize="l">
        <Grid dir="column" minH="100vh">
          <ColorModeSwitcher justifySelf="flex-end" />

          <Image position={'fixed'} boxSize={['l']} src={logo} />

          <div className="App">
            {gameOver ? (
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
            <Flex flexDir={'column'} marginBottom={'20px'}>
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
                  score={score}
                />
              ) : null}

              {!gameOver && !loading &&
                userAnswers.length === number + 1 &&
                number !== TOTAL_QUESTIONS - 1 ? (
                <Center mt='15px'>
                  <Button backgroundColor={'#1391ad'} width={'200px'} className="next" onClick={nextQuestion}>
                    Next Question
                  </Button>
                </Center>

              ) : null}
              <Center>
                <Badge borderRadius={'5px'} fontSize={'m'} m='20px' width={'auto'}>
                  {message}
                </Badge>
              </Center>
              {userAnswers.length === TOTAL_QUESTIONS && !gameOver ? (
                <Center>
                  <Button backgroundColor={'#1391ad'} width={'200px'} className="next" onClick={retry}>
                    Retry
                  </Button>
                </Center>
              ) : (
                null
              )}
            </Flex>
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default App;
