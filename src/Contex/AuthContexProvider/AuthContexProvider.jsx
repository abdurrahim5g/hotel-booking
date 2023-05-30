import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => useContext(AuthContex);

// eslint-disable-next-line react/prop-types
const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdur rahim" });
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const signUpWithPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   signin With google
  const signInWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return unSubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authInfo = {
    user,
    loading,
    signUpWithPass,
    signInWithPass,
    signInWithProvider,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthContexProvider;
