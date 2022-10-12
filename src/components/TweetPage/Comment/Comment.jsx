import React from "react";
import { BsDot } from "react-icons/bs";
import "./Comment.scss";
import UserIcon from "../../UserIcon/UserIcon";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../slices/tweetsSlice";
function Comment(props) {
  const dispatch = useDispatch();
  const tweetId = props.tweetId;
  const commentId = props.commentId;
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return (
    <div className="comment">
      <div className="comment__user-icon">
        <UserIcon icon={props.icon} />
      </div>
      <div className="comment__inner">
        <div className="inner__header">
          <div className="inner__header-user">{props.author}</div>
          <div className="inner__header-dot">
            <BsDot />
          </div>
          <div className="inner__header-date">{props.date}</div>
          <div className="inner__header-time">
            {props.hours}:{props.minutes}
          </div>
          {userId === props.authorId ? (
          <div className="comment__footer">
            <AiOutlineDelete
              onClick={() => dispatch(deleteComment({ tweetId, commentId }))}
              className="comment__header_icon"
            />
          </div>
        ) : null}
        </div>
        <div className="inner__main">
          <div className="inner__main-text">{props.text}</div>
        </div>
        
      </div>
    </div>
  );
}

export default Comment;
