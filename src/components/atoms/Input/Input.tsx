import React from "react";
import "../../tailwind.css";

import StyledInput from "./Input.styled";

interface InputProps {
  fontSize?: string;
  label?: string;
  borderColor?: string;
  hasBorder?: boolean;
  placeholder?: string;
  value: string;
  name: string;
  testId?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  fontSize = "16px",
  label,
  borderColor = "#000",
  hasBorder = true,
  placeholder,
  value,
  name,
  testId,
  onChange,
}) => {
  return (
    <div className="input">
      {label && (
        <label htmlFor={name} className="block">
          {label}
        </label>
      )}
      <StyledInput
        hasBorder={hasBorder}
        borderColor={borderColor}
        fontSize={fontSize}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        data-testid={testId}
      />
    </div>
  );
};

export default Input;
