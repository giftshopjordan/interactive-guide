import React from "react";


// Layout, Home Page, NoPage
export const Layout = React.lazy(() => import("../pages/Layout.jsx"));
export const Home = React.lazy(() => import("../pages/Home.jsx"));
export const NoPage = React.lazy(() => import("../pages/NoPage.jsx"));

// Cheques
export const PrintCheques = React.lazy(() => import("../pages/cheques/PrintCheques.jsx"));

// Clover
export const SalesTapes = React.lazy(() => import("../pages/clover/SalesTapes.jsx"));

// QuickBooks
export const EnterBills = React.lazy(() => import("../pages/quickbooks/EnterBills.jsx"));
export const NewItems = React.lazy(() => import("../pages/quickbooks/NewItems.jsx"));
