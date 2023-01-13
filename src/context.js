import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [events, setEvent] = useState([]);
  const setEventData = (data) => {
    setEvent(data);
  };

  const [careers, setCareers] = useState([]);
  const setCareersData = (data) => {
    setCareers(data);
  };

  return (
    <DataContext.Provider
      value={{
        events,
        setEventData,
        careers,
        setCareersData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
