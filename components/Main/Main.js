import Form from "../Form/Form";
import Card from "../Card/Card";
import { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Main() {
  const [cards, setCards] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newContent = form.content.value;
    const newAuthor = form.author.value;
    setCards([
      { content: newContent, author: newAuthor, id: nanoid() },
      ...cards,
    ]);
    event.target.reset();
    event.target.content.focus();
  }
  console.log(cards);

  function handleDelete(id) {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  }

  return (
    <>
      <StyledList>
        {cards.map((card) => (
          <Card
            key={card.author}
            content={card.content}
            author={card.author}
            onHandleDelete={handleDelete}
            id={card.id}
            onHandleEdit={handleEdit}
          />
        ))}
      </StyledList>
      <Form onHandleSubmit={handleSubmit} />
    </>
  );
}

const StyledList = styled.ul`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 90px;
  list-style: none;
  padding-left: 0px;
  gap: 35px;
`;
