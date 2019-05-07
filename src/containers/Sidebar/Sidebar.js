import React from 'react';
import './Sidebar.scss';
import { Logo, Navbar, SidebarToggle } from 'components';

class Sidebar extends React.Component {

  state = {
    collapsed: false
  }

  handleSidebarToggle = () => {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    const { collapsed } = this.state;
    return (
      <section className={ 'sidebar ' + (collapsed && 'sidebar--collapsed') }>
        <Logo collapsed={ collapsed }></Logo>
        <Navbar collapsed={ collapsed }></Navbar>
        <SidebarToggle collapsed={ collapsed } sidebarToggle={ this.handleSidebarToggle }></SidebarToggle>
      </section>
    );
  }
}

export default Sidebar;