import React from 'react';
import ButtonWrapper from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: string;
}

const Button = ({ children }: ButtonProps): React.ReactElement => {
    return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
