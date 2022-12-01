import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeader>Lean Coffee Board</StyledHeader>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 75px;
  left: 0px;
  top: 0px;

  border-bottom: 1px solid;

  border-image-source: conic-gradient(
    from 180deg at 50% 50%,
    rgba(0, 0, 0, 0) -65.63deg,
    #000000 90deg,
    rgba(0, 0, 0, 0) 294.38deg,
    #000000 450deg
  );

  background: linear-gradient(
    180deg,
    #d8ac11 0%,
    rgba(230, 217, 174, 0.28) 100%
  );
`;

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-self: center;
`;
