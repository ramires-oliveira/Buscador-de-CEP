import CardSearch from "./components/CardSearch";
import CardResult from "./components/CardResult";
import { useState } from "react";
import { CepProps } from "./types/cep";
import './App.css'
import Loading from "./components/Loading";

function App() {

  const [cep, setCep] = useState<CepProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removeLoading, setRemoveLoading] = useState(false);
  
  const loadCep = async (numberCep: string) => {
    setRemoveLoading(true)
    try {
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
      setRemoveLoading(false);
    } catch (error: any) {
      setError('Formato de CEP inválido.');
      setRemoveLoading(false);
    }
  }

  const handleClear = () => {
    setCep(null);
    setError(null);
  }

  return (
    <div className='App'>
      <CardSearch loadCep={loadCep} handleClear={handleClear} />
      {removeLoading && <Loading width="100px" />}
      <CardResult cep={cep} erro={error} />
    </div>
  )
}

export default App
