import React, { useContext, useEffect } from "react";
import PostItems from "../../../component/postItems";
import { PostContext } from "../../../../src/contexts/postContext";
// import Ripple from "@bit/joshk.react-spinners-css.ripple";
import { AuthContext } from "../../../contexts/authContext";
import PostItemsPerson from "../../../component/postPersonal";

export default function PostPerson() {
  // get global data by useContext
  const {
    postState: { posts, postsLoading },
    getPosts,
  } = useContext(PostContext);
  const {
    authState: {
      user: { _id: userId },
    },
  } = useContext(AuthContext);

  // start get all posts
  useEffect(() => {
    console.log("getPost_");
    getPosts();
  }, []);

  // check id for render post data
  const checkIdpost = posts.filter((post) => {
    return post.user._id === userId;
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
      <div className="postperson post-list post-list-1">
        {checkIdpost.map((post) => {
          return <PostItemsPerson flag={"post"} post={post} />;
        })}
      </div>
    );
  }
}
