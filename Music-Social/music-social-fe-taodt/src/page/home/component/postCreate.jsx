import React from "react";
import CategoryMusic from "../../../component/categoryMusic";
import PopupCreate from "./popupCreate";

export default function PostCreate() {
  return (
    <div className="postcreate post-list post-list-4">
      <CategoryMusic />
      <PopupCreate />
    </div>
  );
}
