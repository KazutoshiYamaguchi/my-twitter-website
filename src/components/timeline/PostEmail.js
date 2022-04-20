import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";

import "./Post.css";

export const PostEmail = forwardRef((props, ref) => {
  const { displayName, avatar, image = null, id } = props;
  return (
    <div className="post" ref={ref} id={id}>
      <div className="post__avator">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @Kazutoshi Yamaguchi
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              email:
              <a href={`mailto: umaibou300pon@icloud.com`}>
                umaibou300pon@icloud.com
              </a>
            </p>
          </div>
        </div>
        {image ? <img src={image} alt="profile" /> : null}
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});
