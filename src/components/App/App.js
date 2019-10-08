import React from 'react';
import Login from '../Login/Login'
import AuthContextProvider from '../../context/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </div>
  );
}

export default App;