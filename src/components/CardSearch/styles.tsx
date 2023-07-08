import styled from 'styled-components';

interface CardSearchProps {
  theme: boolean;
}

export const Container = styled.div<CardSearchProps>`
  width: 60%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme === true ? 'black' : 'white'};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 30px 20px;
  border: none;
  border-radius: 5px;

  p, span, h1, h2, h3{
    color: ${(props) => props.theme === true ? 'white' : 'black'};
  }

  @media (min-width: 550px) and (max-width: 800px){
    width: 80%;
  }

  @media (max-width: 550px){
    width: 100%;
  }

  @media (max-width: 300px){
    padding: 20px 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg{
    font-size: 3rem;
    color: #00cccc;
  }

  @media(min-width: 360px) and (max-width: 430px){
    h1{ font-size: 1.5rem; }
  }

  @media(max-width: 360px){
    h1{ font-size: 1.2rem; }

    svg { font-size: 2rem; }
  }
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;

  .searchInput{
    width: 100%;
    padding: 10px 15px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #333;
    background-color: #fff;
    transition: box-shadow 0.3s ease;
  
    &:focus {
      outline: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  button{
    background-color: #00cccc;
    border: none;
    width: 55px;
    border-radius: 5px;
    height: 40px;
    margin-left: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    svg{
      font-size: 18px;
    }
  }

  button:hover{
    background-color: #009090;
  }

  @media (max-width: 350px){
    flex-direction: column;
    gap: 0.5rem;

    button{
      width: 100%;

      svg{
        font-size: 22px;
      }
    }
  }
`;

export const SearchDicas = styled.div`
  display: flex;
  flex-direction: column;

  span{
    color: gray;
  }
`;
