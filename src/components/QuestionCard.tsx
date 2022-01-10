import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { decodeSpecialChars } from './utility/decodeSpecialChars';
import Container from '../components/style/container';


type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
  isCorrect: string;
  score: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
  isCorrect,
  score,
}) => {
  return (
    <Box >
      <Container padding='5' >
        <Text color={'black'} fontSize={['sm', 'md', 'lg']} >
          Score : {score}
          <div></div>
          Question : {questionNumber} / {totalQuestions}
        </Text>
        <Heading>
          <hr></hr>
          <Text fontSize={'m'}>
            {decodeSpecialChars(question)}
          </Text>
        </Heading>
      </Container>
      <Flex mt={'100px'} direction={'column'} justifyContent='center' alignContent={'center'}>
        {answer.map((answer, i) => (
          <div key={i}>
            <Button
              key={i}
              m={'10px'}
              width={['sm', 'md', 'lg']}
              fontSize={['sm', 'md', 'lg']}
              colorScheme={isCorrect}
              disabled={userAnswer}
              value={answer}
              onClick={callback}
            >
              {decodeSpecialChars(answer)}
            </Button>
          </div>
        ))}
      </Flex>
    </Box>
  );
};

export default QuestionCard;
