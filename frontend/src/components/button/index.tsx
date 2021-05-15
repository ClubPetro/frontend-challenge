import React from 'react';
import ButtonWrapper from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ children, type }: ButtonProps): React.ReactElement => {
    return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
