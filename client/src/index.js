import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/Theme';
import UserLoginStore from './contexts/UserLoginStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <UserLoginStore>
       <App />
    </UserLoginStore>
  </ChakraProvider>
);
