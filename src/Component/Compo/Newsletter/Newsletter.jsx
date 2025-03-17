import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="newsletter-form">
        <p className="heading"> Subscribe to Our Newsletter</p>
        <form className="form">
          <label htmlFor="email">Email:</label>
          <input
            required
            placeholder="Enter your email address"
            name="email"
            id="email"
            type="email"
          />
          <input defaultValue="Subscribe" type="submit" />
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Unique styles for the newsletter form */
  .newsletter-form {
    max-width: 400px;
    margin-top: 30px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 8px;
    background-color: #f7f7f7;
    font-family: Arial, sans-serif;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  .heading {
    font-weight: bold;
    font-size: 20px;
    color: #333;
    margin-bottom: 2px;
  }

  .newsletter-form h2 {
    margin-top: 0;
    color: #333;
    font-size: 24px;
  }

  .newsletter-form label {
    display: block;
    font-weight: bold;
    color: #666;
    margin-bottom: 10px;
  }

  .newsletter-form input[type="email"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .newsletter-form input[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #ff6600;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  .newsletter-form input[type="submit"]:hover {
    background-color: #ff8533;
  }
`;

export default Form;
