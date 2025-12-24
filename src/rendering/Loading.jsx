import React, { useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  function enableLoading() {
    setIsLoading(false);
  }

  return (
    <div className="p-6 text-center space-y-4">
      <h1 className="text-xl font-bold">isLoading Practice</h1>

      {isLoading ? <p>Loading.....</p> : <p> Content Ready</p>}

      {/* {isLoading ? (
        <p className="text-yellow-500">Loading...</p>
      ) : (
        <p className="text-green-600">Content Loaded ✅</p>
      )} */}

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={enableLoading}
      >
        Load Content
      </button>
    </div>
  );
};

export default Loading;
