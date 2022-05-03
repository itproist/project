import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import AuthContainer from './containers/AuthContainer';
import MainContainer from './containers/MainContainer';
import OneUserContainer from './containers/OneUserContainer';
import RegContainer from './containers/RegContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<h1>main page</h1>} />
      <Route path="users" element={<MainContainer />} />
      <Route path="users/:name" element={<OneUserContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="reg" element={<RegContainer />} />
      <Route path="*" element={<h1>not found</h1>} />
    </Route>
  </Routes>
);

export default App;
