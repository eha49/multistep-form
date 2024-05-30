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
  --padding: 12px;
  --radius: 6px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  padding: var(--padding);
  display: flex;
  background-color: var(--white);
  border-radius: calc(var(--padding) + var(--radius));
`;

export default MainBlock;
