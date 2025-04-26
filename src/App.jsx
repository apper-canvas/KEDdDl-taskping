import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if the user is logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);

    // Set theme based on user preference or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme === "dark" ? "dark bg-gray-900" : "bg-gray-50";
    // Save theme preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  const handleClick = () => {
    // Fixed reference to undefined variable "abcd"
    console.log("Button clicked");
    // If there was intended functionality here, implement it properly
    // For example, navigate to a specific route or toggle a state
  };

  return (
    <Router>
      <div className={`min-h-screen ${theme === "dark" ? "dark:text-white" : "text-gray-900"}`}>
        <nav className={`p-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow`}>
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Task Manager</Link>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className={`${theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}>Dashboard</Link>
                  <button 
                    onClick={handleLogout}
                    className={`px-4 py-2 rounded ${theme === "dark" ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"} text-white`}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleLogin}
                  className={`px-4 py-2 rounded ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </nav>

        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/dashboard/*" 
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} 
            />
          </Routes>
        </main>

        <footer className={`mt-auto py-6 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}>
          <div className="container mx-auto">
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;