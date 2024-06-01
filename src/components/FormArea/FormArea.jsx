import React from "react";
import styled from "styled-components";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import PlanForm from "../PlanForm/PlanForm";
import AddOnsForm from "../AddOns/AddOns";
import UserInfoProvider from "../UserInfoProvider/UserInfoProvider";
import PlanProvider from "../PlanProvider/PlanProvider";
import BillingPeriodicityProvider from "../BillingPeriodProvider/BillingPeriodProvider";
import { PageContext } from "../PageProvider/PageProvider";
import { LANDMARK_SEQUENCE } from "../../constant";

function FormArea() {
  const { currentPageId } = React.useContext(PageContext);
  return (
    <UserInfoProvider>
      <PlanProvider>
        <BillingPeriodicityProvider>
          <FromWrapper>
            <InnerWrapper>
              {LANDMARK_SEQUENCE[0].id === currentPageId && (
                <PersonalInfoForm item={LANDMARK_SEQUENCE[0]} />
              )}
              {LANDMARK_SEQUENCE[1].id === currentPageId && (
                <PlanForm item={LANDMARK_SEQUENCE[1]} />
              )}
              {LANDMARK_SEQUENCE[2].id === currentPageId && (
                <AddOnsForm item={LANDMARK_SEQUENCE[2]} />
              )}
            </InnerWrapper>
          </FromWrapper>
        </BillingPeriodicityProvider>
      </PlanProvider>
    </UserInfoProvider>
  );
}

const FromWrapper = styled.div`
  flex: 1;
  border: 1px solid;
`;

const InnerWrapper = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  min-height: 100%;
  display: flex;
`;

export default FormArea;
