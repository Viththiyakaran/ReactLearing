import React, { useEffect, useState } from "react";

const WorkWithApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const usersPerPage = 10;

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=100");
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

  // Filtered users based on search
  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">User Directory</h1>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search by name or country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Reload Users
          </button>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentUsers.map((user, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={user.picture.medium}
                  alt="avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-600"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-lg">
                    {user.name.first} {user.name.last}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.location.country}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm truncate">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-6 flex justify-center flex-wrap gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Selected User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
              onClick={() => setSelectedUser(null)}
            >
              ×
            </button>
            <div className="flex flex-col items-center gap-4">
              <img
                src={selectedUser.picture.large}
                alt="avatar"
                className="w-24 h-24 rounded-full border-2 border-blue-600"
              />
              <h2 className="text-xl font-bold">
                {selectedUser.name.first} {selectedUser.name.last}
              </h2>
              <p className="text-gray-600">{selectedUser.location.country}</p>
              <p className="text-gray-600">{selectedUser.email}</p>
              <p className="text-gray-600">
                Phone: {selectedUser.phone} | Cell: {selectedUser.cell}
              </p>
              <p className="text-gray-600 text-center">
                {selectedUser.location.street.number}{" "}
                {selectedUser.location.street.name},{" "}
                {selectedUser.location.city}, {selectedUser.location.state},{" "}
                {selectedUser.location.postcode}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkWithApi;
