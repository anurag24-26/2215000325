import React, { useEffect, useState } from "react";
import { getUsers, getUserPosts, getPostComments } from "../services/api";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const users = await getUsers();
      const userStats = [];

      for (let id in users) {
        const posts = await getUserPosts(id);
        let totalComments = 0;

        for (let post of posts) {
          const comments = await getPostComments(post.id);
          totalComments += comments.length;
        }

        userStats.push({ name: users[id], comments: totalComments });
      }

      // Sort and get top 5
      const sorted = userStats
        .sort((a, b) => b.comments - a.comments)
        .slice(0, 5);
      setTopUsers(sorted);
    };

    loadData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Top 5 Users</h2>
      <ul>
        {topUsers.map((user, index) => (
          <li key={index} className="mb-2">
            {user.name} - {user.comments} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
