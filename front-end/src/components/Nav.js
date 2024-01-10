import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
            alt='logo'
            className='logo'
             src='data:image/jpeg;base64,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' />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update"> Update Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li> <Link onClick={logout} to="/signup">Logout ({ JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav