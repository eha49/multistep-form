import React from "react";
import styled from "styled-components";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import UserInfoProvider from "../UserInfoProvider/UserInfoProvider";
import { PageContext } from "../PageProvider/PageProvider";
import { LANDMARK_SEQUENCE } from "../../constant";

function FormArea() {
  const { currentPageId } = React.useContext(PageContext);
  return (
    <UserInfoProvider>
      <FromWrapper>
        <InnerWrapper>
          {LANDMARK_SEQUENCE[0].id === currentPageId && (
            <PersonalInfoForm item={LANDMARK_SEQUENCE[0]} />
          )}
          {LANDMARK_SEQUENCE[1].id === currentPageId && (
            <p>This is working</p>
          )}
        </InnerWrapper>
      </FromWrapper>
    </UserInfoProvider>
  );
}

const FromWrapper = styled.div`
  flex: 1;
  border: 1px solid;
`;

const InnerWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  min-height: 100%;
  display: flex;
`;

export default FormArea;
