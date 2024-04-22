import { useGlobalContext } from "../Context";
import Wrapper from "../assets/wrappers/ModalForm";
const SingUp = () => {
  const { closeSingUpModal, isSingUpModalOpen } = useGlobalContext();

  return (
    <Wrapper>
      <div className={isSingUpModalOpen ? "modal display" : "modal"}>
        <div className="modal-content">
          <span className="close" onClick={closeSingUpModal}>
            &times;
          </span>
          <h2>Join Us</h2>
          <form>
            <label>
              Accont name
              <input type="text" />
            </label>
            <label>
              Email
              <input type="email" />
            </label>

            <label>
              Password
              <input type="password" />
            </label>
            <label>
              Repeat Password
              <input type="password" />
            </label>
            <button type="submit"> Sing Up</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingUp;
