import { Container, SearchContent, SearchTip, Header } from './styles';
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiBrazil } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { useSelector } from 'react-redux';

type SearchProps = {
    loadCep: (numberCep: string) => Promise<void>;
    handleClear: () => void;
}

const cardSearch = ({ loadCep, handleClear }: SearchProps) => {

    const [numberCep, setNumberCep] = useState("");
    const isDarkMode = useSelector((state: any) => state.darkMode.mode);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            loadCep(numberCep);
        }
    }

    const handleChange = (event: { target: { value: any; }; }) => {
        const inputValue = event.target.value;
        const newValue = inputValue.replace(/[^0-9-]/g, ''); //Remove todos os caracteres que não sejam números ou '-'
        setNumberCep(newValue)
    };

    const handleClearCep = () => {
        setNumberCep("");
        handleClear();
    }
    
    return (
        <Container theme={isDarkMode}>
            <Header>
                <h1>Buscador de CEP</h1>
                <GiBrazil />
            </Header>
            <SearchContent>
                <input className='searchInput' value={numberCep} type="text" placeholder='Digite um cep' onChange={handleChange} onKeyDown={handleKeyDown} />
                <button onClick={() => loadCep(numberCep)}>
                    <BsSearch />
                </button>
                <button onClick={() => handleClearCep()}>
                    <AiOutlineClear />
                </button>
            </SearchContent>
            <SearchTip>
                <span>Dicas para pesquisa do CEP:</span>
                <span>Digite o CEP utilizando 8 digitos, com ou sem hífen (-).</span>
                <span>Ex: 37130000 ou 37130-000</span>
            </SearchTip>
        </Container>
    )
}

export default cardSearch;