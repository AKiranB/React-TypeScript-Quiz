import { shuffleArray } from "./components/utility/shuffleArray";
export type Question = {

    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}
export type QuestionState = Question & { answers: string[] };


export const fetchQuestions = async (amount: number, difficulty: string, category: string) => {

    const APIendpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(APIendpoint)).json();


    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers,
            question.correct_answer])
        }
    ))
};
