import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import PlanCard from "../PlanCard/PlanCard";
import { Button, LinkButton } from "../Button/Button";
import {
  Form,
  ButtonWrapper,
} from "../PersonalInfoForm/PersonalInfoForm";

function PlanForm({ item }) {
  return (
    <Form action="#">
      <FormTitle>Select your plan</FormTitle>
      <FormDescription>
        You have the option of monthly or yearly billing.
      </FormDescription>
      <PlanCardsWrapper>
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </PlanCardsWrapper>
      <ButtonWrapper>
        <LinkButton data-back={item.id}>Go Back</LinkButton>
        <Button data-next={item.id}>Next Step</Button>
      </ButtonWrapper>
    </Form>
  );
}

const PlanCardsWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 12px;
`;

export default PlanForm;
