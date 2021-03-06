import axios from "axios";
import { shuffleArray } from "../utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & {
  answers: string[];
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const getQuestions = async (amount: number, difficulty: Difficulty) => {
  const API_URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;

  try {
    const { data } = await axios.get(API_URL);
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer
      ])
    }));
  } catch (error) {
    console.log(error);
  }
};
