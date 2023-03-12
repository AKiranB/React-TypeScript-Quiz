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
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import logo from "./images/quiz.png";
import OptionsCard from "./components/OptionsCard";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./app.css";

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
  const [difficulty, setDifficulty] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const startTrivia = async () => {
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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
        setIsCorrect("green");
        setMessage("Good Job!");
      } else {
        setIsCorrect("red");
        setMessage(
          `sorry! the correct answer is "${questions[number].correct_answer}"`
        );
      }
      if (userAnswers.length === TOTAL_QUESTIONS - 1) {
        setMessage(`You scored ${score} out of 10, good job!`);
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
      setMessage(`You scored ${score} out of 10, good job!`);
    } else {
      setIsCorrect("blue");

      setNumber(nextQ);
      setMessage("");
    }
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const retry = () => {
    setGameOver(true);
    setMessage("");
  };

  return (
    <>
      <Box textAlign="center" fontSize="l">
        <Grid dir="column" minH="100vh">
          <Image top={0} position={"fixed"} boxSize={["l"]} src={logo} />
          <div style={{ minHeight: "100%" }} className="App">
            <ColorModeSwitcher
              top="24px"
              right="16px"
              sx={{ position: "absolute" }}
            />
            {gameOver ? (
              <>
                <OptionsCard
                  handleDropdownChange={handleDropdownChange}
                  setDifficulty={setDifficulty}
                />
                <Button
                  m={"30px"}
                  colorScheme="blue"
                  className="start"
                  onClick={startTrivia}
                >
                  Start
                </Button>
              </>
            ) : null}
            <Flex flexDir={"column"} marginBottom={"20px"}>
              {loading && <p>Loading Questions...</p>}

              {!loading && !gameOver ? (
                <SwitchTransition mode="out-in">
                  <CSSTransition<HTMLElement>
                    key={number + 1}
                    nodeRef={nodeRef}
                    classNames="fade"
                    addEndListener={(done: () => void): any => {
                      nodeRef?.current?.addEventListener(
                        "transitionend",
                        done,
                        false
                      );
                    }}
                  >
                    <div style={{ marginTop: "64px" }} ref={nodeRef}>
                      <QuestionCard
                        questionNumber={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answer={questions[number].answers}
                        userAnswer={
                          userAnswers ? userAnswers[number] : undefined
                        }
                        callback={checkAnswer}
                        isCorrect={isCorrect}
                        score={score}
                      />
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              ) : null}

              {!gameOver &&
              !loading &&
              userAnswers.length === number + 1 &&
              number !== TOTAL_QUESTIONS - 1 ? (
                <Center mt="15px">
                  <Button
                    backgroundColor={"#1391ad"}
                    width={"200px"}
                    onClick={nextQuestion}
                    className="btn"
                  >
                    Next Question
                  </Button>
                </Center>
              ) : null}
              <Center>
                <Badge
                  borderRadius={"5px"}
                  fontSize={"m"}
                  m="20px"
                  sx={{ color: isCorrect, backgroundColor: "transparent" }}
                  width={"auto"}
                >
                  {message}
                </Badge>
              </Center>
              {userAnswers.length === TOTAL_QUESTIONS && !gameOver ? (
                <Center>
                  <Button
                    backgroundColor={"#1391ad"}
                    width={"200px"}
                    onClick={retry}
                  >
                    Retry
                  </Button>
                </Center>
              ) : null}
            </Flex>
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default App;
