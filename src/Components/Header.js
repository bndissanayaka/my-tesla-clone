import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [sideMenuStatus, setsideMenuStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg"></img>
      </Link>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={car[1]}>
              {car[0]}{" "}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <Link to="/">Shop</Link>
        <Link to="/login">Account</Link>
        <Link to="#" onClick={() => setsideMenuStatus(true)}>
          Menu
        </Link>
      </RightMenu>
      <SideBarNav show={sideMenuStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setsideMenuStatus(false)}></CustomClose>
        </CloseWrapper>

        <LeftMenu>
          {cars &&
            cars.map((car, index) => (
              <li>
                <a key={index} href="#">
                  {car}{" "}
                </a>{" "}
              </li>
            ))}
        </LeftMenu>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Power Wall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          {" "}
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </SideBarNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  top: 0;
  left: 0;
  right: 0;
  a {
    margin-left: 30px;
    margin-right: 10px;
  }
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 40px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 5px;
    flex-wrap: nowrap;
    margin-right: 20px;
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const SideBarNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.6s ease-in;
  li {
    padding: 10px 0;
  }
  a {
    font-weight: 600;
  }
  overflow-y: scroll;
  overflow-x: hidden;
`;

const CustomClose = styled(MdClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

const LeftMenu = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
`;
