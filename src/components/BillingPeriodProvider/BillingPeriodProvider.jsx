import React from "react";

export const BillingPeriodicityContext = React.createContext();

function BillingPeriodicityProvider({ children }) {
  const [currentPeriodicity, setCurrentPeriodicity] =
    React.useState("monthly");

  function togglePeriodicity(value) {
    setCurrentPeriodicity(value);
  }

  function handlePeriodicity() {
    if (currentPeriodicity === "monthly") {
      setCurrentPeriodicity("yearly");
    } else {
      setCurrentPeriodicity("monthly");
    }
  }

  return (
    <BillingPeriodicityContext.Provider
      value={{
        currentPeriodicity,
        togglePeriodicity,
        handlePeriodicity,
      }}
    >
      {children}
    </BillingPeriodicityContext.Provider>
  );
}

export default BillingPeriodicityProvider;
