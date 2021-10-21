import React from 'react';
import { useState } from 'react';
import { fetchQuestions } from './API';

//componenets
import QuestionCard from './components/QuestionCard';

//types 
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(10, Difficulty.EASY))

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start'>
        Start
      </button>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
      questionNumber={number + 1}
      totalQuestions = {TOTAL_QUESTIONS}
      question={questions[number].question}
      answer={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback = {checkAnswer}
      
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>

    </div>
  );
}

export default App;
