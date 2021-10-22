import { shuffleArray } from "./components/utils";
export type Question = {

    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}



export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}


export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {

    const APIendpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;
    //  https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

    const data = await (await fetch(APIendpoint)).json();

    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers,
            question.correct_answer])
        }
    ))


}