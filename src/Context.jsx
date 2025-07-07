import { createContext, useState, useContext } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const Context = ({ children }) => {
  const [user, setUser] = useState({ name: "Seyha" });
  function signOut() {
    setUser(null);
  }
  return (
    <GlobalContext.Provider value={{ user, signOut }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
