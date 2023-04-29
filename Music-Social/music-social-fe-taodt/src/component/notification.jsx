import React from "react";

export default function Notification() {
  return (
    <div className="notification">
      <div className="notification__list">
        <div className="notification__list-item">
          <img className="item__avt" src="/img/avartar.jpg" alt="" />
          <div className="item__content">
            <h4 className="item__content-name">Trung Vũ</h4>
            <span className="item__content-noti">
              Đã bình luận bài viết của bạn
            </span>
          </div>
        </div>
        <div className="notification__list-item">
          <img className="item__avt" src="/img/avartar.jpg" alt="" />
          <div className="item__content">
            <h4 className="item__content-name">Trung Vũ</h4>
            <span className="item__content-noti">
              Đã bình luận bài viết của bạn
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
