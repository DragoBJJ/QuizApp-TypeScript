import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
//@ts-ignore
import background from "./assets/images/background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Catamaran"
}

body {
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}


`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Fascinate Inline;
    font-size: 60px;
    letter-spacing: 3px;
    color: #1d1d1d;
  }
  p {
    color: #1d1d1d;
    font-size: 1.6rem;
  }
`;

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  width: 100%;
`;

type ButtonType = {
  isHover?: boolean;
};

export const Button = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 120px;
  border-radius: 30px;
  color: #1d1d1d;
  background-color: transparent;
  border: 2px solid #1d1d1d;
  font-size: 18px;

  margin-top: 0.5rem;
  cursor: pointer;

  ${({ isHover }) =>
    isHover &&
    css`
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #1d1d1d;
        color: #fff;
        border: 1px solid #fff;
      }
    `}
`;

export const Loading = styled.p`
  font-family: Fascinate Inline;
  text-align: center;
  font-size: 36px;
  letter-spacing: 3px;
`;
