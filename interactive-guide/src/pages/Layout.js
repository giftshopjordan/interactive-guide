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
                        onMouseEnter={() => setShowChequesDropdown(true)}
                        onMouseLeave={() => setShowChequesDropdown(false)}
                    >
                        Cheques
                        {showChequesDropdown && (
                            <ul>
                                <li><Link to="/cheques/printCheques">Printing Cheques</Link></li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => setShowCloverDropdown(true)}
                        onMouseLeave={() => setShowCloverDropdown(false)}
                    >
                        Clover
                        {showCloverDropdown && (
                            <ul>
                                <li><Link to="/clover">Clover</Link></li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => setShowQuickbooksDropdown(true)}
                        onMouseLeave={() => setShowQuickbooksDropdown(false)}
                    >
                        Quickbooks
                        {showQuickbooksDropdown && (
                            <ul>
                                <li><Link to="/quickbooks">Quickbooks</Link></li>
                            </ul>
                        )}
                        <Link to="/quickbooks">Quickbooks</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;