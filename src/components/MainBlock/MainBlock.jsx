import styled from "styled-components";
import SidePanel from "../SidePanel/SidePanel";
import FormArea from "../FormArea/FormArea";

function MainBlock() {
  return (
    <Wrapper>
      <SidePanel />
      <FormArea />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  --spacing: 12px;
  --radius: 6px;
  width: min(800px, 95%);
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  padding: var(--spacing);
  display: flex;
  gap: var(--spacing);
  background-color: var(--white);
  border-radius: calc(var(--spacing) + var(--radius));
`;

export default MainBlock;
