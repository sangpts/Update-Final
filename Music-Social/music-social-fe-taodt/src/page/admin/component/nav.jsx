import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { apiUpload } from "../../../contexts/constants";
import { PostContext } from "../../../contexts/postContext";

export default function Nav() {
  const {
    authState: {
      user: { userName, userAvatar },
    },
  } = useContext(AuthContext);

  // search function
  const { searchPost } = useContext(PostContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = function (value) {
    setSearch(value.target.value);
    searchPost(search);
  };

  return (
    <nav>
      <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn" />
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input
          type="text"
          inputMode="search"
          onChange={onChangeSearch}
          placeholder="Search..."
        />
      </div>
      <div className="profile-details">
        <img src={`${apiUpload}${userAvatar}`} alt="" />
        <span className="admin_name">{userName}</span>
      </div>
    </nav>
  );
}
