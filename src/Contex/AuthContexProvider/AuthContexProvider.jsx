import { createContext, useContext, useState } from "react";

const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => useContext(AuthContex);

// eslint-disable-next-line react/prop-types
const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdur rahim" });

  const authInfo = { user };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthContexProvider;
