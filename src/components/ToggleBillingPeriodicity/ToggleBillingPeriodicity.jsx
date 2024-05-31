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
      <ButtonWrapper>
        <Button type="button" onClick={handlePeriodicity}></Button>
        <ToggleSwitch
          $currentPeriodicity={currentPeriodicity}
        ></ToggleSwitch>
      </ButtonWrapper>
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
  align-items: center;
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

const ButtonWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  opacity: 0;
  inset: 0;
  border: solid 1px;
  cursor: pointer;
`;

const ToggleSwitch = styled.span`
  --length: 28px;
  display: flex;
  align-items: center;
  background-color: var(--marine-blue);
  margin-left: -2px;
  border-radius: 50px;
  width: calc(var(--length) + 4px);
  height: calc(var(--length) / 2 + 4px);
  pointer-events: none;

  &::before {
    display: inline-block;
    content: "";
    width: calc(var(--length) / 2);
    height: calc(var(--length) / 2);
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 50%;
    background-color: var(--white);
    transform: ${(props) =>
      props.$currentPeriodicity === "monthly"
        ? "translateX(0%)"
        : "translateX(100%)"};
  }

  ${Button}:focus-visible + & {
    outline: 1px solid currentColor;
    outline-offset: 1px;
  }
`;

export default ToggleBillingPeriodicity;
