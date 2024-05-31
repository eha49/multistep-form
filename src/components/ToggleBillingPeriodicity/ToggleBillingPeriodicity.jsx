import React from "react";
import styled from "styled-components";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";

function ToggleBillingPeriodicity() {
  const { currentPeriodicity, togglePeriodicity, handlePeriodicity } =
    React.useContext(BillingPeriodicityContext);
  return (
    <Wrapper>
      <RadioWrapper>
        <RadioInput
          id="monthly"
          type="radio"
          name="toggle-plan"
          value="monthly"
          checked={currentPeriodicity === "monthly"}
          onChange={(event) => togglePeriodicity(event.target.value)}
        />
        <Label
          htmlFor="monthly"
          $currentPeriodicity={currentPeriodicity}
          $value="monthly"
        >
          Monthly
        </Label>
      </RadioWrapper>
      <div>
        <button>S</button>
        <span></span>
      </div>
      <RadioWrapper>
        <RadioInput
          id="yearly"
          type="radio"
          name="toggle-plan"
          value="yearly"
          checked={currentPeriodicity === "yearly"}
          onChange={(event) => togglePeriodicity(event.target.value)}
        />
        <Label
          htmlFor="yearly"
          $currentPeriodicity={currentPeriodicity}
          $value="yearly"
        >
          Yearly
        </Label>
      </RadioWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--magnolia);
  margin-top: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const RadioWrapper = styled.div`
  position: relative;
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${(props) =>
    props.$value === props.$currentPeriodicity
      ? "var(--marine-blue)"
      : "var(--cool-gray)"};
  cursor: pointer;

  ${RadioInput}:focus-visible + & {
    outline: 1px solid currentColor;
  }
`;

export default ToggleBillingPeriodicity;
