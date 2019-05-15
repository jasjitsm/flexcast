import React from 'react';
import './Discover.scss';
import { Searchbar, GallerySlider } from 'components';
import { getTopPodcasts } from 'api/itunes';
import { DISCOVER } from 'constants/app';
import featuredImage from 'assets/featured-image.jpg';



class Discover extends React.Component {

  state = {
    topPodcastList: []
  }

  handleSearch = () => {
  
  }
  
  async componentDidMount() {
    this.setState({ topPodcastList: await getTopPodcasts() });
  }
  
  renderFeaturedPodcast = () => {
    return (
      <div className="featured-podcast">
        <div className="featured-podcast__text-wrapper">
          <div className="featured-podcast__title-wrapper">
            <h2 className="featured-podcast__title">{ DISCOVER.FEATURED.title }</h2>
            <div className="featured-podcast__icon">Featured</div>
          </div>
          <p className="featured-podcast__author">{ DISCOVER.FEATURED.author }</p>
          <p className="featured-podcast__description">{ DISCOVER.FEATURED.description }</p>
        </div>
        <img className="featured-podcast__image" src={ featuredImage } alt="Featured Podcast"></img>
      </div>
    )
  }

  render() {
    return (
      <section className="discover">
        <Searchbar placeholder="Enter search term and press Enter/Return" handleSearch={ this.handleSearch }></Searchbar>
        { this.renderFeaturedPodcast() }
        <GallerySlider title="Top Podcasts" listData=""></GallerySlider>
      </section>
    );
  }
}

export default Discover;
