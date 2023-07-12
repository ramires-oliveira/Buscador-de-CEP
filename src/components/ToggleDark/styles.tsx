import styled from 'styled-components';

interface ToggleProps {
  isOn: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex; 
  justify-content: end;
`;

export const Content = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;

  .title{
    color: black; 
    font-weight: bold; 
    font-size: 20px;
  }
`;

export const Toggle = styled.div<ToggleProps>`
  display: flex;
  max-width: 8rem;
  min-width: 8rem;
  height: 1.5rem;
  max-height: 2rem;
  border: 2px solid ${({ isOn }) => (isOn ? `black` : `white`)};
  border-radius: 1rem;
  justify-content: center;
  padding: 0 1.3rem;
  position: relative;
  background-color: ${({ isOn }) => (isOn ? `black` : `white`)};

  .switch {
    display: flex;
    background: transparent;
    border: 0;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;

    .slider {
      position: absolute;
      top: 0.20rem;
      left: ${({ isOn }) => (isOn ? '6.5rem;' : '0.3rem')};
      right: 0;
      bottom: 0;
      border-radius: 1rem;
      cursor: pointer;
      max-width: 1rem;
      max-height: 1rem;
      transition: 0.3s ease-in-out;
    }

    span {
      color: #00cccc;
      display: flex;
      width: 100%;
      align-items: center;
      gap: 0.2rem;
      flex-wrap: nowrap;
    }

    .option{
      display: flex;
      justify-content: center;
      ${({ isOn }) => (!isOn && `
        margin-left: 0.3rem;
      `)}
    }
  }
`;
