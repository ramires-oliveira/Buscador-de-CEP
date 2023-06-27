import styled from "styled-components";

interface LoadingProps {
    width: string;
}

export const DivLoading = styled.div<LoadingProps>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader{
        width: ${props => props.width};
    }
`;