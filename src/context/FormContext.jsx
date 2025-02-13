import { createContext, useState } from "react";

const FormContext = createContext();
export default FormContext;

export function ContextProvider({ children }) {
  const [data, setData] = useState([{ id: null, heading: "", text: "", completed: false, timestamp: "" }]);

  return (
    <>
      <FormContext.Provider value={{data, setData}}>
        {children}
      </FormContext.Provider>
    </>
  );
}
