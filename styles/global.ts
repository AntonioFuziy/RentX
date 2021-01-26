import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
`

export const theme = {
  colors: {
    primary: '#0070f3',
    whiteBackground: '#f0f0f0',
    redTheme: "#c9252f",
    lightRedTheme: "#dd3742",
    grayPrimary: "#dbdbdb",
    blackPrimary: "#212121"
  },
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

