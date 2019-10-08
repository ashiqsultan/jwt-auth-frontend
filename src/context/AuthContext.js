import React, { useState, createContext } from 'react';

const axios = require('axios')

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    let [authStates, setAuthStates] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        error: null,
        userDetails: 'empty token'
    })

    let [isloading, setIsLoading] = useState(false)

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
            setAuthStates = {
                ...authStates,
                token: localStorage.setItem('token', response.data.token),
                isAuthenticated: true,
                error: null,
                userDetails: response.data.token
            }
            console.log(`token set on local storage \n ${authStates.token}`)
        } catch (error) {
            console.log(error.response.data)
            setAuthStates = {
                ...authStates,
                error: error.response.data
            }
        } finally {
            setIsLoading(false)
        };
    }
    return (
        <AuthContext.Provider value={{ authStates, loginRequest, isloading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
