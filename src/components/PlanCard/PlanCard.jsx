import React from "react";
import styled from "styled-components";
import { PlanContext } from "../PlanProvider/PlanProvider";

function PlanCard({ name, price, icon }) {
  const { selectedPlan, changePlan } = React.useContext(PlanContext);

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
        <PlanPrice>${price}/yr</PlanPrice>
        <PlanBonus>2 months free</PlanBonus>
      </PresentationalCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Radio = styled.input`
  opacity: 0;
  position: absolute;
  margin: 0;
  inset: 0;
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
`;

const PlanPrice = styled.p`
  font-size: 0.75rem;
  color: var(--cool-gray);
`;

const PlanBonus = styled.p`
  font-size: 0.7rem;
`;

export default PlanCard;
