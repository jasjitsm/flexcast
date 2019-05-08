import React from 'react';
import './Searchbar.scss';
import { Icon } from 'components';

class Searchbar extends React.Component {

  state = {
    searchTerm: null
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({ searchTerm: event.target.value });
    }
  }

  render() {
    const { placeholder } = this.props;

    return (
      <div className="searchbar">
        <Icon iconName="search" className="searchbar__icon"></Icon>
        <input type="text" placeholder={ placeholder } className="searchbar__input" onKeyDown={ this.handleKeyPress }></input>
      </div>
    );
  }

}

export default Searchbar;