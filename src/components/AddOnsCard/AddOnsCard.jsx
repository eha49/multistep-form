import React from "react";
import styled from "styled-components";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";
import { AddOnsContext } from "../AddOnsProvider/AddOnsProvider";

function AddOnsCard({ title, id, subTitle, price }) {
  const { currentPeriodicity } = React.useContext(
    BillingPeriodicityContext
  );
  const { addOns, handleAddOns } = React.useContext(AddOnsContext);

  return (
    <Wrapper $isSelected={addOns[id]}>
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        checked={addOns[id]}
        onChange={handleAddOns}
      />
      <div>
        <Label htmlFor={id}>{title}</Label>
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
  border-color: ${(props) =>
    props.$isSelected && "var(--purplish-blue)"};
  background-color: ${(props) =>
    props.$isSelected && "var(--magnolia)"};
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
