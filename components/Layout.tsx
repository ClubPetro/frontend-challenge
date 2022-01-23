import TopBar from "./Topbar/intex";
import * as Styled from "./Styles";
import CardsList from "./CardsList/intex";
import { ToastProvider } from "../contexts/ToastContext";
import Form from "./Form";
import { useState } from "react";
function Layout() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  return (
    <>
      <ToastProvider>
        <Styled.Layout>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Form visible={isOpen} setReload={setReload} setVisible={setIsOpen} />
          <CardsList reload={reload} setReload={setReload} />
        </Styled.Layout>
      </ToastProvider>
    </>
  );
}

export default Layout;
