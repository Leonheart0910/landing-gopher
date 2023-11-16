import type { ReactNode } from 'react';

import * as SC from './Input.styled';

interface IInputProps {
  placeholder: string;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

const Input = ({ placeholder, className, error, type = 'text', disabled, icon }: IInputProps) => {
  return (
    <SC.InputWrap className={className}>
      <SC.Input type={type} placeholder={placeholder} $error={error} $disabled={disabled} disabled={disabled} />
      {icon && <SC.InputIcon>{icon}</SC.InputIcon>}
    </SC.InputWrap>
  );
};

export { Input };
