import { Wrapper, WrapperAnswers, Description, ButtonAnswer } from "./style";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion
}) => {
  return (
    <Wrapper>
      <Description>
        {questionNr} / {totalQuestion}
      </Description>
      <Description>{question}</Description>
      <WrapperAnswers>
        {answers.map(answer => (
          <ButtonAnswer
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
          >
            <span>{answer}</span>
          </ButtonAnswer>
        ))}
      </WrapperAnswers>
    </Wrapper>
  );
};

export default QuestionCard;
