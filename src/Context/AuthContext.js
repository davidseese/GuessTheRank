import { createContext, useContext, useEffect, useState } from "react";
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged} from "@firebase/auth"

import app from "../Firebase";
const UserContext = createContext();

const auth = getAuth(app);

export const AuthContextProvider= ({children}) =>{
    const [user,setUser] = useState({})
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
        })
        return() =>{
            unsubscribe();
        }
    })
    return (
        <UserContext.Provider value={{loginUser,user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(UserContext)
}