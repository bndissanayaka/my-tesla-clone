import React from "react";
import styled from "styled-components";

function ButtonSecondary({ name, type, onClick }) {
  return (
    <SecondaryButton type={type} onClick={onClick}>
      {name}
    </SecondaryButton>
  );
}

export default ButtonSecondary;

const SecondaryButton = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #171a20;
  outline: none;
  width: 332px;
  height: 40px;
  text-align: center;
  justify-content: center;
  &:hover {
    background-color: #171a20;
    color: white;
  }
`;
