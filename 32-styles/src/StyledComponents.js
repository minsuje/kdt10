import styled from 'styled-components';

// CSS in JS: CSS를 JS안에 작성함
// styled-components, emotion, styled-jsx, .... 등 다양한 종류가 있다.
// 각 컴포넌트마다 격리된 스타일을 적용 가능

const StyledContainer = styled.div`
    display: flex;
`;
const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor || 'blue'};

    &:hover {
        transform: translateY(-20px);
    }
`;

function StyledComponents() {
    return (
        <StyledContainer>
            <StyledBox bgColor="red" />
            <StyledBox bgColor="orange" />
            <StyledBox bgColor="blue" />
        </StyledContainer>
    );
}

export default StyledComponents;
