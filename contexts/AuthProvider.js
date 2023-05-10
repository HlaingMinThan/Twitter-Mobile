import React, { createContext, useState } from 'react'
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

                setUser('hlaingminthan')
            },
            logout :() => {
                setUser(null);
            }
            }}>
        {children}
        </AuthContext.Provider>
    )
}

