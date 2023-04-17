import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      
      setUser(currentUser)
      
    });
    return () => {
      return unsubscribe()
    }

  }, []);



    const registerUser = (email, passord) => {
        return createUserWithEmailAndPassword(auth, email, passord)
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        registerUser,
        signinUser,
        logOut,
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;