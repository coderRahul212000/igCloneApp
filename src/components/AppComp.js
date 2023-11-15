import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, addComment } from '../store';
import PostList from './PostList';
import CommentList from './CommentList';
import User from './User';

const AppComp = () => {
  const [commentText, setCommentText] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      image: 'url_to_image',
      caption: 'Caption goes here',
      comments: [],
    };
    dispatch(addPost(newPost));
  };

  const handleAddComment = (postId) => {
    dispatch(addComment(postId, commentText));
    setCommentText('');
  };

  const handleSignOut = () => {
    setUsername('');
  };

  return (
    <div className="app">
      {username && <User username={username} onSignOut={handleSignOut} />}
      <PostList posts={posts} onComment={handleAddComment} onShare={() => {}} onSave={() => {}} />
      <button onClick={handleAddPost}>Add Post</button>
      <CommentList comments={posts.length > 0 ? posts[0].comments : []} />
    </div>
  );
};

export default AppComp;
