import styled, { keyframes } from 'styled-components';

interface CardSearchProps {
    cor: string;
}

const fadeInFadeOutRotate = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.2; }
  100% { opacity: 1; }

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<CardSearchProps>`
    width: 60%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: ${props => props.cor};
    padding: 30px 20px;
    border: none;
    border-radius: 5px;

    p, span, h1, h2, h3{
        color: black;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .label{
            font-size: 1.2rem;
            font-weight: bold;
        }

        .info{
            font-size: 1.2rem;
        }

        .contentErro{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            .erro{
                color: white;
            }

            svg{
                animation: ${fadeInFadeOutRotate} 1.5s ease infinite;
            }
        }
    }

    @media (min-width: 550px) and (max-width: 800px){
        width: 80%;
    }

    @media (max-width: 550px){
        width: 100%;

        .content {
            .label { font-size: 1rem; }
            .info { font-size: 1rem; }
        }
    } 
`;