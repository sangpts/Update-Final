import React, { useEffect, useState } from "react";
import Icon, { LikeFilled } from "@ant-design/icons";
import Comment from "./comment";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../../contexts/constants";
import { notification } from "antd";

const LikeIcon = (style, addStyle) => {
  return <LikeFilled style={{ ...style, ...addStyle }} />;
};

function PostLikeAndComment(props) {
  const { isLike, musiclikeCount, musicId, userId, postId, getListComment } = props;
  const [likeCount, setlikeCount] = useState(musiclikeCount);
  useEffect(() => {
    setlikeCount(musiclikeCount);
    setAddStyle(() => {
      if (isLike) {
        return { color: "blue" };
      }

      return { color: "#9d99c3" };
    });
  }, [musiclikeCount]);
  const [addStyle, setAddStyle] = useState(() => {
    if (isLike) {
      return { color: "blue" };
    }

    return { color: "#9d99c3" };
  });
  console.log("like_21", musiclikeCount);

  const [comment, setComment] = useState("");
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
  const clickLike = async () => {
    try {
      const response = await axios.patch(
        // `${apiUrl}/music/like/${musicId}`,//API get like on music
        `${apiUrl}/posts/like-post/${postId}`, // Api get like on post
        {},
        { headers: { Authorization: "Bearer " + token } }
      );
      // const listLike = response.data.data.musicLike;//like theo music
      const listLike = response.data.data.post.like; //like theo post
      console.log("listLike_", listLike);
      setlikeCount(listLike.length);
      if (listLike.includes(userId)) {
        return setAddStyle({ color: "blue" });
      }
      setAddStyle({ color: "#9d99c3" });
    } catch (error) {
      console.log(error);
    }
  };

  const sendComment = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/comments/post/${postId}`,
        { cmtContent: comment },
        { headers: { Authorization: "Bearer " + token } }
      );
      // Get lại list comment
      await getListComment();
      // Clear dữ liệu ô input
      setComment("");
      notification.success({
        message: response.data.message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (comment != "") {
      sendComment();
    }
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
          <Icon
            component={(style) => LikeIcon(style, addStyle)}
            onClick={clickLike}
            style={{ marginRight: "12px" }}
          />
          {likeCount}
        </div>
        <Comment comment={comment} sendComment={sendComment} setComment={setComment} />
      </div>
    </div>
  );
}

export default PostLikeAndComment;
