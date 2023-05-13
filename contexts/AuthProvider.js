import React, { createContext, useState } from 'react'

import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let [user,setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            login : (email,password) => {
                //communicate with backend
                //store token in secureStore
                SecureStore.setItemAsync("user", "HMT");
                setUser('hlaingminthan')
            },
            logout :() => {
                SecureStore.deleteItemAsync("user");
                setUser(null);
            }
            }}>
        {children}
        </AuthContext.Provider>
    )
}

