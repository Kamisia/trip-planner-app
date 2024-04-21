import styled from "styled-components";
import startImage from "/src/assets/images/19197585.png";
const Wrapper = styled.div`
  .app {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 98vh;
  }
  .image {
    background-image: url(${startImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 68vh;
  }
  .content {
    height: 25vh;
    padding: 0.5em;
    margin-top: auto;
    margin-bottom: auto;
  }
  h1 {
    color: #b93bc2;
    font-family: "Dancing Script";
    text-transform: capitalize;
    font-style: italic;
    margin: 0;
    margin-bottom: 0.8rem;
    padding: 0;
  }
  h2,
  p {
    color: #0e061b;
    margin: 0;
    padding: 0;
    padding-left: 0.5rem;
    font-family: "Raleway", sans-serif;
    margin-bottom: 0.8rem;
    font-weight: 400;
    font-size: 1rem;
  }
  p {
    font-weight: 300;
    font-size: 0.8rem;
    margin: 0;
    color: #8690b5;
  }
  button {
    background: #c9156e;
    border-radius: 0 20px 0 20px;
    border: none;
    color: #ededed;
    padding: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-top: 1em;
    font-size: 1.5em;
    transition: 0.5s ease-in-out;
  }
  button:hover {
    border: 1px #c9156e solid;
    color: #c9156e;
    background-color: transparent;
  }
`;

export default Wrapper;
