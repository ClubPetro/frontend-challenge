import { createContext, useState } from "react";

interface Context {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditContext = createContext<Context>({
  isModalVisible: false,
  setIsModalVisible: () => {},
});

const ModalEditProvider: React.FC = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ModalEditContext.Provider value={{ isModalVisible, setIsModalVisible }}>
      {children}
    </ModalEditContext.Provider>
  );
};

export default ModalEditProvider;
