import React from "react";

export const UserInfoContext = React.createContext();

function UserInfoProvider({ children }) {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    number: "",
  });

  function handleChange(event) {
    const propertyName = event.target.name;
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  }

  return (
    <UserInfoContext.Provider value={{ user, handleChange }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
