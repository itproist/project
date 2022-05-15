import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetUserAction } from '../../store/users/actions';
import getUsers from '../../store/users/selectors';

const MainContainer = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(GetUserAction());
  }, []);

  const userData = useSelector(getUsers);
  return <MainPage userData={userData} />;
};

export default MainContainer;
