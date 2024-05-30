import styled from "styled-components";

const Button = styled.button`
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  background-color: var(--marine-blue);
  color: var(--white);
  font-size: 0.8rem;

  &:hover {
    background-color: var(--purplish-blue);
    cursor: pointer;
  }

  &:focus-visible {
    outline: 1px solid var(--purplish-blue);
    outline-offset: 2px;
  }
`;

export default Button;
