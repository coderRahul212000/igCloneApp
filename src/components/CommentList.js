import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </div>
  );
};

export default CommentList;
