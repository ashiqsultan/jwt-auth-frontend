import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import About from '../About/About';
import Navbar from '../Navbar/Navbar'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AuthContextProvider from '../../context/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/protectedroute' component={ProtectedRoute} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;