import styled from "styled-components";
const Wrapper = styled.div`
  .modal {
    background-color: #fbe0ee;
    color: #b93bc2;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    margin: auto;
    width: 90%;
    max-height: 90%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    opacity: 0;
    visibility: hidden;
  }
  .display {
    opacity: 1;
    visibility: visible;
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    font-family: "Raleway", sans-serif;
    margin: auto;
    max-height: 100%;
  }
  .close {
    font-size: 3rem;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 25px;
    transform: rotateY(0deg);
    transition: 0.5s ease-in-out;
  }
  .close:hover {
    transform: rotateY(180deg);
  }
  h2 {
    font-size: 4rem;
    font-weight: 200;
    margin-top: auto;
    margin-bottom: auto;
  }
  form {
    width: 90%;
    min-height: 300px;
    text-align: left;
    margin: auto;
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
  label {
    margin-top: auto;
    padding-top: 1rem;
    padding-bottom: 0.3rem;
    display: flex;
    flex-direction: column;
  }
  .login-form label {
    padding: 0;
  }
  input {
    padding: 0.8rem;
    width: 80%;
    border-radius: 24px;
    font-size: 1rem;
    background-color: #fcfff6;
    color: #0d0617;
    border: none;
    outline: none;
  }
  p {
    padding: 0;
    margin: 0;
    color: #c9156e;
  }

  .check {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin-left: 1.5rem;
    justify-content: space-between;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .check input {
    padding: 1rem;
    width: 25px;
    margin-right: 0;
  }
  #label-checkbox {
    margin-left: 0;
  }

  button {
    background: #c9156e;
    background-image: linear-gradient(315deg, #b93bc2 0%, #c9156e 68%);
    border-radius: 24px;
    margin: auto;
    border: none;
    color: #ededed;
    padding: 0.8rem;
    margin-top: 0.8rem;
    width: 85%;

    cursor: pointer;
    font-size: 1em;
    transition: 0.5s ease-in-out;
  }
  .login-form button {
    margin: auto;
  }
  button:hover {
    border: 1px #c9156e solid;
    color: #c9156e;
    background: transparent;
  }
  @media (min-width: 768px) {
    .modal {
      max-width: 500px;
    }
  }
`;
export default Wrapper;
