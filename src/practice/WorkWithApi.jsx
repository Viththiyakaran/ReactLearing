import React, { useEffect, useState } from "react";

const WorkWithApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      alert("Error fetching users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Directory</h1>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Reload Users
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.picture.medium}
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {user.name.first} {user.name.last}
                    </p>
                    <p className="text-sm text-gray-500">
                      {user.location.country}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600">{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkWithApi;
