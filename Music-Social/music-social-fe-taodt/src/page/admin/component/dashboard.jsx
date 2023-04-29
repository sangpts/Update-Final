import React, { useContext, useEffect } from "react";
import { PostContext } from "../../../contexts/postContext";

import OverviewBoxes from "./overviewBoxes";
import SaleBox from "./saleBox";

export default function Dashboard() {
  // const {
  //   postState: { posts },
  //   getPosts,
  // } = useContext(PostContext);
  // useEffect(() => getPosts(), []);

  return (
    <div className="home-content menu-bar">
      <OverviewBoxes />
      <SaleBox />
    </div>
  );
}
