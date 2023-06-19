import clipboardCopy from 'clipboard-copy';
import { AiFillCopy } from 'react-icons/ai';
import { Button, Icon, LoadingIcon } from './styles';
import { useState } from 'react';

interface ClipboardProps {
    text: string;
}

const ClipBoard = ({ text }: ClipboardProps) => {
    const [copiado, setCopiado] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCopy = () => {
        setIsLoading(true);

        setTimeout(() => {
            clipboardCopy(text)
                .then(() => {
                    setIsLoading(false);
                    setCopiado(true);

                    // Definir um timeout para voltar ao estado normal após 1 segundo
                    setTimeout(() => {
                        setCopiado(false);
                    }, 500);
                    // Você pode adicionar alguma lógica adicional aqui, como exibir uma mensagem de sucesso.
                })
                .catch((error) => {
                    console.error('Falha ao copiar para a área de transferência: ', error);
                });
        }, 150);


    };

    return (
        <Button cor={copiado ? 'green' : 'white'} onClick={handleCopy}>
            {isLoading ? (
                <LoadingIcon />
            ) : copiado ? (
                <>
                    Copiado
                    <Icon />
                </>
            ) : (
                'Copiar'
            )}
        </Button>
    );
}

export default ClipBoard;