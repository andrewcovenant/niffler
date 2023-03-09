import styled from "styled-components";

interface InputProps {
  fontSize?: string;
  borderColor?: string;
  hasBorder?: boolean;
}

const StyledInput = styled.input<InputProps>`
  padding: 5px;
  border: ${(props: InputProps) =>
    props.hasBorder ? `1px solid ${props.borderColor}` : "none"};
  border-radius: 5px;
  font-size: ${(props: InputProps) => props.fontSize || "16px"};
  outline: none;

  &:focus {
    border-color: blue;
  }
`;

export default StyledInput;
