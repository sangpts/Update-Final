import { RightCircleOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import React, { useState } from "react";

function Comment({ sendComment, comment, setComment }) {
  return (
    <Input
      value={comment}
      defaultValue={""}
      placeholder="Comment..."
      onChange={(e) => {
        setComment(e.target.value);
      }}
      addonAfter={
        <Tooltip placement="topLeft">
          <RightCircleOutlined
            onClick={(e) => {
              sendComment();
            }}
          />
        </Tooltip>
      }
    />
  );
}

export default Comment;
