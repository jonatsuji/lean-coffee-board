import styled from "styled-components";
import Image from "next/image";
import deleteButton from "../../assets/images/remove.png";
import { EditText } from "react-edit-text";

export default function Card({ content, author, onHandleDelete, id }) {
  return (
    <StyledCard>
      <StyledText>
        <EditText name="content" defaultValue={content} inline />
      </StyledText>
      <StyledAuthor>
        <EditText name="name" defaultValue={author} inline />
      </StyledAuthor>
      <StyledDeleteButton>
        <Image
          src={deleteButton}
          width={25}
          height={25}
          alt="delete-button"
          onClick={() => onHandleDelete(id)}
        />
      </StyledDeleteButton>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  grid-template-areas:
    "a a b"
    "c c d";
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

const StyledText = styled.div`
  //border: 1px solid red;
  grid-area: a;
  margin-left: 20px;
  margin-right: 10px;
`;

const StyledAuthor = styled.div`
  //border: 1px solid green;
  grid-area: c;
  margin-left: 20px;
  color: #d8ac11;
`;

const StyledDeleteButton = styled.button`
  padding: 0px;
  grid-area: d;
  width: 30px;
  height: 30px;
  justify-self: center;
  background-color: transparent;
  border: none;

  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
`;

// .hvr-grow:hover,
// .hvr-grow:focus,
// .hvr-grow:active {
//   transform: scale(1.1);
// }

const StyledEditButton = styled.button`
  padding: 0px;
  grid-area: b;
  width: 30px;
  height: 30px;
  justify-self: center;
  background-color: transparent;
  border: none;
  padding-left: 6px;
`;
