import React, { ChangeEvent } from "react";
import { useState } from "react";
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
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import logo from "./images/quiz.png";
import OptionsCard from "./components/OptionsCard";
import "./app.css";
import { startTrivia, checkAnswer } from "./utils/helpers";
import SwitchTransitionWrapper from "./components/style/transitions/SwitchTransition";
import TransitionWrapper from "./components/style/transitions/Transition";
import { CSSTransition } from "react-transition-group";

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
  const [showNext, setShowNext] = useState<boolean>(false);
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  console.log(message);

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setMessage(`You scored ${score} out of 10, good job!`);
    } else {
      setIsCorrect("blue");
      setNumber(nextQ);
      setMessage("");
    }
    setShowNext(false);
  };

  console.log(showNext);
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
                  onClick={startTrivia({
                    setLoading,
                    setQuestions,
                    setGameOver,
                    setNumber,
                    setScore,
                    setUserAnswers,
                    difficulty,
                    category,
                    TOTAL_QUESTIONS,
                  })}
                >
                  Start
                </Button>
              </>
            ) : null}
            <Flex flexDir={"column"} marginBottom={"20px"}>
              {loading && <p>Loading Questions...</p>}

              {!loading && !gameOver ? (
                <SwitchTransitionWrapper nodeRef={nodeRef} refKey={number + 1}>
                  <QuestionCard
                    questionNumber={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answer={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={(e) =>
                      checkAnswer({
                        e,
                        userAnswers,
                        setUserAnswers,
                        questions,
                        number,
                        setScore,
                        setIsCorrect,
                        score,
                        TOTAL_QUESTIONS,
                        gameOver,
                        setMessage,
                        setShowNext,
                      })
                    }
                    isCorrect={isCorrect}
                    score={score}
                  />
                </SwitchTransitionWrapper>
              ) : null}

              {!gameOver &&
              !loading &&
              userAnswers.length === number + 1 &&
              number !== TOTAL_QUESTIONS - 1 ? (
                <CSSTransition
                  in={showNext}
                  nodeRef={buttonRef}
                  timeout={300}
                  classNames="button"
                  unmountOnExit
                >
                  <Button
                    ref={buttonRef}
                    backgroundColor={"#1391ad"}
                    width={"200px"}
                    onClick={nextQuestion}
                    className="btn"
                  >
                    Next Question
                  </Button>
                </CSSTransition>
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
