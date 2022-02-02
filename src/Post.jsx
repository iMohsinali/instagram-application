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

      <img
        className="post_img"
        src="https://avatars.githubusercontent.com/u/87361294?s=400&u=05e7fd06becf37bdcc0ad0b4f3fa88bdf1faa5a9&v=4"
        alt=""
        srcset=""
      />
      <h4 className="post_text">
        <strong>{username} </strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
