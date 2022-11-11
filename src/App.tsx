import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import 'styles/scss/index.scss';
import { BrowserRouter } from 'react-router-dom';
import RouterList from 'router';

const App = () => {
  return (
    <BrowserRouter>
      <RouterList />
    </BrowserRouter>
  );
};

export default App;
