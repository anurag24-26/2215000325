import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4">
          <Link className="mr-4 text-blue-600" to="/">
            Feed
          </Link>
          <Link className="mr-4 text-blue-600" to="/top-users">
            Top Users
          </Link>
          <Link className="text-blue-600" to="/trending">
            Trending Posts
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
