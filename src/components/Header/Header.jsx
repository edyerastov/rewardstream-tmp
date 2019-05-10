import React from "react";
import cs from "./Header.module.sass";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CHANGE_TAB } from "../../redux/actions";

const Header = ({ activeTab, activePage, dispatch }) => {
  return (
    <header className={cs.Header}>
      <HeaderNav
        activeTab={activeTab}
        activePage={activePage}
        dispatcher={dispatch}
      />

      <div className={cs.settings}>
        <Icon icon='Search.svg' />
        <Icon icon='Bell.svg' />
      </div>

      <div className={cs.user}>
        <User username='MC' />
      </div>
    </header>
  );
};

const HeaderNav = ({ activeTab, activePage, dispatcher }) => {
  return (
    <nav className={cs.headerNav}>
      <ul>
        {activePage.tabs.map(tab => (
          <Link to={`/${activePage.urlpath}/${tab.urlpath}`} key={tab.name}>
            <li
              className={tab.name === activeTab.name ? cs.selected : ""}
              onClick={() =>
                dispatcher({
                  type: CHANGE_TAB,
                  payload: tab
                })
              }
            >
              {tab.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const Icon = ({ icon }) => {
  return (
    <div className={cs.icon}>
      <img src={`/img/${icon}`} alt='icon' />
    </div>
  );
};

const User = ({ username, name }) => (
  <div>
    <span>{username}</span>
  </div>
);

const mapStateToProps = ({ activeTab, activePage }) => ({
  activeTab,
  activePage
});

export default connect(mapStateToProps)(Header);
