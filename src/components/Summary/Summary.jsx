import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import Success from "../Success/Success";
import { Button, LinkButton } from "../Button/Button";
import {
  Form,
  ButtonWrapper,
} from "../PersonalInfoForm/PersonalInfoForm";
import { PageContext } from "../PageProvider/PageProvider";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";
import { PlanContext } from "../PlanProvider/PlanProvider";
import { AddOnsContext } from "../AddOnsProvider/AddOnsProvider";

import { ADD_ONS } from "../../constant";
import {
  goToPage,
  getPlanPageId,
  getPlan,
  calculateTotalPrice,
} from "../../helpers";

function Summary({ item }) {
  const [success, setSuccess] = React.useState(false);
  const { changePageId } = React.useContext(PageContext);
  const { selectedPlan } = React.useContext(PlanContext);
  const { currentPeriodicity } = React.useContext(
    BillingPeriodicityContext
  );
  const { addOns } = React.useContext(AddOnsContext);

  const planPageId = getPlanPageId();
  const totalPrice = calculateTotalPrice(
    selectedPlan,
    addOns,
    currentPeriodicity
  );

  if (success) {
    return <Success />;
  }

  return (
    <Wrapper
      action="#"
      onSubmit={(event) => {
        event.preventDefault();
        const newPageId = goToPage(event, item);
        changePageId(newPageId);
      }}
    >
      <FormTitle>Finishing up</FormTitle>
      <FormDescription>
        Double-check that everything looks OK before confirming.
      </FormDescription>
      <BillingSummary>
        <MainPlanWrapper>
          <div>
            <MainPlan>
              {selectedPlan} ({currentPeriodicity})
            </MainPlan>
            <ChangePlan
              type="button"
              onClick={() => changePageId(planPageId)}
            >
              Change
            </ChangePlan>
          </div>
          {currentPeriodicity === "monthly" && (
            <MainPlanPrice>
              ${getPlan(selectedPlan).monthly}/mo
            </MainPlanPrice>
          )}
          {currentPeriodicity === "yearly" && (
            <MainPlanPrice>
              ${getPlan(selectedPlan).yearly}/yr
            </MainPlanPrice>
          )}
        </MainPlanWrapper>
        {ADD_ONS.map((item) => {
          return (
            addOns[item.id] && (
              <AddOn key={item.id}>
                <span>{item.title}</span>
                {currentPeriodicity === "monthly" && (
                  <span>+${item.monthly}/mo</span>
                )}
                {currentPeriodicity === "yearly" && (
                  <span>+${item.yearly}/yr</span>
                )}
              </AddOn>
            )
          );
        })}
      </BillingSummary>
      <TotalPrice>
        {currentPeriodicity === "monthly" && (
          <>
            <span>Total (per month)</span>
            <span>+${totalPrice}/mo</span>
          </>
        )}
        {currentPeriodicity === "yearly" && (
          <>
            <span>Total (per year)</span>
            <span>+${totalPrice}/yr</span>
          </>
        )}
      </TotalPrice>
      <ButtonWrapper>
        <LinkButton data-back={item.id}>Go Back</LinkButton>
        <ConfirmButton
          type="button"
          onClick={() => setSuccess(!success)}
        >
          Confirm
        </ConfirmButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Form)`
  --spacing: 16px;
`;

const BillingSummary = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  padding: var(--spacing);
  border-radius: 6px;
  background-color: var(--magnolia);
`;

const MainPlanWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`;

const MainPlan = styled.p`
  font-size: 0.85rem;
  font-weight: var(--weight-bold);
  color: var(--marine-blue);
  margin-bottom: 2px;
`;

const ChangePlan = styled(LinkButton)`
  font-size: 0.75rem;
  font-weight: var(--weight-regular);
  text-decoration: underline;
`;

const MainPlanPrice = styled(MainPlan)`
  text-transform: lowercase;
`;

const AddOn = styled.p`
  padding-top: 12px;
  font-size: 0.8rem;
  color: var(--cool-gray);
  display: flex;
  justify-content: space-between;

  &:first-of-type {
    border-top: 1px solid var(--light-gray);
    margin-top: var(--spacing);
  }

  & span:first-child {
    text-transform: capitalize;
  }

  & span:last-child {
    color: var(--marine-blue);
  }
`;

const TotalPrice = styled.p`
  padding-left: var(--spacing);
  padding-right: var(--spacing);
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--cool-gray);

  & span:last-child {
    font-size: 1rem;
    font-weight: var(--weight-bold);
    color: var(--purplish-blue);
  }
`;

const ConfirmButton = styled(Button)`
  background-color: var(--purplish-blue);
`;

export default Summary;
