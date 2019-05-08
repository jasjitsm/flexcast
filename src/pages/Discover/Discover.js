import React from 'react';
import './Discover.scss';
import { Searchbar } from 'components';

const handleSearch = () => {
  
}

function Discover() {
  return (
    <div className="discover">
      <Searchbar placeholder="Enter search term and press Enter/Return" handleSearch={ handleSearch }></Searchbar>
    </div>
  );
}

export default Discover;
