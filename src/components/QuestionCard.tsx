import { Button } from "@chakra-ui/react";
import React from "react";

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
      <div>
        {question}
      </div>
      <div>
        {answer.map((answer, i) => (
          <Button
            key={i}
            m={'10px'}
            width={['sm', 'md', 'lg', 'xl']}
            fontSize={['sm', 'md', 'lg', 'xl']}
            colorScheme={isCorrect}
            disabled={userAnswer}
            value={answer}
            onClick={callback}
          >
            {answer}
          </Button>

        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
