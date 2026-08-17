import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
    const { axios, setToken } = useAppContext();

    const [isLoginState, setIsLoginState] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/user/" + (isLoginState ? "login" : "register"), { name, email, password });
            if (data.success) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                axios.defaults.headers.common["Authorization"] = data.token;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full py-6 text-center">
                        <h1 className="text-3xl font-semibold">
                            <span className="text-primary">Sign</span> {isLoginState ? "In" : "Up"}
                        </h1>
                        <p className="font-light text-sm pt-3 max-w-64 mx-auto">{isLoginState ? "Enter your credentials to access the author panel" : "Create a new account to add blogs and share your thoughts"}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full sm:max-w-md text-gray-600">
                        {!isLoginState && (
                            <div className="flex flex-col group">
                                <label> Name </label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" required placeholder="your name" className="border-b-2 border-gray-300 p-2 outline-none mb-6 group-focus-within:border-primary transition-all" />
                            </div>
                        )}
                        <div className="flex flex-col group">
                            <label> Email </label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="user@example.com" className="border-b-2 border-gray-300 p-2 outline-none mb-6 group-focus-within:border-primary transition-all" />
                        </div>
                        <div className="flex flex-col group">
                            <label> Password </label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder="password" className="border-b-2 border-gray-300 p-2 outline-none mb-6 group-focus-within:border-primary transition-all" />
                        </div>
                        <button type="submit" className="w-full py-3 font-medium bg-primary text-white rounded-md cursor-pointer hover:bg-primary/90 transition-all">
                            {isLoginState ? "Login" : "Sign Up"}
                        </button>
                        <p className="mt-4 text-center text-sm py-2">
                            {isLoginState ? "Don't have an account?" : "Already have an account?"}
                            <span onClick={() => setIsLoginState(!isLoginState)} className="text-primary cursor-pointer hover:underline ml-2">
                                {isLoginState ? "Sign Up" : "Login"}
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
