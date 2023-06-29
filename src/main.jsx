import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Home from './pages/Home';
import Computers from './pages/computadoras/Computers';
import Laptops from './pages/laptops/Laptops';
import Keys from './pages/keys/Keys';
import Office from './pages/office/Office';
import './index.css';

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tecnologia" element={<Computers />} />
          <Route path="portatiles" element={<Laptops />} />
          <Route path="keys" element={<Keys />} />
          <Route path="office" element={<Office />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
