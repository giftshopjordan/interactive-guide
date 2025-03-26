import React from "react";


// Layout, Home Page, NoPage
export const Layout = React.lazy(() => import("../pages/Layout"));
export const Home = React.lazy(() => import("../pages/Home"));
export const NoPage = React.lazy(() => import("../pages/NoPage"));

// Cheques
export const PrintCheques = React.lazy(() => import("../pages/cheques/PrintCheques"));

// Clover
export const SalesTapes = React.lazy(() => import("../pages/clover/SalesTapes"));

// QuickBooks
export const EnterBills = React.lazy(() => import("../pages/quickbooks/EnterBills"));
export const NewItems = React.lazy(() => import("../pages/quickbooks/NewItems"));
