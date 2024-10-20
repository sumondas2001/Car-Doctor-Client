import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.confige";
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     };

     const singInUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);

     }

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               console.log(currentUser);
               setLoading(false)
          })
     }, [])


     const authInfo = {
          user,
          loading,
          createUser,
          singInUser

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;