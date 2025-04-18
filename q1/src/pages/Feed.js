import React, { useEffect, useState } from "react";
import { getUsers, getUserPosts } from "../services/api";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const users = await getUsers();
      const postsArr = [];

      for (let id in users) {
        const posts = await getUserPosts(id);
        posts.forEach((post) => {
          postsArr.push({
            ...post,
            author: users[post.userid],
          });
        });
      }

      // Newest first
      const sorted = postsArr.sort((a, b) => b.id - a.id);
      setFeed(sorted);
    };

    loadFeed();

    const interval = setInterval(loadFeed, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Live Feed</h2>
      {feed.map((post, i) => (
        <PostCard
          key={i}
          content={post.content}
          author={post.author}
          image={`https://source.unsplash.com/random/200x200?sig=${i + 100}`}
          commentCount={null} // Optional for feed
        />
      ))}
    </div>
  );
};

export default Feed;
