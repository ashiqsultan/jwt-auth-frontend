import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/protectedroute'>Protected router</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-danger'>
            <h1>JWT Auth Demo</h1>
            <ul>{guestLinks}</ul>
        </div>
    );
};

export default Navbar;