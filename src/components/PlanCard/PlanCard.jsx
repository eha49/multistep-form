import React from "react";
import styled from "styled-components";
import { PlanContext } from "../PlanProvider/PlanProvider";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";

function PlanCard({ name, price, icon }) {
  const { selectedPlan, changePlan } = React.useContext(PlanContext);
  const { currentPeriodicity } = React.useContext(
    BillingPeriodicityContext
  );

  return (
    <Wrapper>
      <Radio
        type="radio"
        name={name}
        id={name}
        value={name}
        checked={name === selectedPlan}
        onChange={(event) => changePlan(event.target.value)}
      />

      <PresentationalCard>
        <Icon src={icon} alt="a plan icon" />
        <PlanTitle>{name}</PlanTitle>
        <PlanPrice>
          $
          {currentPeriodicity === "monthly"
            ? `${price}/mo`
            : `${price}/yr`}
        </PlanPrice>
        {currentPeriodicity === "yearly" && (
          <PlanBonus>2 months free</PlanBonus>
        )}
      </PresentationalCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  flex-basis: 100px;
`;

const Radio = styled.input`
  opacity: 0;
  position: absolute;
  margin: 0;
  inset: 0;
  cursor: pointer;
`;

const PresentationalCard = styled.div`
  border: 1px solid var(--cool-gray);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${Radio}:checked + & {
    border: 1px solid var(--purplish-blue);
    background-color: var(--magnolia);
  }

  ${Radio}:focus-visible + & {
    outline: 1px solid var(--purplish-blue);
  }
`;

const Icon = styled.img`
  width: 30px;
  display: block;
  margin-bottom: 24px;
`;

const PlanTitle = styled.h2`
  font-size: 0.85rem;
  text-transform: capitalize;
  color: var(--marine-blue);
`;

const PlanPrice = styled.p`
  font-size: 0.75rem;
  color: var(--cool-gray);
`;

const PlanBonus = styled.p`
  font-size: 0.7rem;
  color: var(--marine-blue);
`;

export default PlanCard;
