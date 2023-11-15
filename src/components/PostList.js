import React from 'react';
import Post from './Post';

const PostList = ({ posts, onComment, onShare, onSave }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} onComment={onComment} onShare={onShare} onSave={onSave} />
      ))}
    </div>
  );
};

export default PostList;
