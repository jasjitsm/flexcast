import React from 'react';

// SVG Icon Imports
import { ReactComponent as SearchIcon } from 'assets/icons/fa-search.svg';
import { ReactComponent as RssIcon } from 'assets/icons/fa-rss.svg';
import { ReactComponent as BellIcon } from 'assets/icons/fa-bell.svg';
import { ReactComponent as StarOpenIcon } from 'assets/icons/fa-star-open.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/icomoon-download.svg';
import { ReactComponent as CogIcon } from 'assets/icons/fa-cog.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/fa-info.svg';
import { ReactComponent as LeftChevronIcon } from 'assets/icons/fa-chevron-left.svg';

const Icon = (props) => {
  switch(props.iconName) {
    case 'search': return <SearchIcon className={ props.className }></SearchIcon>;
    case 'rss': return <RssIcon className={ props.className }></RssIcon>;
    case 'bell': return <BellIcon className={ props.className }></BellIcon>;
    case 'star-open': return <StarOpenIcon className={ props.className }></StarOpenIcon>;
    case 'download': return <DownloadIcon className={ props.className }></DownloadIcon>;
    case 'cog': return <CogIcon className={ props.className }></CogIcon>;
    case 'info': return <InfoIcon className={ props.className }></InfoIcon>;
    case 'left-chevron': return <LeftChevronIcon className={ props.className }></LeftChevronIcon>
    default: throw new Error('Unknown Icon Name');
  }
}

export default Icon;