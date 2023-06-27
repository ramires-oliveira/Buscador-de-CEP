import Loading from '../../img/loading.svg';
import { DivLoading } from './styles';

interface LoadingIndexProps{
    width: string;
}

function LoadingIndex({ width }: LoadingIndexProps){
    return(
        <DivLoading width={width}>
            <img className='loader' src={Loading} alt="Loading" />
        </DivLoading>
    )
}

export default LoadingIndex