import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout, Home, SalesTapes, PrintCheques, EnterBills, NewItems, NoPage } from './utils/pageLoader';
import './style.css';

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="clover/SalesTapes" element={<SalesTapes />} />
            <Route path="cheques/printCheques" element={<PrintCheques />} />
            <Route path="quickbooks/EnterBills" element={<EnterBills />} />
            <Route path="quickbooks/NewItems" element={<NewItems />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
