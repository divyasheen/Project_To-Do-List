import { createContext, useState } from "react";

const FormContext = createContext();
export default FormContext;

export function ContextProvider({ children }) {
  const [data, setData] = useState([]); // ⬅ Start with an empty array (No unnecessary empty task)

  const [prior, setPrior] = useState(""); // ⬅ Only if needed for filtering
  const [category, setCategory] = useState(""); // ⬅ Added for category filtering (if required)

  return (
    <FormContext.Provider value={{ data, setData, prior, setPrior, category, setCategory }}>
      {children}
    </FormContext.Provider>
  );
}
