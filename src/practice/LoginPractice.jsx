import { useState } from "react";

const LoginPractice = () => {
  const [isLogin, setIsLogin] = useState(false);
  const username = "Viththiyakaran";

  function Login() {
    if (!isLogin) {
      setIsLogin(true);
      alert("You are logged in " + username);
    } else {
      setIsLogin(false);
      alert("Please login again");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Conditional message */}
      <h1 className="text-2xl font-bold mb-4">
        {isLogin ? `Welcome ${username}` : "Please try"}
      </h1>

      {/* Button */}
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={Login}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginPractice;
