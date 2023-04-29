import { DeleteOutlined, EditOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Input, notification } from "antd";
import axios from "axios";
import React, { useContext, useState } from "react";
import { apiUrl } from "../../contexts/constants";
import { PostContext } from "../../contexts/postContext";
import "./CommentField.scss";
function CommentField(props) {
  const { item, apiUpload, token, getListComment } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  const editComment = async () => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comments/update-comment/${item._id}`,
        { cmtContent: changeValue },
        { headers: { Authorization: "Bearer " + token } }
      );
      await getListComment();
      setIsEdit(false);
      // notification.success({
      //   message: response.data.message,
      // });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/comments/delete-comment/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      await getListComment();
      console.log("response", response);
      // notification.success({
      //   message: response.data.message,
      // });
    } catch (error) {
      console.log(error);
    }
  };
  const idUserLoging = JSON.parse(window.localStorage.getItem("userLogin"))._id;

  console.log("contentComment_", item, token, apiUpload);
  return (
    <div className="comment-item-wrapper">
      <div className="userComment">
        <div className="userAvatarWrap">
          <img className="userAvatar" src={`${apiUpload}/${item.user.userAvatar}`} />
        </div>

        <div style={{ width: "100%" }}>
          <div className="userNameComent">{item?.user?.userName || ""}</div>
          <div>
            {!isEdit ? (
              <input disabled className="contentComment" value={item.cmtContent}></input>
            ) : (
              <Input
                style={{ boder: "none", marginLeft: "5px" }}
                defaultValue={item.cmtContent}
                onChange={(e) => {
                  setChangeValue(e.target.value);
                }}
                onPressEnter={() => {
                  editComment();
                }}
                addonAfter={
                  <RightCircleOutlined
                    onClick={(e) => {
                      editComment();
                    }}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
      {console.log("isUser_", idUserLoging === item.user._id)}
      <div className="actionComment">
        {idUserLoging === item.user._id && (
          <div className="actionComment">
            {!isEdit && (
              <EditOutlined
                className="editComment"
                onClick={() => {
                  setIsEdit(true);
                }}
              />
            )}
            <DeleteOutlined
              className="editComment"
              onClick={() => {
                deleteComment(item._id);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentField;
