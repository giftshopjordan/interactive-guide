import { useEffect, useState } from "react";
import { Outlet, Link} from "react-router-dom";
import DropDownMenu from "../components/DropDownMenu";

const Layout = () => {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <DropDownMenu 
                        label="Cheques"
                        items={[
                            { to: "/cheques/printCheques", text: "Printing Cheques" }
                        ]}
                    />
                    
                    <DropDownMenu 
                        label="Clover"
                        items={[
                            { to: "/clover/SalesTapes", text: "Sales Tapes" }
                        ]}
                    />
                    
                    <DropDownMenu 
                        label="QuickBooks"
                        items={[
                            { to: "/quickbooks/EnterBills", text: "Enter Bills" },
                            { to: "/quickbooks/NewItems", text: "Add New Items" }
                        ]}
                    />
                    <li style={{ marginLeft: "auto" }}>
                        <label className="toggle-container">
                            <input 
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(prev => !prev)}
                            />
                            <span className="slider"></span>
                        </label>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;