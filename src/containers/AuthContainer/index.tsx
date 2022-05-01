import React, { useEffect } from 'react';
import AuthPage from '../../components/pages/AuthPage';

const AuthContainer = () => {
  useEffect(() => console.log('Auth - Moutn'), []);
  return <AuthPage />;
};

export default AuthContainer;
