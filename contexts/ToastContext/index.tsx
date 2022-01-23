import React, { createContext, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const addToast = (text: string, type: string) => {
  if (type === "warning") {
    toast.warning(text);
  } else if (type === "success") {
    toast.success(text);
  } else if (type === "error") {
    toast.error(text);
  } else toast.warning(text);
};

const ToastContext = createContext(addToast);

const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }: any) => {
  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ToastContainer position="bottom-center" pauseOnHover autoClose={3000} />
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };
