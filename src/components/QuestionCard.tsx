import { Button } from "@chakra-ui/react";
import React from "react";
import AnswerObject from "../App";

type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
  isCorrect: string;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
  isCorrect,
}) => {
  return (
    <div>
      Question: {questionNumber} / {totalQuestions}
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answer.map((answer) => (
          <div>
            <Button
              colorScheme={isCorrect}
              disabled={userAnswer}
              value={answer}
              onClick={callback}
            >
              {answer}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
