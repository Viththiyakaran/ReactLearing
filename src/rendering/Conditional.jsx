import { useState, useEffect } from "react";

const ReactLogicNotes = () => {
  // State variables for examples
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("admin"); // "admin" | "user" | "guest"
  const [username, setUsername] = useState(""); // empty to test OR
  const [status, setStatus] = useState("success"); // "loading" | "success" | "error"

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Object mapping for roles
  const roleComponents = {
    admin: <p className="text-red-500">Admin Dashboard</p>,
    user: <p className="text-green-500">User Dashboard</p>,
    guest: <p className="text-gray-500">Guest Page</p>,
  };

  // Early return example
  if (isLoading) return <p className="text-yellow-500 font-bold">Loading...</p>;
  if (status === "error")
    return <p className="text-red-700 font-bold">Error occurred!</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans space-y-4">
      <h1 className="text-2xl font-bold">
        React Logical & Conditional Rendering Notes
      </h1>

      {/* 1️⃣ Boolean AND && */}
      {isLogin && <p className="text-blue-600">Welcome Back!</p>}

      {/* 2️⃣ Ternary ? : */}
      <p className="text-purple-600">
        {isLogin ? "You are logged in" : "Please log in"}
      </p>

      {/* 3️⃣ OR operator || */}
      <p className="text-gray-700">Username: {username || "Anonymous"}</p>

      {/* 4️⃣ Nullish coalescing ?? */}
      <p className="text-gray-700">Email: {null ?? "No email provided"}</p>

      {/* 5️⃣ Conditional class */}
      <p className={role === "admin" ? "text-red-500" : "text-green-500"}>
        Role: {role}
      </p>

      {/* 6️⃣ Object mapping for multiple conditions */}
      {roleComponents[role]}

      {/* 7️⃣ If statement outside JSX */}
      {(() => {
        if (status === "loading") return <p>Loading data...</p>;
        if (status === "success") return <p>Data loaded successfully!</p>;
      })()}

      {/* 8️⃣ Buttons to toggle state */}
      <div className="space-x-2 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsLogin(!isLogin)}
        >
          Toggle Login
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded"
          onClick={() =>
            setRole(
              role === "admin" ? "user" : role === "user" ? "guest" : "admin"
            )
          }
        >
          Change Role
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() =>
            setStatus(status === "success" ? "loading" : "success")
          }
        >
          Toggle Status
        </button>
      </div>
    </div>
  );
};

export default ReactLogicNotes;
