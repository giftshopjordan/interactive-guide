import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Clover from "./pages/Clover";
import Cheques from "./pages/Cheques"
import Quickbooks from "./pages/Quickbooks";
import NoPage from "./pages/NoPage";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clover" element={<Clover />} />
          <Route path="cheques" element={<Cheques />} />
          <Route path="quickbooks" element={<Quickbooks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
