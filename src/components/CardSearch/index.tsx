type SearchProps = {
    loadCep: (numberCep: string) => Promise<void>;
    handleClear: () => void;
}

import { Container, SearchContent, SearchDicas, Header } from './styles';
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiBrazil } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";

const cardSearch = ({ loadCep, handleClear }: SearchProps) => {

    const [numberCep, setNumberCep] = useState("");

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            loadCep(numberCep);
        }
    }

    const handleChange = (event: { target: { value: any; }; }) => {
        const inputValue = event.target.value;
        const newValue = inputValue.replace(/[^0-9-]/g, ''); // Remove todos os caracteres que não sejam números ou '-'
        setNumberCep(newValue)
      };

    const handleClearCep = () =>{
        setNumberCep("");
        handleClear();
    }

    return (
        <Container>
            <Header>
                <h1>Buscador de CEP</h1>
                <GiBrazil />
            </Header>
            <SearchContent>
                <input className='searchInput' value={numberCep} type="text" placeholder='Digite um cep' onChange={handleChange} onKeyDown={() => handleKeyDown} />
                <button onClick={() => loadCep(numberCep)}>
                    <BsSearch />
                </button>
                <button onClick={() => handleClearCep()}>
                    <AiOutlineClear />
                </button>
            </SearchContent>
            <SearchDicas>
                <span>Dicas para pesquisar um CEP:</span>
                <span>Digite o CEP utilizando 8 digitos, com ou sem hífen (-).</span>
                <span>Ex: 37130000 ou 37130-000</span>
            </SearchDicas>

        </Container>
    )
}

export default cardSearch;