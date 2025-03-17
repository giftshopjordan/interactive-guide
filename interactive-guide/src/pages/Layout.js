import { Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cheques">Cheques</Link>
                    </li>
                    <li>
                        <Link to="/clover">Clover</Link>
                    </li>
                    <li>
                        <Link to="/quickbooks">Quickbooks</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;