import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLanguage } from "react-icons/md";
import ButtonPrimary from "./ButtonPrimary";
import { Helmet } from "react-helmet";
import ButtonSecondary from "./ButtonSecondary";
import { useDispatch } from "react-redux";
import { login } from "../features/car/userSlice";
import { useHistory } from "react-router-dom";
import authApp from "./firebase";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    authApp
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history.push("/teslaaccount");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <Helmet>
        <title>Tesla SOS - Sign In</title>
      </Helmet>
      <LoginHeader>
        <div>
          <Link to="/">
            <img src="/images/logo.svg" className="header__logoImg" />
          </Link>
        </div>
        <Language>
          <MdOutlineLanguage />
          <span>en-US</span>
        </Language>
      </LoginHeader>

      <FormContainer>
        <h1>Sign In</h1>
        <LoginForm>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary
            name="Sign In"
            type="submit"
            onClick={signIn}
          ></ButtonPrimary>
          <FormLineBreak>
            <a
              href="https://www.tesla.com/support/account-support?redirect=no"
              target="_blank"
            >
              Forgot email?
            </a>
            <span>|</span>
            <a href="#">Forgot password?</a>
          </FormLineBreak>
        </LoginForm>
        <FormDivider>
          <hr />
          <span>OR</span> <hr />
        </FormDivider>
        <Link to="/signup">
          <ButtonSecondary name="Create Account"></ButtonSecondary>
        </Link>
      </FormContainer>

      <footer>
        <FooterContainer>
          <FooterList>
            <FooterListitem>
              <a href="https://www.tesla.com/about?redirect=no" target="_blank">
                Tesla © 2022
              </a>
            </FooterListitem>
            <FooterListitem>
              <a
                href="https://www.tesla.com/legal/privacy?redirect=no"
                target="_blank"
              >
                Privacy &amp; Legal
              </a>
            </FooterListitem>
            <FooterListitem>
              <a
                href="https://www.tesla.com/contact?redirect=no"
                target="_blank"
              >
                Contact
              </a>
            </FooterListitem>
          </FooterList>
        </FooterContainer>
      </footer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  padding: 25px;
  padding-top: 5px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 54px;
`;

const Language = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s;
  span {
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 3px;
  }
  hover {
    background-color: #edeff3;
    opacity: 0.8;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 330px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    padding-bottom: 15px;
    font-weight: 500;
    font-size: 35px;
    margin-left: -250px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    flex-direction: row;
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
    padding-bottom: 5px;
    justify-content: center;
    align-items: center;
    text-align: left;
    span {
      padding: 5px;
      vertical-align: bottom;
      box-sizing: border-box;
    }
  }

  input {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;
    focus {
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      font-size: 12px;
      font-weight: 300;
      box-shadow: none;
      text-align: center;
      all: unset;
      text-decoration: underline;
      cursor: pointer;
      text-decoration-thickness: 0.5px;
    }
    span {
      padding: 0 0.5rem;
    }
  }
`;

const FormLineBreak = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a {
    font-size: 12px;
    font-weight: 300;
    box-shadow: none;
    text-align: center;
    all: unset;
    text-decoration: underline;
    cursor: pointer;
    text-decoration-thickness: 0.5px;
  }
  span {
    padding: 0 0.5rem;
  }
`;

const FormDivider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  margin-top: 20px;
  hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
    align-items: center;
  }
  span {
    font-weight: 500;
    color: #5c5e62;
  }
`;

const FooterContainer = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const FooterList = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  padding-left: 0;
  list-style: none;
  justify-content: center;
  padding: 16px;
`;

const FooterListitem = styled.li`
  color: #000;
  font-size: 13px;
  padding: 4px 8px;
  a {
    color: #5c5d61;
    box-shadow: 0 0 0 0 transparent;
    font-weight: 500;
    text-decoration: none;
  }
`;
