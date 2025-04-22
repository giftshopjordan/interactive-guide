import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({ label, items }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(prev => !prev);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <li
            className="dropdown"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            <button
                type="button"
                onClick={handleToggle}
                onFocus={handleOpen}
                onBlur={handleClose}
                aria-haspopup="true"
                aria-expanded={open}
                className="nav-button"
            >
                {label}
            </button>

            {open && (
                <ul className="dropdown-content" role="menu">
                    {items.map(({ to, text }, idx) => (
                        <li key={idx}>
                            <Link to={to} role="menuitem">{text}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default DropDownMenu;