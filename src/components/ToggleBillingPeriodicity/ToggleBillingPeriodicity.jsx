import React from "react";
import styled from "styled-components";
import { BillingPeriodicityContext } from "../BillingPeriodProvider/BillingPeriodProvider";

function ToggleBillingPeriodicity() {
  const { currentPeriodicity, togglePeriodicity, handlePeriodicity } =
    React.useContext(BillingPeriodicityContext);
  return (
    <Wrapper>
      <div>
        <input
          id="monthly"
          type="radio"
          name="toggle-plan"
          value="monthly"
          checked={currentPeriodicity === "monthly"}
          onChange={(event) => togglePeriodicity(event.target.value)}
        />
        <label htmlFor="monthly">Monthly</label>
      </div>
      <div>
        <button>S</button>
        <span></span>
      </div>
      <div>
        <label htmlFor="yearly">Yearly</label>
        <input
          id="yearly"
          type="radio"
          name="toggle-plan"
          value="yearly"
          checked={currentPeriodicity === "yearly"}
          onChange={(event) => togglePeriodicity(event.target.value)}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--magnolia);
`;
export default ToggleBillingPeriodicity;
