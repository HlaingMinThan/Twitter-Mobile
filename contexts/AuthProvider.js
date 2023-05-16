import React, { createContext, useState } from 'react'

import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let [user,setUser] = useState(null);
    let [error,setError] = useState(null);
    let authErrorHandler = (e) => {
         //hanlde validation here
         if(e.response?.status === 400) {
            if(e.response.data.errors.length) {
                let errors = e.response.data.errors;
                for(i in errors) {
                    let error = errors[i];
                    let errorObj = {};
                    errorObj[error.path] = error.msg;
                    setError(prev =>({...prev,...errorObj}));
                }
            }
        }
        if(e.response?.status === 401) {
            let errorObj = {};
            errorObj[e.response.data.type] = e.response.data.message;
            setError(prev =>({...prev,...errorObj}));
        }
    }
    return (
        <AuthContext.Provider value={{
            setError,
            error,
            user,
            setUser,
            login : (email,password) => {
                setError(null);
                axios.post('http://localhost:3000/login', {
                    email,
                    password
                }).then((res) => {
                    console.log('then',res)
                    //store token in secureStore
                    SecureStore.setItemAsync("user", JSON.stringify(res.data));
                    setUser(res.data)
                    console.log('hit here ?')
                }).catch(e => {
                   authErrorHandler(e)
                })
            },
            register : (username,email,password) => {
                setError(null);
                axios.post('http://localhost:3000/register', {
                    username,
                    email,
                    password
                }).then((res) => {
                    if (res.data) {
                         //store token in secureStore
                        SecureStore.setItemAsync("user", JSON.stringify(res.data));
                        setUser(res.data)
                    }
                }).catch(e => {
                    authErrorHandler(e)
                })
               
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

