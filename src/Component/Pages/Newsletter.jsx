import React from "react";
import styled from "styled-components";
import "./Newsletter.css";
import Form from "../Compo/Newsletter/Newsletter";

const Newsletter = () => {
  return (
    <StyledWrapper>
      <div className="bodyy">
        <div className="main">
          <div className="main_text_of_Newsletter">
            <h1 className="Newsleter_Main_header_text1">Make It</h1>
            <h1 className="Newsleter_Main_header_text2">Nexovex</h1>
            <h2 div="Newsletter_sub_header_text">
              Your Gateway to IoT Mastery
            </h2>
            <p className="Newsletter_text">
              Stay ahead with us.
              <br />
              Join a community of future-ready innovators.
            </p>
            <Form className="newsletter_form" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .bodyy {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .main {
    height: 100vh;
    background-image: url("../../../public/digital-7297046.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
  .main_text_of_Newsletter {
    display: flex;
    justify-content: start;
    padding-top: 10%;
    padding-left: 10%;
    animation: fadeIn 4s;
  }

  .main_text_of_Newsletter {
    display: flex;
    flex-direction: column;
  }
  .Newsletter_text {
    font-weight: bold;
  }
  .Newsleter_Main_header_text2 {
    font-size: 4rem;
    animation: spin 2s infinite, colorChange 2s infinite;
  }

  @keyframes spin {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
  @keyframes colorChange {
    0% {
      color: black;
    }
    10% {
      color: #333;
    }
    20% {
      color: #666;
    }
    30% {
      color: #999;
    }
    40% {
      color: #ccc;
    }
    50% {
      color: #fff;
    }
    60% {
      color: #ccc;
    }
    70% {
      color: #999;
    }
    80% {
      color: #666;
    }
    90% {
      color: #333;
    }
    100% {
      color: black;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Newsletter;
