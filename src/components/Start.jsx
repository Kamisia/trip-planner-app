import { useGlobalContext } from "../Context";
import Wrapper from "../assets/wrappers/Start";

const Start = () => {
  const { openLoginModal } = useGlobalContext();
  return (
    <Wrapper>
      <div className="app">
        <div className="image"></div>
        <div className="content">
          <h1>Trip Planner </h1>
          <h2>Explore, Dream, Discover, Go!</h2>
          <p>Enjoy time exploring the world</p>
          <div className="button-content">
            <button>Sing Up</button>
            <button onClick={openLoginModal}>Login</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Start;
