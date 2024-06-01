import React from "react";
import { LANDMARK_SEQUENCE } from "../../constant";

export const PageContext = React.createContext();

function PageProvider({ children }) {
  const [currentPageId, setCurrentPageId] = React.useState(
    LANDMARK_SEQUENCE[0].id
  );
  function changePageId(id) {
    setCurrentPageId(id);
  }

  return (
    <PageContext.Provider value={{ currentPageId, changePageId }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageProvider;
