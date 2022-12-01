import styled from "styled-components";

export default function Form({ onHandleSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Your thoughts..."
        ></input>
        <input type="text" name="author" placeholder="Name"></input>
        <button>+</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 0px;
  padding: 20px;
  //border: 1px red solid;
  width: 100%;
  gap: 10px;
  border-top: 1px black solid;
  background-color: white;
`;
