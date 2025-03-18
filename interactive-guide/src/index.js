import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Clover from "./pages/Clover";
import PrintCheques from "./pages/cheques/PrintCheques";
import PayBills from "./quickbooks/PayBills";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clover" element={<Clover />} />
          <Route path="cheques/printCheques" element={<PrintCheques />} />
          <Route path="quickbooks/PayBills" element={<PayBills />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
