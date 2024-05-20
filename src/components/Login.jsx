import { useGlobalContext } from "../Context";
import Wrapper from "../assets/wrappers/ModalForm";
import LoginForm from "./LoginForm";
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
          <LoginForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
