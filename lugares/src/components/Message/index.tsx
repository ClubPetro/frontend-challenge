import React from "react";
import { Container } from "./styles";

interface MessageProps {
  type: string;
}

const Message: React.FC<MessageProps> = ({ children, type }) => {
  return <Container type={type}>{children}</Container>;
};

export default Message;
