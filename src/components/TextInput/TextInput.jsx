import React from "react";
import styled from "styled-components";

function TextInput({ type, label, value, onChange, ...delegated }) {
  const id = React.useId();
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        {...delegated}
      />
    </>
  );
}

const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 6px;
  font-size: 0.85rem;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid var(--light-gray);
  border-radius: 6px;
  line-height: 1.5;

  &:focus-visible {
    outline: 1px solid var(--purplish-blue);
  }
`;

export default TextInput;
