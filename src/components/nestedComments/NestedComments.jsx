import React, { useState } from "react";
import "./NestedComments.css";

const Comment = ({ comment, addReply }) => {
  const [replyInput, setReplyInput] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = () => {
    if (replyInput.trim()) {
      addReply(comment.id, replyInput.trim());
      setReplyInput("");
      setIsReplying(false);
    }
  };

  return (
    <div className="comment">
      <div className="comment-content">
        <p><strong>{comment.user}</strong>: {comment.text}</p>
        <button
          className="reply-button"
          onClick={() => setIsReplying(!isReplying)}
        >
          {isReplying ? "Cancel" : "Reply"}
        </button>
      </div>
      {isReplying && (
        <div className="reply-input">
          <input
            type="text"
            placeholder="Write a reply..."
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button onClick={handleReply}>Submit</button>
        </div>
      )}
      {comment.replies.length > 0 && (
        <div className="nested-comments">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              addReply={addReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedComments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          user: "User",
          text: newComment.trim(),
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  const addReply = (id, replyText) => {
    const updateComments = (commentsList) =>
      commentsList.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                user: "User",
                text: replyText,
                replies: [],
              },
            ],
          };
        } else {
          return {
            ...comment,
            replies: updateComments(comment.replies),
          };
        }
      });

    setComments(updateComments(comments));
  };

  return (
    <div className="nested-comments-container">
      <h2>Comments</h2>
      <div className="new-comment">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Post</button>
      </div>
      <div className="comments-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default NestedComments;
