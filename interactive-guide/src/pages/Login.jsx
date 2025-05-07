import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password === "G!ft$h0p24") {
            localStorage.setItem("authenticated", "true");
            navigate("/");
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <section>
            <h1>Login</h1>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </section>
    );
};

export default Login;
