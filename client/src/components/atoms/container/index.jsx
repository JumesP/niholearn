import react from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 40px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(to right, #f0f4f8, #d9e2ec);
    border: 1px solid #ccc;
`;

const ContainerComponent = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
}

export default ContainerComponent;