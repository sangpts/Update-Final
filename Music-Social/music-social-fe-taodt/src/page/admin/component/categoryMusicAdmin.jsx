import React from "react";
import CinematicAdmin from "./categorymusic/cinematicAdmin";
import PopAdmin from "./categorymusic/popAdmin";
import AcousticAdmin from "./categorymusic/acousticAdmin";
import EdmAdmin from "./categorymusic/edmAdmin";
import JazzAdmin from "./categorymusic/jazzAdmin";
import RockAdmin from "./categorymusic/rockAdmin";
import UrbanAdmin from "./categorymusic/urbanAdmin";
import WorldAdmin from "./categorymusic/worldAdmin";
import ElectronicAdmin from "./categorymusic/electronicAdmin";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

export default function CategoryMusicAdmin() {
  let { path } = useRouteMatch();

  return (
    <div className="post__items">
      <div className="category">
        <div className="category__title">
          <h3>List music</h3>
        </div>
        <div className="category__list">
          <NavLink exact to={`${path}/`} className="category__list-item">
            Acoustic/Fork
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
          <Route path={`${path}/cinematic`} component={CinematicAdmin} />
          <Route path={`${path}/pop`} component={PopAdmin} />
          <Route path={`${path}/electronic`} component={ElectronicAdmin} />
          <Route path={`${path}/urban-groove`} component={UrbanAdmin} />
          <Route path={`${path}/jazz`} component={JazzAdmin} />
          <Route path={`${path}/rock`} component={RockAdmin} />
          <Route path={`${path}/world`} component={WorldAdmin} />
          <Route path={`${path}/edm`} component={EdmAdmin} />
          <Route exact path={path} component={AcousticAdmin} />
        </Switch>
      </div>
    </div>
  );
}
