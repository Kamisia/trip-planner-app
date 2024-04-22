import { useContext, createContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSingUpModalOpen, setIsSingUpModalOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSingUpModalOpen(false);
  };
  const openSingUpModal = () => {
    setIsSingUpModalOpen(true);
    setIsLoginModalOpen(false);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const closeSingUpModal = () => {
    setIsSingUpModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openLoginModal,
        isLoginModalOpen,
        closeLoginModal,
        openSingUpModal,
        isSingUpModalOpen,
        closeSingUpModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
