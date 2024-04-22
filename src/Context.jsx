import { useContext, createContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    console.log("kliknięte");
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ openLoginModal, isLoginModalOpen, closeLoginModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
