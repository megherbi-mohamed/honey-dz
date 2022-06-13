import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';

const Menu = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account');
        setUser(null);
    };

    useEffect(async () => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        // await dispatch(getUserAddresses());
    }, [location]);  

    return (
        <div className="md:px-4 xl:px-16 w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
            <Link to="/account" className="mb-[12px]">Dashboard</Link>
            <Link to="/account/addresses" className="mb-[12px] font-bold">Addresses</Link>
            <button onClick={logout} className='pl-0 text-left'>Log Out</button>
        </div>
    )
}

export default Menu