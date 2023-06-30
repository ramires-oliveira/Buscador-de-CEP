import { CepProps } from "../../types/cep";
import ClipBoard from "../ClipBoard";
import { Container } from "./styles";
import { CgCloseO } from "react-icons/cg";

type ResultProps = {
    cep: CepProps | null;
    erro: string | null;
}

const cardSearch = ({ cep, erro }: ResultProps) => {
    const cor = erro ? "rgba(255, 0, 0, 0.8)" : "#00cccc";

    if (cep !== null || erro !== null) {
        return (
            <Container cor={cor}>
                <div className="content">
                    {cep && (
                        <>
                            {cep.logradouro && (
                                <div className="item">
                                    <div>
                                        <span className="label">Rua: </span><span className="info">{cep.logradouro}</span>
                                    </div>
                                    <div>
                                        <ClipBoard text={cep.logradouro} />
                                    </div>
                                </div>
                            )}
                            {cep.bairro && (
                                <div className="item">
                                    <div>
                                        <span className="label">Bairro: </span><span className="info">{cep.bairro}</span>
                                    </div>
                                    <div>
                                        <ClipBoard text={cep.bairro} />
                                    </div>
                                </div>
                            )}
                            <div className="item">
                                <div>
                                    <span className="label">Cidade: </span><span className="info">{cep.localidade}</span>
                                </div>
                                <div>
                                    <ClipBoard text={cep.localidade} />
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <span className="label">UF: </span><span className="info">{cep.uf}</span>
                                </div>
                                <div>
                                    <ClipBoard text={cep.uf} />
                                </div>
                            </div>
                            {cep.complemento && (
                                <div className="item">
                                    <div>
                                        <span className="label">Complemento: </span><span className="info">{cep.complemento}</span>
                                    </div>
                                    <div>
                                        <ClipBoard text={cep.complemento} />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {erro && (
                        <div className="contentErro">
                            <CgCloseO size={30} color={"#fff"} />
                            <span className="erro">{erro}</span>
                        </div>
                    )}
                </div>
            </Container>
        )
    } else {
        return null;
    }
}

export default cardSearch;