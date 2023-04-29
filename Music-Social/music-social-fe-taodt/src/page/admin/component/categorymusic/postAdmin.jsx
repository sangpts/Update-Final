import React, { useContext } from "react";
import { apiUpload, apiUploadImgMp3 } from "../../../../contexts/constants";
import { PostContext } from "../../../../contexts/postContext";

export default function PostAdmin({
  post: {
    _id,
    user: { userName, userAvatar },
    postContent,
    postCreationDate,
    music: { musicName, musicImg, musicAuthor },
  },
}) {
  const { deletePost } = useContext(PostContext);

  const deletePostId = (postId) => {
    const promtPost = window.confirm(
      `Are you sure you want to delete this ${userName}'s post`
    );
    if (promtPost) {
      deletePost(postId);
    }
  };

  return (
    <div className="post-list">
      <div className="owner">
        <img src={`${apiUpload}${userAvatar}`} alt="" />
        <a href="#">{userName}</a>
      </div>
      <div className="dateposts">
        <span className="date">{postCreationDate}</span>
      </div>
      <div className="contents">
        <span className="content">{postContent}</span>
      </div>
      <div className="like">
        <img src={`${apiUploadImgMp3}${musicImg}`} className="img" alt="" />
        <h4 className="name">{musicName}</h4>
        <h4 className="author">{musicAuthor}</h4>
      </div>
      <button className="submit__btn" onClick={deletePostId.bind(this, _id)}>
        Delete
      </button>
    </div>
  );
}
