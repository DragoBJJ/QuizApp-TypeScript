import styled from "styled-components";
import { Button } from "../style";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  min-height: 400px;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 30px;

  @media (max-width: 700px) {
    width: 560px;
  }
  @media (max-width: 600px) {
    width: 460px;
  }
`;

export const Description = styled.p`
  max-width: 90%;
  text-align: center;
  font-size: 1.6rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
type ButtonProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonAnswer = styled(Button)<ButtonProps>`
  font-size: 16px;
  background-color: ${({ correct, userClicked }) =>
    correct && userClicked
      ? "#90EE90"
      : !correct && userClicked
      ? "#ED4F32"
      : "transparent"};
`;

export const WrapperAnswers = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
