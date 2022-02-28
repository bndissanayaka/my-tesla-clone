import React from "react";
import { Link, useHistory } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/car/userSlice";

import styled from "styled-components";
import { Helmet } from "react-helmet";
import Car from "./Car";
import authApp from "./firebase";

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    authApp
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <Helmet>
        <title>Tesla Account | Tesla</title>
      </Helmet>
      <AccountHeader>
        <AccountLogo>
          <Link to="/">
            <img src="/images/logo.svg" className="header__logoImg" />
          </Link>
        </AccountLogo>
        <AccountLinks>
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <AccountMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MdClose fill="white" /> : <MdMenu fill="white" />}
          </AccountMenu>
        </AccountLinks>
      </AccountHeader>
      <AccountInfo>
        <AccountPerson>
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </AccountPerson>
        <AccountRightMenu>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
        </AccountRightMenu>
      </AccountInfo>
      <AccountCar>
        <Car imgSrc="images/modelS-acct.png" model="model s" testDrive />
        <Car imgSrc="images/modelX-acct.png" model="model x" />
      </AccountCar>
    </Container>
  );
}

export default TeslaAccount;

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
const AccountHeader = styled.div`
   {
    padding: 7px 20px;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222222;
    color: white;
  }
`;

const AccountLinks = styled.div`
   {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 15px;
    z-index: 0;
  }
`;

const AccountLogo = styled.div`
  a > img {
    object-fit: contain;
    width: 80px;
    filter: brightness(0) invert(1);
  }
`;

const AccountMenu = styled.div`
  z-index: 2;
  svg {
    margin-top: 5px;
  }
`;

const AccountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 140px;
  padding-bottom: 30px;
`;

const AccountPerson = styled.div`
  h4 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: x-large;
  }
`;

const AccountRightMenu = styled.div`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    color: #393c41;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s;
    text-transform: capitalize;
  }
  a:hover {
    color: black;
    font-weight: 500;
  }
`;

const AccountCar = styled.div`
   {
    display: grid;
    place-items: center;
    gap: 30px;
    padding-bottom: 150px;
  }
`;
