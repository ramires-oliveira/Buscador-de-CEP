import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
    --dark-color: #333;
    --light-color: #f5f5f5;
    --dark: ${(props) => (props.theme.dark ? '1' : '0')};
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

body {
    min-height: 100vh;
    width: 100vw;
    padding: 2rem;
    background: #00cccc;
    background: linear-gradient(
        to bottom,
        #00cccc,
        ${(props) => props.theme.dark ? 'var(--dark-color)' : 'var(--light-color)'}
      );
    color: ${(props) => (props.theme.dark ? 'white' : 'black')};
    background-repeat: no-repeat;

    @media (max-width: 300px){
        padding: 1rem;
    }    
}

p {
    text-align: center;
}

a {
    text-decoration: none;
}

h1, h2, p, span {
    color: white;
}
`;