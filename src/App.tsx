import CardSearch from "./components/CardSearch";
import CardResult from "./components/CardResult";
import { useState } from "react";
import { CepProps } from "./types/cep";
import './App.css'

function App() {

  const [cep, setCep] = useState<CepProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadCep = async (numberCep: string) => {
    try {
      console.log(numberCep)
      setCep(null);
      setError(null);
      if (numberCep.length !== 0) {
        const response = await fetch(`https://viacep.com.br/ws/${numberCep}/json/`);

        const data = await response.json();

        if (data.erro) {
          setError('O CEP informado não foi encontrado. Verifique e tente novamente.');
          setCep(null);
        } else {
          setCep(data);
        }
      }
    } catch (error: any) {
      setError('Formato de CEP inválido.');
    }
  }

  const handleClear = () => {
    setCep(null);
    setError(null);
  }

  return (
    <div className='App'>
      <CardSearch loadCep={loadCep} handleClear={handleClear} />
      <CardResult cep={cep} erro={error} />
    </div>
  )
}

export default App
