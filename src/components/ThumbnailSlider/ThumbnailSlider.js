import React from 'react';
import './ThumbnailSlider.scss';

  const ThumbnailSlider = (props) => {
      // If there's a non-empty title props, show title
    // Show list of podcasts in a scrollable horizontal list. (Podcast square component -> Interactive and non-interactive)
    // Clicking podcast opens model
    // Once the last (or first) element is visible, disable scroll
    return (
      <section className="thumbnail-slider">
        <h3 className="thumbnail-slider__title">{ props.title }</h3>
        <div className="thumbnail-slider__box">
          <div className="thumbnail-slider__content">
            { props.children }
          </div>
        </div>
      </section>
    );
  }

export default ThumbnailSlider;