import React from 'react';
import styled from 'styled-components';


function FormCard() {
  return (
    <StyledWrapper>
      <div className="container z-10">
        <form className="form pt-5 lg:w-[400px] xl:w-[450px] h-[500px]" >
          <input placeholder="Email" className="username input input1 " type="text" />
          <input placeholder="Phone" className="username input input2 " type="number" />
          <input placeholder="Name" className="username input input3" type="text" />
          <button className="btn" type="submit">Schedule Your Installation Session</button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ::selection {
    background-color: gray;
  }

  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    background-image: linear-gradient(to bottom, #1c1f48, #3b3e61, #1c7872);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
  }


  .input {
    z-index: 1;
    margin: 1.5rem 0;
    padding: 1rem 0.5rem;
    width: 22rem;
    background-color: inherit;
    color: white;
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    transition: all 400ms;
    
  }
  .input:active {
  border-radius: 0.5rem;
  }
  .input1:hover {
    background-color: #383B5F;
    border: none;
    border-radius: 0.5rem;
  }
  .input2:hover {
    background-color: #444668;
    border: none;
    border-radius: 0.5rem;
  }
  .input3:hover {
    background-color: #485871;
    border: none;
    border-radius: 0.5rem;
  }
  .btn {
    z-index: 1;
    height: 3rem;
    width: 22rem;
    margin-top: 3rem;
    background-color: #04cf9c;
    color: white;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.2rem;
    transition: all 400ms;
    cursor: pointer;
    box-shadow:
      0 0 10px #04cf9c,
      0 0 10px #04cf9c;
  }
  .btn:hover {
    background-color: #04cf9c;
    box-shadow: none;
  }`;

export default FormCard
