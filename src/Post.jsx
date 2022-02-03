import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
const Post = ({ img, username, caption }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" src={img} />
        <h3>{username}</h3>
      </div>

      <img className="post_img" src={img} alt="" srcset="" />
      <h4 className="post_text">
        <strong>{username} </strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
