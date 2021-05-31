import { useState } from "react";
import { getQuestions, Difficulty, QuestionState } from "./API/api";

import { GlobalStyle, AppWrapper, Button, WrapperItem, Loading } from "./style";

import QuestionCard from "./components/QuestionCard";

import { Fade } from "react-awesome-reveal";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);

  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startGame = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestion: QuestionState[] = await getQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );
    setQuestions(newQuestion);
    setUserAnswer([]);
    setLoading(false);
    setNumber(0);
    setScore(0);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;
    const answer = event.currentTarget.value;

    const correct = questions[number].correct_answer === answer;

    if (correct) setScore(prevState => prevState + 1);

    const userObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer
    };
    setUserAnswer(prevState => [...prevState, userObject]);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Fade direction="down">
          <h1>React Quiz</h1>
        </Fade>

        <WrapperItem>
          {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
            <Fade direction="up">
              <Button isHover onClick={startGame}>
                Start
              </Button>
            </Fade>
          ) : null}

          {!gameOver && (
            <Fade direction="up">
              <p>Score: {score}</p>
            </Fade>
          )}
          {loading && (
            <Fade direction="up">
              <Loading>Loading Question... </Loading>
            </Fade>
          )}
        </WrapperItem>

        {!loading && !gameOver && (
          <Fade direction="left">
            <QuestionCard
              questionNr={number + 1}
              totalQuestion={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswer && userAnswer[number]}
              callback={checkAnswer}
            />
          </Fade>
        )}

        <WrapperItem>
          {!gameOver &&
          !loading &&
          userAnswer.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <Fade direction="up">
              <Button isHover onClick={nextQuestion}>
                Next
              </Button>
            </Fade>
          ) : null}
          {gameOver && number + 1 === TOTAL_QUESTIONS ? (
            <h2>Game Over</h2>
          ) : null}
        </WrapperItem>
      </AppWrapper>
    </>
  );
};

export default App;
