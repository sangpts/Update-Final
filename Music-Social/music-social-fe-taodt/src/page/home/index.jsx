import React, { useContext } from "react";
import Header from "../../component/header";
import Notification from "../../component/notification";

import MusicFooter from "./component/musicFooter";
import MusicPopup from "./component/musicPopup";
import PostCreate from "./component/postCreate";
import PostDisplay from "./component/postDisplay";
import PostEdit from "./component/postEdit";
import Music from "./component/music";
import PostFavorite from "./component/postFavorite";
import PostPerson from "./component/postPerson";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import MenuHistory from "./component/menuHistory";

export default function Home() {
  let { path } = useRouteMatch();

  return (
    <div className="home">
      <Header />
      {/* thông báo người dùng */}
      <Notification />
      {/* main */}
      <main className="main">
        <div className="container-fluid">
          <section className="menu">
            <div className="menu__list">
              <h3 className="menu__list-title">Menu</h3>
              <ul className="menu__list-items">
                <li className="item">
                  <NavLink exact to={`${path}/`} className="item__option">
                    <i className="fa fa-home" />
                    <span>Home page</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/personal`} className="item__option">
                    <i className="fa fa-user-circle-o" />
                    <span>My personal page</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/edit`} className="item__option">
                    <i className="fa fa-pencil" />
                    <span>Edit personal information</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/favorite`} className="item__option">
                    <i className="fa fa-heart-o" />
                    <span>My favorite playlist</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/create-post`} className="item__option">
                    <i className="fa fa-plus" />
                    <span>Create post</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <MenuHistory />
          </section>
          <section className="post">
            <Switch>
              {/* my personal page */}
              <Route path={`${path}/personal`} component={PostPerson} />
              {/* edit information */}
              <Route path={`${path}/edit`} component={PostEdit} />
              {/* my favorite page */}
              <Route path={`${path}/favorite`} component={PostFavorite} />
              {/* create page */}
              <Route path={`${path}/create-post`} component={PostCreate} />
              {/* home page */}
              <Route exact path={`${path}/`} component={PostDisplay} />
            </Switch>
          </section>
          {/* Music */}
          <Music />
          {/* section music for table, smart phone */}
          <MusicFooter />
          <section className="menu-footer">
            <div className="menu__list">
              <h3 className="menu__list-title">Menu</h3>
              <ul className="menu__list-items">
                <li className="item">
                  <NavLink exact to={`${path}/`} className="item__option">
                    <i className="fa fa-home" />
                    <span>Home page</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/personal`} className="item__option">
                    <i className="fa fa-user-circle-o" />
                    <span>My personal page</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/edit`} className="item__option">
                    <i className="fa fa-pencil" />
                    <span>Edit personal information</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/favorite`} className="item__option">
                    <i className="fa fa-heart-o" />
                    <span>My favorite playlist</span>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink to={`${path}/create-post`} className="item__option">
                    <i className="fa fa-plus" />
                    <span>Create post</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>
          <MusicPopup />
        </div>
      </main>
    </div>
  );
}
