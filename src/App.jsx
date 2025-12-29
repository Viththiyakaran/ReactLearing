// import React from "react";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex flex-col justify-center items-center text-center px-4">
//       {/* Header */}
//       <h1 className="text-5xl font-bold text-blue-800 mb-4">
//         Learn React in Wales! ⚛️
//       </h1>
//       <p className="text-lg text-blue-700 mb-6 max-w-2xl">
//         I’m excited to teach React to the local tech community in Wales, UK.
//         Gain hands-on experience with JSX, Components, Hooks, Routing, and
//         Tailwind CSS!
//       </p>

//       {/* Call-to-Action Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-8">
//         <a
//           href="https://github.com/Viththiyakaran/reactlearing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
//         >
//           View GitHub
//         </a>
//         <a
//           href="https://reactlearning-puce.vercel.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
//         >
//           Live Demo
//         </a>
//       </div>

//       {/* Motivation Section */}
//       <p className="text-md text-blue-800 max-w-xl">
//         💡 Start today, practice consistently, and turn your ideas into real
//         React applications. Join our community and grow your skills!
//       </p>

//       {/* Footer */}
//       <footer className="mt-12 text-blue-700">
//         Made with ❤️ for the tech community in Wales
//       </footer>
//     </div>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./practice/LoadingLandpage.jsx";
import TodoApp from "./practice/TodoAppPractice.jsx";
import WorkWithAPI from "./practice/WorkWithApi.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/WorkWithAPI" element={<WorkWithAPI />} />
      </Routes>
    </>
  );
}

export default App;
