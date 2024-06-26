import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import PlanCard from "../PlanCard/PlanCard";
import ToggleBillingPeriodicity from "../ToggleBillingPeriodicity/ToggleBillingPeriodicity";
import { Button, LinkButton } from "../Button/Button";
import {
  Form,
  ButtonWrapper,
} from "../PersonalInfoForm/PersonalInfoForm";
import { PageContext } from "../PageProvider/PageProvider";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";
import { goToPage } from "../../helpers";
import { PLANS } from "../../constant";

function PlanForm({ item }) {
  const { changePageId } = React.useContext(PageContext);
  const { currentPeriodicity } = React.useContext(
    BillingPeriodicityContext
  );

  return (
    <Form
      action="#"
      onSubmit={(event) => {
        event.preventDefault();
        const newPageId = goToPage(event, item);
        changePageId(newPageId);
      }}
    >
      <FormTitle>Select your plan</FormTitle>
      <FormDescription>
        You have the option of monthly or yearly billing.
      </FormDescription>
      <PlanCardsWrapper>
        {PLANS.map((plan) => {
          return (
            <PlanCard
              key={plan.name}
              name={plan.name}
              icon={plan.icon}
              price={
                currentPeriodicity === "monthly"
                  ? plan.monthly
                  : plan.yearly
              }
            />
          );
        })}
      </PlanCardsWrapper>
      <ToggleBillingPeriodicity />
      <ButtonWrapper>
        <LinkButton data-back={item.id}>Go Back</LinkButton>
        <Button data-next={item.id}>Next Step</Button>
      </ButtonWrapper>
    </Form>
  );
}

const PlanCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export default PlanForm;
