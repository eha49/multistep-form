import styled from "styled-components";

function FormDescription({ children }) {
  return <Description>{children}</Description>;
}

const Description = styled.p`
  font-size: 0.85rem;
  color: var(--cool-gray);
`;
export default FormDescription;
