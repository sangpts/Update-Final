import React, { useContext } from "react";
import Acoustic from "./categorymusic/acoustic";
import Cinematic from "./categorymusic/cinematic";
import Edm from "./categorymusic/edm";
import Electronic from "./categorymusic/electronic";
import Jazz from "./categorymusic/jazz";
import Pop from "./categorymusic/pop";
import Rock from "./categorymusic/rock";
import Urban from "./categorymusic/urban";
import World from "./categorymusic/world";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { MusicContext } from "../contexts/musicContext";

export default function CategoryMusic() {
  let { path } = useRouteMatch();

  return (
    <div className="post__items">
      <div className="category">
        <div className="category__title">
          <h3>Create new post</h3>
          <span>Create your new post with a piece of music that you love or see fit</span>
        </div>
        <div className="category__list">
          <NavLink exact to={`${path}/`} className="category__list-item">
            Ascoustic/Fork
          </NavLink>
          <NavLink to={`${path}/cinematic`} className="category__list-item">
            Cinematic
          </NavLink>
          <NavLink to={`${path}/pop`} className="category__list-item">
            Pop
          </NavLink>
          <NavLink to={`${path}/electronic`} className="category__list-item">
            Electronic
          </NavLink>
          <NavLink to={`${path}/urban-groove`} className="category__list-item">
            Urban/groove
          </NavLink>
          <NavLink to={`${path}/jazz`} className="category__list-item">
            Jazz
          </NavLink>
          <NavLink to={`${path}/rock`} className="category__list-item">
            Rock
          </NavLink>
          <NavLink to={`${path}/world`} className="category__list-item">
            World/others
          </NavLink>
          <NavLink to={`${path}/edm`} className="category__list-item">
            EDM
          </NavLink>
        </div>
        <Switch>
          <Route path={`${path}/cinematic`} component={Cinematic} />
          <Route path={`${path}/pop`} component={Pop} />
          <Route path={`${path}/electronic`} component={Electronic} />
          <Route path={`${path}/urban-groove`} component={Urban} />
          <Route path={`${path}/jazz`} component={Jazz} />
          <Route path={`${path}/rock`} component={Rock} />
          <Route path={`${path}/world`} component={World} />
          <Route path={`${path}/edm`} component={Edm} />
          <Route exact path={path} component={Acoustic} />
        </Switch>
      </div>
    </div>
  );
}
