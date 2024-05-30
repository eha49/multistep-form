import styled from "styled-components";

function FormTitle({ children }) {
  return <Title>{children}</Title>;
}

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 6px;
`;

export default FormTitle;
