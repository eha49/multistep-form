import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import { Button, LinkButton } from "../Button/Button";
import {
  Form,
  ButtonWrapper,
} from "../PersonalInfoForm/PersonalInfoForm";
import { PageContext } from "../PageProvider/PageProvider";
import { goToPage } from "../../helpers";

function Summary({ item }) {
  const { changePageId } = React.useContext(PageContext);
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
            <MainPlan>Arcade</MainPlan>
            <ChangePlan type="button">Change</ChangePlan>
          </div>
          <MainPlanPrice>$9/mo</MainPlanPrice>
        </MainPlanWrapper>
        <AddOn>
          <span>Online Service</span>
          <span>+$1/mo</span>
        </AddOn>
        <AddOn>
          <span>Larger Storage</span>
          <span>+$2/mo</span>
        </AddOn>
      </BillingSummary>
      <TotalPrice>
        <span>Total</span>
        <span>+$12/mo</span>
      </TotalPrice>
      <ButtonWrapper>
        <LinkButton data-back={item.id}>Go Back</LinkButton>
        <ConfirmButton type="button">Confirm</ConfirmButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Form)`
  --spacing: 16px;
`;

const BillingSummary = styled.div`
  border: 1px solid;
  margin-top: 32px;
  margin-bottom: 20px;
  padding: var(--spacing);
  border-radius: 6px;
`;

const MainPlanWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainPlan = styled.p`
  font-size: 0.85rem;
  font-weight: var(--weight-bold);
  color: var(--marine-blue);
`;

const ChangePlan = styled(LinkButton)`
  font-size: 0.8rem;
  font-weight: var(--weight-regular);
  text-decoration: underline;
`;

const MainPlanPrice = styled(MainPlan)``;

const AddOn = styled.p`
  padding-top: 12px;
  font-size: 0.8rem;
  color: var(--cool-gray);
  display: flex;
  justify-content: space-between;

  &:first-of-type {
    border-top: 1px solid var(--cool-gray);
    margin-top: var(--spacing);
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
