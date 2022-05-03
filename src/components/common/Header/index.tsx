import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <h1>Header</h1>
      <ul className={style.header_main}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.header_active : style.header_not_active)}
            to="/">
            MAIN
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.header_active : style.header_not_active)}
            to="/auth">
            AUTH
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.header_active : style.header_not_active)}
            to="/reg">
            REG
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.header_active : style.header_not_active)}
            to="/users">
            USERS
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
