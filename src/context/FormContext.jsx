import { createContext, useState } from "react";

const FormContext = createContext();
export default FormContext;

export function ContextProvider({ children }) {
  const [data, setData] = useState([{ id: null, heading: "", text: "", completed: false, timestamp: "", priority: "", category: "" }]);
 
  const [prior, setPrior] = useState("");  // NL: for Priority

  return (
    <>
      <FormContext.Provider value={{data, setData, prior, setPrior}}>
        {children}
      </FormContext.Provider>
    </>
  );
}
