import React from 'react';
import './Logo.scss';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { APP_NAME } from 'constants/app';

const Logo = (props) => {

  return (
    <NavLink to="/" className={ 'logo ' + (props.collapsed && 'logo--collapsed')}>
      <img className="logo__image" alt="Logo" src={logo}></img>
      <p className="logo__text">{APP_NAME}</p>
    </NavLink>
  );

}

export default Logo;