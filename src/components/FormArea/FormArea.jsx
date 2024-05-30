import styled from "styled-components";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";

function FormArea() {
  return (
    <FromWrapper>
      <InnerWrapper>
        <PersonalInfoForm />
      </InnerWrapper>
    </FromWrapper>
  );
}

const FromWrapper = styled.div`
  flex: 1;
`;

const InnerWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  min-height: 100%;
`;

export default FormArea;
