import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import AddOnsCard from "../AddOnsCard/AddOnsCard";
import { Button, LinkButton } from "../Button/Button";
import {
  Form,
  ButtonWrapper,
} from "../PersonalInfoForm/PersonalInfoForm";
import { PageContext } from "../PageProvider/PageProvider";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";
import { goToPage } from "../../helpers";
import { ADD_ONS } from "../../constant";

function AddOnsForm({ item }) {
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
      <FormTitle>Pick add-ons</FormTitle>
      <FormDescription>
        Add-ons help enhance your gaming experience.
      </FormDescription>
      <AddOnsWrapper>
        {ADD_ONS.map((option) => {
          return (
            <AddOnsCard
              key={option.id}
              id={option.id}
              title={option.title}
              subTitle={option.subTitle}
              price={
                currentPeriodicity === "monthly"
                  ? option.monthly
                  : option.yearly
              }
            />
          );
        })}
      </AddOnsWrapper>
      <ButtonWrapper>
        <LinkButton data-back={item.id}>Go Back</LinkButton>
        <Button data-next={item.id}>Next Step</Button>
      </ButtonWrapper>
    </Form>
  );
}

const AddOnsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default AddOnsForm;
