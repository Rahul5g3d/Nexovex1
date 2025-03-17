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

const StyledWrapper = styled.div``;

export default Newsletter;
