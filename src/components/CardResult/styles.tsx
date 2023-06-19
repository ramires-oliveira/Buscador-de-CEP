import styled from 'styled-components';

interface CardSearchProps {
    cor: string;
}

export const Container = styled.div<CardSearchProps>`
    width: 60%;
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
        }
    }
`;