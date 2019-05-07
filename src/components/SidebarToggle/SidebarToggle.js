import React from 'react';
import './SidebarToggle.scss';
import { Icon } from 'components';

const SidebarToggle = (props) => (
  <div className="sidebar-toggle" onClick={ props.sidebarToggle }>
    <Icon iconName="left-chevron" className={ 'sidebar-toggle__chevron ' + (props.collapsed && 'sidebar-toggle__chevron--reverse')}></Icon>
    <Icon iconName="left-chevron" className={ 'sidebar-toggle__chevron ' + (props.collapsed && 'sidebar-toggle__chevron--reverse')}></Icon>
  </div>
);

export default SidebarToggle;