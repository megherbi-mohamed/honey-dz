import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actionType from '../../constants/actionTypes';

const Menu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account');
    };

    return (
        <div className="md:px-4 xl:px-16 w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
            <Link to="/account" className="mb-[12px]">Dashboard</Link>
            <Link to="/account/addresses" className="mb-[12px] font-bold">Addresses</Link>
            <button onClick={logout} className='pl-0 text-left'>Log Out</button>
        </div>
    )
}

export default Menu