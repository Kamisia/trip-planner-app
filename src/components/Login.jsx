import { useGlobalContext } from "../Context";
import Wrapper from "../assets/wrappers/ModalForm";
const Login = () => {
  const { closeLoginModal, isLoginModalOpen } = useGlobalContext();

  return (
    <Wrapper>
      <div className={isLoginModalOpen ? "modal display" : "modal"}>
        <div className="modal-content">
          <span className="close" onClick={closeLoginModal}>
            &times;
          </span>
          <h2>Login</h2>
          <form>
            <label>
              Accont name
              <input type="text" />
            </label>
            <label>
              Password
              <input type="password" />
            </label>
            <button type="submit"> Login</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
