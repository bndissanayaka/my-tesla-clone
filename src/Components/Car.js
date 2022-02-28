import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import styled from "styled-components";

function Car({ imgSrc, model, testDrive }) {
  return (
    <CarContainer>
      <CarImage>
        <img src={imgSrc} alt="" />
      </CarImage>
      <CarModel>{model}</CarModel>
      <CarActions>
        <ButtonPrimary name="order" />
        {testDrive && <ButtonSecondary name="test drive" />}
      </CarActions>
      <CarInfo>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </CarInfo>
    </CarContainer>
  );
}

export default Car;

const CarContainer = styled.div`
  height: 80vh;
  display: grid;
  place-items: center;
  border-top: 1px solid #d0d1d2;
`;

const CarImage = styled.div`
  img {
    object-fit: contain;
    width: 1000px;
  }
`;

const CarModel = styled.h1`
  font-weight: 500;
  font-size: xx-large;
  margin-top: -250px;
  text-transform: capitalize;
`;

const CarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -100px;
  button {
    width: 230px;
    margin-bottom: 10px;
  }
`;

const CarInfo = styled.p`
  max-width: 350px;
  text-align: center;
  font-size: smaller;
  line-height: 1.5;
  font-weight: 500;
  color: #393c41;
  span {
    color: #3e6be2;
    cursor: pointer;
  }
`;
