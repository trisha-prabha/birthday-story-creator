import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // ✅ Hardcoded credentials
    const validUsers = [
        { email: "aishwarya24ammu@gmail.com", password: "birthday123" },
        { email: "trisha13p@gmail.com", password: "birthday123" },
    ];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const user = validUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            // login success
            localStorage.setItem("loggedIn", "true"); // page protection
            navigate("/"); // redirect to main page
        } else {
            setError("Invalid email or password!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-pink-500 text-white rounded py-2 hover:bg-pink-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;