import React from 'react';

const Post = ({ post, onComment, onShare, onSave }) => {
  return (
    <div className="post">
      <img src={post.image} alt={post.caption} />
      <p>{post.caption}</p>
      <button onClick={() => onComment(post.id)}>Comment</button>
      <button onClick={() => onShare(post.id)}>Share</button>
      <button onClick={() => onSave(post.id)}>Save</button>
    </div>
  );
};

export default Post;
