import { GoArrowRight } from "react-icons/go";
import Wrapper from "../assets/wrappers/Start";

const Start = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="image"></div>
        <div className="content">
          <h1>Trip Planner </h1>
          <h2>Explore, Dream, Discover, Go!</h2>
          <p>Enjoy time exploring the world</p>
          <button>
            <GoArrowRight />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Start;
