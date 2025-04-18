import React, { useEffect, useState } from "react";
import { getUsers, getUserPosts, getPostComments } from "../services/api";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      const postMap = [];

      for (let id in users) {
        const posts = await getUserPosts(id);
        for (let post of posts) {
          const comments = await getPostComments(post.id);
          postMap.push({
            ...post,
            author: users[post.userid],
            commentCount: comments.length,
          });
        }
      }

      const max = Math.max(...postMap.map((p) => p.commentCount));
      const maxPosts = postMap.filter((p) => p.commentCount === max);
      setTrending(maxPosts);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
      {trending.map((post, i) => (
        <PostCard
          key={i}
          content={post.content}
          author={post.author}
          image={`https://source.unsplash.com/random/200x200?sig=${i}`} // Random image
          commentCount={post.commentCount}
        />
      ))}
    </div>
  );
};

export default TrendingPosts;
