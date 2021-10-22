import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answer,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {

    return (<div>
        Question: {questionNumber} / {totalQuestions}
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        <div>
            {answer.map(answer => (
                <div>
                    <button disabled={userAnswer} value={answer} onClick={callback}>{answer}</button>
                    <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                </div>
            ))}
        </div>
    </div>)
}


export default QuestionCard
