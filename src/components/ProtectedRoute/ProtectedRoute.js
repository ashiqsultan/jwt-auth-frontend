import React, { useEffect, useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const axios = require('axios');


const ProtectedRoute = () => {

    const { isAuthenticated, authStates } = useContext(AuthContext)

    const [userDetail, setUserDetail] = useState("")

    // let [token, setToken] = useState("")

    useEffect(() => {
        checkAuth()
    },[])

    const checkAuth = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:5000/api/protectedroute',
                headers: {
                    'our-app-token': localStorage.token
                }
            });
            
            setUserDetail(response.data)
            console.log(`${userDetail}`)
        } catch (error) {
            console.log(error)
            
        } finally {
            console.log(`finally `)
            
        };
        console.log(isAuthenticated)
        console.log(authStates.token)
    }

    return (
        <Route>
            {(localStorage.token) ? (<h2>Hurray you are accessing protected route <br/>
            {userDetail.name}<br/>
            {userDetail.email}<br/> 
            {userDetail._id}<br/></h2>) : (<Redirect to='/login' />)}
        </Route>
    );
}

export default ProtectedRoute;