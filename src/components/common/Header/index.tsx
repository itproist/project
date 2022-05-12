import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { clearUserNameAction } from '../../../store/actions';
import GetUserName from '../../../store/selectors';
import Button from '../Button';
import style from './Header.module.scss';

const Header = () => {
  const name = useSelector(GetUserName);
  const dispatch = useDispatch();
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

      <div>
        {name ? (
          <>
            <p>{name}</p>
            <Button title="LOG_OUT" onClick={() => dispatch(clearUserNameAction())} />
          </>
        ) : (
          'not_auth'
        )}
      </div>
    </header>
  );
};

export default Header;
