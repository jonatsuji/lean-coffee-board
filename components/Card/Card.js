import styled from "styled-components";
import Image from "next/image";
import deleteButton from "../../assets/images/remove.png";

export default function Card({ content, author }) {
  return (
    <StyledCard>
      <StyledText>
        <p>{content}</p>
      </StyledText>
      <StyledAuthor>
        <p>{author}</p>
      </StyledAuthor>
      <StyledDeleteButton>
        <Image src={deleteButton} width={25} height={25} alt="delete-button" />
      </StyledDeleteButton>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  grid-template-areas:
    "a a a"
    "b b c";
  display: grid;
  align-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 150px;
  left: 40px;
  margin-top: 0px;

  background: #ffffff;
  box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const StyledText = styled.p`
  //border: 1px solid red;
  grid-area: a;
  margin-left: 20px;
  margin-right: 10px;
`;

const StyledAuthor = styled.p`
  //border: 1px solid green;
  grid-area: b;
  margin-left: 20px;
  color: #d8ac11;
`;

const StyledDeleteButton = styled.button`
  padding: 0px;
  grid-area: c;
  width: 30px;
  height: 30px;
  justify-self: center;
  background-color: transparent;
  border: none;
`;
