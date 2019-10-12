import React, { Fragment, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = (props) => {

    //const AuthContext = useContext(AuthContext);
    const { loginRequest, isloading } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        loginRequest(formData)
    }

    return (
        <Fragment>
            <h2>{(isloading) ? 'isLoadingisTrue' : 'isLoadingisFalse'}</h2>
            <div className="container">
                <div className="row">
                    <div className="span12">
                        <form className="form-horizontal" onSubmit={onSubmit}>
                            <fieldset>
                                <div id="legend">
                                    <legend className="">Login</legend>
                                </div>
                                <div className="control-group">
                                    <label className="control-label" htmlFor="name">email</label>
                                    <div className="controls">
                                        <input type="text" id="email" name="email" placeholder="email" className="input-xlarge" onChange={onChange}></input>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label" htmlFor="password">Password</label>
                                    <div className="controls">
                                        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" onChange={onChange}></input>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="controls">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
export default Login;