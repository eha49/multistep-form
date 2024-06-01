import React from "react";
import { createAddOnsState } from "../../helpers";

export const AddOnsContext = React.createContext();

function AddOnsProvider({ children }) {
  const [addOns, setAddOns] = React.useState(() =>
    createAddOnsState()
  );

  function handleAddOns(event) {
    setAddOns({
      ...addOns,
      [event.target.name]: event.target.checked,
    });
  }
  return (
    <AddOnsContext.Provider value={{ addOns, handleAddOns }}>
      {children}
    </AddOnsContext.Provider>
  );
}

export default AddOnsProvider;
