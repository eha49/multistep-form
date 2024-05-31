import React from "react";
import { PLANS } from "../../constant";

export const PlanContext = React.createContext();

function PlanProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = React.useState(
    PLANS[0].name
  );
  function changePlan(value) {
    setSelectedPlan(value);
  }

  return (
    <PlanContext.Provider value={{ selectedPlan, changePlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export default PlanProvider;
