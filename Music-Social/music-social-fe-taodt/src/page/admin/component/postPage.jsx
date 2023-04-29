import React, { useContext, useEffect } from "react";
import { PostContext } from "../../../contexts/postContext";
// import Ripple from "@bit/joshk.react-spinners-css.ripple";
import PostAdmin from "./categorymusic/postAdmin";

export default function PostPage() {
  // get global data by useContext
  const {
    postState: { searchpost, posts, postsLoading },
    getPosts,
  } = useContext(PostContext);

  // start get all posts
  useEffect(() => getPosts(), []);

  // search filter post
  const postData = posts.filter((post) => {
    if (searchpost == "") {
      return post;
    }
    return post.user.userName == searchpost;
  });

  if (postsLoading) {
    return (
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        {/* <Ripple
          style={{
            top: "50%",
            left: "50%",
            position: "relative",
            transform: "translate(-50%, -50%)",
          }}
          color="#be97e8"
        />{" "}
        ;{" "} */}
      </div>
    );
  } else {
    return (
      <div className="post-content menu-bar">
        <div className="overview-boxes">
          <div className="post__items">
            <h3 className="title">Post List</h3>
            <div className="list">
              <h4 className="list__name">Author</h4>
              <h4 className="list__content">Content</h4>
              <h4 className="list__music">Music</h4>
            </div>

            <div className="list__post-admin">
              {postData.map((post) => {
                console.log(post);
                return <PostAdmin post={post} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
