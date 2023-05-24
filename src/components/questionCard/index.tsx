import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { decodeSpecialChars } from "../utility/decodeSpecialChars";
import Container from "../style/container";
import { colors } from "../../theme";
import CircleWithTick from "../svgTick";

type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
  isCorrect: boolean | null;
  score: number;
  currentQuestion: any;
};

const answerColorMap: Record<string, string> = {
  true: colors.primary.main,
  false: colors.error,
  null: colors.surface.blue,
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
  isCorrect,
  currentQuestion,
  score,
}) => {
  console.log(currentQuestion);
  console.log(userAnswer);
  return (
    <Box>
      <Container padding="5">
        <Text color={"black"} fontSize={["sm", "md", "lg"]}>
          Score : {score}
          <div></div>
          Question : {questionNumber} / {totalQuestions}
        </Text>
        <Heading>
          <hr></hr>
          <Text fontSize={"m"}>{decodeSpecialChars(question)}</Text>
        </Heading>
      </Container>
      <Flex
        mt={"100px"}
        direction={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        {answer.map((answer, i) => (
          <div key={i}>
            <Box
              sx={{
                minWidth: "564px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                key={i}
                m={"10px"}
                width={["sm", "md", "lg"]}
                fontSize={["sm", "md", "lg"]}
                backgroundColor={
                  answerColorMap[isCorrect?.toString() as string]
                }
                disabled={userAnswer}
                value={answer}
                onClick={callback}
              >
                {decodeSpecialChars(answer)}
              </Button>
              {userAnswer && currentQuestion.correct_answer === answer && (
                <CircleWithTick />
              )}
            </Box>
          </div>
        ))}
      </Flex>
    </Box>
  );
};

export default QuestionCard;
