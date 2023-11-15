// src/store.js
import { createStore } from 'redux';

// Define actions
const ADD_POST = 'ADD_POST';
const ADD_COMMENT = 'ADD_COMMENT';

// Action creators
export const addPost = (post) => ({ type: ADD_POST, payload: post });
export const addComment = (postId, comment) => ({ type: ADD_COMMENT, payload: { postId, comment } });

// Reducer
const reducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case ADD_COMMENT:
      const { postId, comment } = action.payload;
      const updatedPosts = state.posts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      );
      return { ...state, posts: updatedPosts };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
