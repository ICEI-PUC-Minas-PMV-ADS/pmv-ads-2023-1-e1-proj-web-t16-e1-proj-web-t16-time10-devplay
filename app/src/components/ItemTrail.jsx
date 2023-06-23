import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ItemTrail({ course }) {
  return (
    <Wrapper key={course.type}>
      <Link to={`/title/${course.titleId}`}>
        <Label>{course.nome}</Label>
        <Label>{course.duracao}</Label>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 250px;
  width: 250px;
  height: 550px;
  border: 1px solid red;
  cursor: pointer;
  background-color: #1b4669;
`;

const Label = styled.p`
  color: black;
  width: 100%;
  text-align: center;
`;
