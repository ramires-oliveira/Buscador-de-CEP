import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: white;
  padding: 30px 20px;
  border: none;
  border-radius: 5px;

  p, span, h1, h2, h3{
    color: black;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg{
    font-size: 3rem;
    color: coral;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;

  .searchInput{
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
    background-color: coral;
    border: none;
    width: 40px;
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
    background-color: #E67147;
  }
`;

export const SearchDicas = styled.div`
  display: flex;
  flex-direction: column;

  span{
    color: gray;
  }

`;
