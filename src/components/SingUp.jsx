import { useGlobalContext } from "../Context";
import Wrapper from "../assets/wrappers/ModalForm";
import SingUpForm from "./SingUpForm";
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
          <SingUpForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default SingUp;
