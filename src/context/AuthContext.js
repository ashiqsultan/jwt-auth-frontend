import React, { useState, createContext } from 'react';

const axios = require('axios')

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    let [authStates, setAuthStates] = useState({
        token: localStorage.getItem('token'),
        error: null,
        userDetails: 'empty token'
    })

    let [isloading, setIsLoading] = useState(false)
    let [isAuthenticated, setIsAuthenticated] = useState(false)

    const loginRequest = async (formData) => {
        setIsLoading(true)
        try {
            localStorage.clear()
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: formData
            });
            //Setting Auth states here
            await setIsAuthenticated(true)
            setAuthStates = {
                ...authStates,
                token: localStorage.setItem('token', response.data.token),
                error: null,
                userDetails: response.data.token
            }
            console.log(`token set on local storage \n ${authStates.token}`)
        } catch (error) {
            console.log(error)
            setAuthStates = {
                ...authStates,
                error: error
            }
        } finally {
            setIsLoading(false)
        };
    }
    return (
        <AuthContext.Provider value={{ authStates, loginRequest, isloading, isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
