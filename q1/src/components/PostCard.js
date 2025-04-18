import React from "react";

const PostCard = ({ content, author, image, commentCount }) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <div className="flex items-center mb-2">
        <img src={image} alt="user" className="w-10 h-10 rounded-full mr-2" />
        <h3 className="font-semibold">{author}</h3>
      </div>
      <p className="mb-2">{content}</p>
      <p className="text-sm text-gray-500">{commentCount} comments</p>
    </div>
  );
};

export default PostCard;
