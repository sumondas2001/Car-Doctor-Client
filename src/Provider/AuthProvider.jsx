import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confige";
import axios from "axios";
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

     };
     const logOut = () => {
          setLoading(true)
          return signOut(auth);
     }

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               const userEmail = currentUser?.email || user?.email;
               const loggedUser = { email: userEmail };
               setUser(currentUser);
               // console.log(currentUser);
               setLoading(false)

               // if user exists then issue a token 
               if (currentUser) {
                    axios.post('https://car-doctor-server-finle.vercel.app/jwt', loggedUser, { withCredentials: true })
                         .then(res => {
                              // console.log('token response', res.data)
                         })
               }
               else {
                    axios.post('https://car-doctor-server-finle.vercel.app/logOut', loggedUser, {
                         withCredentials: true
                    })
                         .then(res => {
                              // console.log(res.data)
                         })
               }
          })
     }, [user?.email])


     const authInfo = {
          user,
          loading,
          createUser,
          singInUser,
          logOut

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;