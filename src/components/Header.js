import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => (
  <header>
    <h1 className="title-text">Expensify</h1>
  
    <NavLink exact={true} to="/" className="btn btn-primary" activeClassName="btn btn-warning">Dashboard</NavLink>
    <NavLink to="/create" className="btn btn-primary" activeClassName="btn btn-warning">Create Expense</NavLink>
    
    {/*<div className="row">*/}
    {/*  <div className="visible-xs-12 hidden-sm hidden-md hidden-lg hidden-xl">*/}
    {/*    <NavLink className="col-xs-4 nav-item" exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>*/}
    {/*    <NavLink className="col-xs-4 nav-item" to="/create" activeClassName="is-active">Create Expense</NavLink>*/}
    {/*    <NavLink className="col-xs-4 nav-item" to="/help" activeClassName="is-active">Help</NavLink>*/}
    {/*  </div>*/}
    {/*  <div className="hidden-xs">*/}
    {/*    <NavLink className="col-md-1 col-sm-2 nav-item" exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>*/}
    {/*    <NavLink className="col-md-1 col-sm-2 nav-item" to="/create" activeClassName="is-active">Create Expense</NavLink>*/}
    {/*    <NavLink className="col-md-1 col-sm-2 nav-item" to="/help" activeClassName="is-active">Help</NavLink>*/}
    {/*    <div className="col-sm-9"></div>*/}
    {/*  </div>*/}
    {/*</div>*/}
  </header>
);

export default Header;