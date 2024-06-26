import React from "react";
import styled from "styled-components";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import PlanForm from "../PlanForm/PlanForm";
import AddOnsForm from "../AddOnsForm/AddOnsForm";
import Summary from "../Summary/Summary";
import UserInfoProvider from "../UserInfoProvider/UserInfoProvider";
import PlanProvider from "../PlanProvider/PlanProvider";
import BillingPeriodicityProvider from "../BillingPeriodProvider/BillingPeriodProvider";
import AddOnsProvider from "../AddOnsProvider/AddOnsProvider";
import { PageContext } from "../PageProvider/PageProvider";
import { LANDMARK_SEQUENCE } from "../../constant";

function FormArea() {
  const { currentPageId } = React.useContext(PageContext);
  return (
    <UserInfoProvider>
      <PlanProvider>
        <BillingPeriodicityProvider>
          <AddOnsProvider>
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
                {LANDMARK_SEQUENCE[3].id === currentPageId && (
                  <Summary item={LANDMARK_SEQUENCE[3]} />
                )}
              </InnerWrapper>
            </FromWrapper>
          </AddOnsProvider>
        </BillingPeriodicityProvider>
      </PlanProvider>
    </UserInfoProvider>
  );
}

const FromWrapper = styled.div`
  flex: 1;
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
