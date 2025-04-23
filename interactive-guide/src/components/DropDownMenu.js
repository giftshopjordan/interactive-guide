import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({ label, items }) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const containerRef = useRef(null);

    const handleToggle = () => setOpen(prev => !prev);
    const handleClose = () => setOpen(false);

    const handleKeyDown = (e) => {
        if (!open) return;

        const links = menuRef.current.querySelectorAll("a");
        const currentIndex = Array.from(links).indexOf(document.activeElement);

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                links[(currentIndex + 1) % links.length].focus();
                break;
            case "ArrowUp":
                e.preventDefault();
                links[(currentIndex - 1 + links.length) % links.length].focus();
                break;
            case "Escape":
                e.preventDefault();
                handleClose();
                buttonRef.current.focus();
                break;
            default:
                break;
        }
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                open &&
                containerRef.current &&
                !containerRef.current.contains(e.target)
            ) {
                handleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <li className="dropdown" ref={containerRef}>
            <button
                type="button"
                ref={buttonRef}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                aria-haspopup="menu"
                aria-expanded={open}
                className="nav-button"
            >
                {label}
            </button>

            <ul
                className={`dropdown-content ${open ? "open" : ""}`}
                ref={menuRef}
                role="menu"
            >
                {items.map(({ to, text }, idx) => (
                    <li key={idx} role="none">
                        <Link to={to} role="menuitem" tabIndex={open ? 0 : -1}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default DropDownMenu;