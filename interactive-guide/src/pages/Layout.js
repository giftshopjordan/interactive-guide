import { useState } from "react";
import { Outlet, Link} from "react-router-dom";

const Layout = () => {

    const [showChequesDropdown, setShowChequesDropdown] = useState(false);
    const [showCloverDropdown, setShowCloverDropdown] = useState(false);
    const [showQuickbooksDropdown, setShowQuickbooksDropdown] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => setShowChequesDropdown(true)}
                        onMouseLeave={() => setShowChequesDropdown(false)}
                    >
                        Cheques
                        {showChequesDropdown && (
                            <ul className="dropdown-content">
                                <li><Link to="/cheques/printCheques">Printing Cheques</Link></li>
                            </ul>
                        )}
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => setShowCloverDropdown(true)}
                        onMouseLeave={() => setShowCloverDropdown(false)}
                    >
                        Clover
                        {showCloverDropdown && (
                            <ul className="dropdown-content">
                                <li><Link to="/clover/SalesTapes">Sales Tapes</Link></li>
                            </ul>
                        )}
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => setShowQuickbooksDropdown(true)}
                        onMouseLeave={() => setShowQuickbooksDropdown(false)}
                    >
                        QuickBooks
                        {showQuickbooksDropdown && (
                            <ul className="dropdown-content">
                                <li><Link to="/quickbooks/EnterBills">Enter Bills</Link></li>
                                <li><Link to="/quickbooks/NewItems">Add New Items</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;