import React from "react";
import styled from "styled-components";

function ButtonPrimary({ name, type, onClick }) {
  return (
    <PrimaryButton type={type} onClick={onClick}>
      {name}
    </PrimaryButton>
  );
}

export default ButtonPrimary;

const PrimaryButton = styled.button`
  background-color: #3e6ae1;
  border: none;
  padding: 12px 40px;
  border-radius: 50px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-bottom: 30px;
  transition: all 0.4s;
  width: 332px;
  &:hover {
    background-color: #3457b1;
  }
`;
