import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  renderButtonColor = (remarks) => {
    if (remarks <= 1) return 'danger';
    else if (remarks <= 2) return 'primary';
    else if (remarks <= 3) return 'warning';
    else if (remarks <= 4) return 'info';
    else return 'green';
  };

  renderTags = (tags) => {
    let items = tags.map((tag, idx) => {
      return (
        <button
          type='button'
          key={idx}
          className='button light-button ml2 tag-button'
        >
          {tag}
        </button>
      );
    });
    return items;
  };

  renderRatings = (ratings) => {
    let items = [1, 2, 3, 4, 5].map((star, idx) => {
      return ratings >= star ? (
        <i key={idx} className='fas fa-star war-txt'></i>
      ) : (
        <i key={idx} className='far fa-star war-txt'></i>
      );
    });
    return items;
  };

  renderNearestPlaces = (places) => {
    let items = places.map((place, idx) => {
      return (
        <span key={idx} className={`mr-2 ${idx !== 0 ? 'text-muted' : ''}`}>
          {place} {places.length - 1 !== idx && '|'}
        </span>
      );
    });
    return items;
  };

  renderEnemities = (enemities) => {
    let items = enemities.map((enem, idx) => {
      return (
        <span key={idx} className={`mr-2 text-success text-truncate`}>
          - {enem}
        </span>
      );
    });
    return items;
  };

  render() {
    const {
      college_name,
      famous_nearest_places,
      nearest_place,
      promoted,
      rating,
      rating_remarks,
      tags,
      original_fees,
      discounted_fees,
      amenties,
      discount,
      fees_cycle,
      image,
      offertext,
      ranking,
    } = this.props.college;

    return (
      <div className='screen-1-2 p1'>
        {promoted && (
          <p className='textright'>
            <span className='prom'>PROMOTED</span>
          </p>
        )}
        <div className='square mrauto normal-shadow white-bg'>
          <div
            className='background'
            style={{
              backgroundImage: `url(img/${image})`,
              position: 'relative',
              height: '300px',
              width: '100%',
            }}
          >
            <div className='b-layer'>
              <div className='screen-1 dflex justifycontentend mt5 ml1'>
                <button
                  type='button'
                  className={`button ${this.renderButtonColor(
                    rating_remarks
                  )}-button`}
                >
                  {rating} / 5
                  <br />
                  {rating_remarks}
                </button>
              </div>
              <div className='screen-1 pos-abs pos-b-15'>
                {this.renderTags(tags)}
                <button type='button' className='button white-txt fs14 '>
                  #{ranking}
                </button>
              </div>
            </div>
          </div>

          <div className='square-body'>
            <div className='row'>
              <div className='screen-1-3'>
                <span className='card-title truncate-txt mr3 fs18 d-block fw500'>
                  {college_name}
                  <span className='ml2'>{this.renderRatings(rating)}</span>
                </span>
                <p className='fs13'>
                  {this.renderNearestPlaces(nearest_place)}
                </p>
                <p className='fs13'>
                  <span className='green-txt'>93% Match : </span>
                  {famous_nearest_places}
                </p>
                <p className='offertxt'>{offertext}</p>
              </div>

              <div className='screen-1-4 textright'>
                <span className='fs18'>
                  <i className='fas fa-rupee-sign'></i>{' '}
                  <del>{original_fees}</del>
                  <i
                    className='fas fa-tag red-txt ml2'
                    style={{ transform: 'rotate(-45deg)' }}
                  ></i>
                  <span className='red-txt'>{discount}%</span>
                </span>
                <br />
                <span className='red-txt fs25 d-block'>
                  <i className='fas fa-rupee-sign'></i> {discounted_fees}{' '}
                </span>
                <span>{fees_cycle}</span>
                {/* <p className='green-txt'>
                  {this.renderEnemities(amenties)}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  college: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
