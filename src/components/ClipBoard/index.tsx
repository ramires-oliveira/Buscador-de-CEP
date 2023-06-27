import clipboardCopy from 'clipboard-copy';
import { Button, Icon } from './styles';
import { useState } from 'react';
import Loading from '../Loading';

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

                    setTimeout(() => {
                        setCopiado(false);
                    }, 500);
                })
                .catch((error) => {
                    console.error('Falha ao copiar para a área de transferência: ', error);
                });
        }, 150);
    };

    return (
        <Button cor={copiado ? 'green' : 'white'} onClick={handleCopy}>
            {isLoading ? (
                <div>
                    <Loading width="55%" />
                </div>
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