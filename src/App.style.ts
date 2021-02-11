import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/coffee.jpg';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* すべてのpタグに反映 */
  > p {
    color: #fff;
  }

  .score {
    color: rgb(245, 245, 245);
    font-size: 2rem;
    margin: -15px 0 0 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #913703);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #a15b06);
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    color: #331001;
    height: 40px;
    margin: 20px 0;
    padding: 0 30px;
    font-size: 18px;
    line-height: 40px;
  }

  .start {
    max-width: 200px;
  }
`;
