import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Welcome to the Website.</h1>
            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/friends'}>Friends</CustomLink>
                
                {/* <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/friends'}>Friends</Link> */}
            </nav>
        </div>
    );
};

export default Header;