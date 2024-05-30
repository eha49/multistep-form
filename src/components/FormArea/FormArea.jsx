import styled from "styled-components";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import UserInfoProvider from "../UserInfoProvider/UserInfoProvider";

function FormArea() {
  return (
    <UserInfoProvider>
      <FromWrapper>
        <InnerWrapper>
          <PersonalInfoForm />
        </InnerWrapper>
      </FromWrapper>
    </UserInfoProvider>
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
  display: flex;
  flex-direction: column;
`;

export default FormArea;
