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
    height: 60vh;
  }
  .content {
    margin: auto;
  }
  h1 {
    color: #b93bc2;
    font-size: 4rem;
    font-family: "Dancing Script";
    text-transform: capitalize;
    font-style: italic;
    margin: 0;
    margin-bottom: 1.2rem;
    padding: 0;
  }
  h2,
  p {
    color: #0e061b;
    margin: 0;
    padding: 0;

    font-family: "Raleway", sans-serif;
    margin-bottom: 0.8rem;
    font-weight: 400;
    font-size: 1.2rem;
  }
  p {
    font-weight: 300;
    font-size: 1rem;
    margin: 0;

    color: #8690b5;
  }

  .button-content {
    text-align: center;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    background: #c9156e;

    background-image: linear-gradient(315deg, #b93bc2 0%, #c9156e 68%);
    border-radius: 24px;
    margin-bottom: 1rem;
    border: none;
    color: #ededed;
    padding: 0.8rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    font-size: 1em;
    transition: 0.5s ease-in-out;
  }
  button:hover {
    border: 1px #c9156e solid;
    color: #c9156e;
    background: transparent;
  }

  @media (min-width: 768px) {
    button {
      width: 200px;
    }
    .image {
      height: 40vh;
    }
    .app {
      width: 60vw;
      height: 70vh;
      padding: 1rem;
      margin: auto;
      background-color: #fcfff6;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
`;

export default Wrapper;
