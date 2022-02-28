import React, { useState } from "react";

import { Link } from "react-router-dom";

import { MdOutlineLanguage } from "react-icons/md";
import ButtonPrimary from "./ButtonPrimary";
import { Helmet } from "react-helmet";
import ButtonSecondary from "./ButtonSecondary";
import styled from "styled-components";
import authApp from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/car/userSlice";
import { useHistory } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [market, setMarket] = useState("");
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    if (!fname) {
      return alert("Please enter a first name");
    }

    if (!lname) {
      return alert("Please enter a last name");
    }

    authApp.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({ displayName: fname })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fname,
            })
          );
          history.push("/teslaaccount");
        })
        .catch(() => alert(e.message));
    });
  };
  return (
    <Container>
      <Helmet>
        <title>Tesla SOS - Register</title>
      </Helmet>
      <FormHeader>
        <div>
          <Link to="/">
            <img src="/images/logo.svg" className="header__logoImg" />
          </Link>
        </div>
        <Language>
          <MdOutlineLanguage />
          <span>en-US</span>
        </Language>
      </FormHeader>

      <FormContainer>
        <h1>Create Account</h1>
        <SignUpForm>
          <label htmlFor="market">Select Market</label>
          <select
            className="selectInput"
            id="market"
            type="text"
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            autoComplete="off"
          >
            <optgroup label="North America">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">México</option>
              <option value="PR">Puerto Rico</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="BE">Belgium</option>
              <option value="CZ">Česko</option>
              <option value="DK">Danmark</option>
              <option value="DE">Deutschland</option>
              <option value="GR">Ελλάδα</option>
              <option value="ES">España</option>
              <option value="FR">France</option>
              <option value="HR">Hrvatska</option>
              <option value="HU">Magyarország</option>
              <option value="IE">Ireland</option>
              <option value="IS">Ísland</option>
              <option value="IT">Italia</option>
              <option value="LU">Luxembourg</option>
              <option value="NL">Nederland</option>
              <option value="NO">Norge</option>
              <option value="AT">Österreich</option>
              <option value="PL">Polska</option>
              <option value="PT">Portugal</option>
              <option value="RO">România</option>
              <option value="SI">Slovenija</option>
              <option value="CH">Switzerland</option>
              <option value="SE">Sverige</option>
              <option value="FI">Suomi</option>
              <option value="GB">United Kingdom</option>
              <option value="EU">Other Europe</option>
            </optgroup>
            <optgroup label="Middle-East">
              <option value="IL">ישראל</option>
              <option value="AE">UAE</option>
              <option value="JO">Jordan</option>
            </optgroup>
            <optgroup label="Asia/Pacific">
              <option value="CN">中国大陆</option>
              <option value="HK">Hong Kong</option>
              <option value="MO">Macau</option>
              <option value="TW">台灣</option>
              <option value="JP">日本</option>
              <option value="SG">Singapore</option>
              <option value="KR">대한민국</option>
              <option value="AU">Australia</option>
              <option value="NZ">New Zealand</option>
            </optgroup>
          </select>

          <label htmlFor="language">Select Language </label>
          <select
            className="selectInput"
            type="text"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            autoComplete="off"
          >
            <option value="en-US">English</option>
          </select>
          <label htmlFor="fname">First Name</label>
          <input
            className="formInput"
            type="text"
            id="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            className="formInput"
            type="text"
            id="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            className="formInput"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password </label>
          <input
            className="formInput"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="formCheckbox">
            <input type="checkbox" />
            <span>
              By creating a Tesla Account, I understand and agree to Tesla's{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tesla.com/about/legal?redirect=no#privacy-statement"
              >
                Privacy Notice
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tesla.com/about/legal?redirect=no#terms-of-use"
              >
                Terms of Use.
              </a>
            </span>
          </div>
          <div>
            <div className="captchaitem">
              <img src="./images/captcha.svg" alt="Type in the code above" />
            </div>
            <div className="captchalabel">
              <label htmlFor="captcha lable">
                <span>Enter the characters in the picture</span>
              </label>
              <div>
                <input class="formInput" type="text" />
              </div>
            </div>
          </div>
          <ButtonPrimary
            name="Create Account"
            type="submit"
            onClick={signUp}
          ></ButtonPrimary>
        </SignUpForm>
        <FormDivider>
          <hr />
          <span>OR</span> <hr />
        </FormDivider>
        <Link to="/login">
          <ButtonSecondary name="Sign In"></ButtonSecondary>
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

export default Signup;

const Container = styled.div`
  * {
    scroll-behavior: smooth;
  }

  overflow-y: scroll;
  padding: 25px;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormHeader = styled.div`
  padding-left: 30px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  background-color: #fff;
  box-shadow: 0 4px 16px 10px #fff;
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
  padding-top: 90px;
  gap: 20px;
  width: 330px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    font-weight: 500;
    font-size: 35px;
    margin-left: -160px;
  }
  Link > button {
    background-color: transparent;
    border: 3px solid #171a20;
    width: 100%;
    padding: 10px 40px;
    border-radius: 50px;
    text-transform: uppercase;
    color: #171a20;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    margin-bottom: 80px;
    hover {
      background-color: #171a20;
      color: white;
    }
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    flex-direction: row;
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    padding-bottom: 5px;
    padding-left: 20px;
    justify-content: flex-start;
    align-items: start;
    width: 330px;
    text-align: left;
  }
  label > span {
    padding: 5px;
    vertical-align: bottom;
    box-sizing: border-box;
    padding: 0;
  }
  .formInput {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;
    width: 330px;
  }
  .selectInput {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;
    width: 332px;
    height: 45px;
  }
  .formCheckbox {
    color: #5e5b5b;
    display: flex;
    align-items: flex-start;
    margin-block-end: 4px;
    row-gap: 0;
    column-gap: unset;
    height: 50px;
    width: 332px;
    grid-template-rows: repeat(3, minmax(0, auto));
    text-indent: 0;
    align-content: center;
    border-radius: 4px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    span {
      grid-area: label-text;
      font-size: 15px;
      line-height: 1.414;
      font-weight: 500;
      display: inline-block;
      width: 332px;
      padding-left: 10px;
      text-align: left;
      letter-spacing: 0.5px;
    }
    input {
      margin-top: 5px;
      width: 24px !important;
      height: 24px !important;
      inline-size: 24px;
      display: flex;
      border: 1px solid #5c5d61;
      border-radius: 4px;
      align-content: center;
      justify-content: center;
      align-items: center;
      outline: 0;
      text-overflow: ellipsis;
      padding-left: 20px;
    }
    span > a {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    span > a:hover {
      cursor: pointer;
      text-align: initial;
      background-color: transparent;
      position: relative;
      color: #000000;
      transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75),
        color 0.33s ease;
      text-underline-offset: 2px;
    }
    .form__buttonSecondary {
      margin-bottom: 80px;
    }
  }
  .captchaitem {
    margin: 0 0 16px;
    background: #eee;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 0.5rem;
    overflow: hidden;
    width: 332px;
    height: 60px;
  }
  img {
    width: 80%;
    height: 90%;
  }
  .captchalabel {
    width: 300px;
    label {
      grid-area: label-text;
      color: #5c5d61;
      font-size: 16px;
      line-height: 1.414;
      font-weight: 500;
      transition: color 0.33s ease;
      align-items: center;
      display: flex;
      text-align: start;
      cursor: pointer;
      padding-left: 30px;
      padding-bottom: 10px;
    }
  }
`;
const FormDivider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  hr {
    margin-top: 10px;
    width: 40%;
    height: 0;
    opacity: 0.3;
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
  padding: 16px 20px 16px 0px;
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
