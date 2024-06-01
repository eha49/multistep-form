import React from "react";
import styled from "styled-components";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";

function AddOnsCard({ title, subTitle, price }) {
  const { currentPeriodicity } = React.useContext(
    BillingPeriodicityContext
  );
  return (
    <Wrapper>
      <input type="checkbox" id={title} name={title} />
      <div>
        <Label htmlFor={title}>{title}</Label>
        <Description>{subTitle}</Description>
      </div>
      <AddOnPrice>
        $
        {currentPeriodicity === "monthly"
          ? `${price}/mo`
          : `${price}/yr`}
      </AddOnPrice>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid var(--cool-gray);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: var(--weight-bold);
  color: var(--marine-blue);
  text-transform: capitalize;
  margin-bottom: 3px;
`;

const Description = styled.p`
  font-size: 0.75rem;
  color: var(--cool-gray);
`;

const AddOnPrice = styled.p`
  font-size: 0.75rem;
  color: var(--purplish-blue);
  margin-left: auto;
`;

export default AddOnsCard;
