import React, { Fragment } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { PATHS, ROUTES } from 'constants/routes';
import { Icon } from 'components';

/**
 * Renders a single navigation item. i.e. an icon plus text.
 * @param {Object} route Route object containing link configuration.
 */
const renderNavItem = (route) => (
  <li className="navbar__list-item">
    <NavLink to={ route.path } className="navbar__link" activeClassName="navbar__link--active">
      { getNavItemIcon(route) }
      <span className="navbar__link-text">{ route.label }</span>
    </NavLink>
  </li>
);

/**
 * Returns the correct icon based on the list item currently being rendered.
 * @param {Object} route Route object containing link configuration.
 */
const getNavItemIcon = (route) => {
  switch(route.path) {
    case PATHS.DISCOVER: return <Icon iconName="search" className="navbar__link-icon"></Icon>;
    case PATHS.SUBSCRIPTIONS: return <Icon iconName="rss" className="navbar__link-icon"></Icon>;
    case PATHS.RELEASES: return <Icon iconName="bell" className="navbar__link-icon"></Icon>;
    case PATHS.FAVOURITES: return <Icon iconName="star-open" className="navbar__link-icon"></Icon>;
    case PATHS.DOWNLOADS: return <Icon iconName="download" className="navbar__link-icon"></Icon>;
    case PATHS.SETTINGS: return <Icon iconName="cog" className="navbar__link-icon"></Icon>;
    case PATHS.ABOUT: return <Icon iconName="info" className="navbar__link-icon"></Icon>;
    default: return <Icon iconName="star-open" className="navbar__link-icon"></Icon>;
  }
}

const Navbar = (props) => {
  return (
    <nav className={ 'navbar ' + (props.collapsed && 'navbar--collapsed') }>
      <ul className="navbar__list-wrapper">
        {ROUTES.map((route, index, routes) => {
          const newSection = (index > 0 && route.section !== routes[index-1].section) ? true : false;
          return (
            <Fragment key={ `${route.path}` }>
              { newSection && <div className="navbar__section-divider"></div>}
              { renderNavItem(route) }
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;