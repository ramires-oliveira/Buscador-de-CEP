import styled, { keyframes } from 'styled-components';
import { BsCheckCircleFill } from 'react-icons/bs';
import { LuLoader2 } from 'react-icons/lu';

interface ClipBoardProps {
  cor: string;
}

const spinAnimation = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Button = styled.button<ClipBoardProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.cor};
    border: none;
    width: 5rem;
    border-radius: 5px;
    height: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: white;

    ${props => props.cor === 'white' && `
      color: black;
      
      &:hover{
        background-color: #f2f2f2;
      }
    `}
`;

export const LoadingIcon = styled(LuLoader2)`
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  color: #000;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Icon = styled(BsCheckCircleFill)`
  margin-left: 3px;
  font-size: 1rem;
  color: white;
  opacity: 1;
`;