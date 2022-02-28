import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Container>
        <HomeSection>
          <Section
            title="Model 3"
            descrption="Order online for Touchless Delivery"
            backgroundImage="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Model S"
            descrption="Order online for Touchless Delivery"
            backgroundImage="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Model Y"
            descrption="Order online for Touchless Delivery"
            backgroundImage="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Model X"
            descrption="Order online for Touchless Delivery"
            backgroundImage="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Solar Panels"
            descrption="Lowest Cost Solar Panels in America"
            backgroundImage="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
          />
          <Section
            title="Solar Roof"
            descrption="Produce Clean Energy From Your Roof"
            backgroundImage="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
          />
          <Section
            title="Accessories"
            backgroundImage="accessories.jpg"
            leftBtnText="Order Now"
          />
        </HomeSection>
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const HomeSection = styled.div`
  display: block;
`;
