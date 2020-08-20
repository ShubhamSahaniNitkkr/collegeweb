import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  renderButtonColor = (remarks) => {
    if (remarks <= 1) return 'danger';
    else if (remarks <= 2) return 'primary';
    else if (remarks <= 3) return 'warning';
    else if (remarks <= 4) return 'info';
    else return 'success';
  };

  renderTags = (tags) => {
    let items = tags.map((tag, idx) => {
      return (
        <button
          type='button'
          key={idx}
          className='btn btn-light mr-2 tag-button'
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
        <i key={idx} className='fas fa-star'></i>
      ) : (
        <i key={idx} className='far fa-star'></i>
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
    console.log(this.props.college);

    return (
      <div className='col-md-6 p-1'>
        {promoted && (
          <p className='text-right'>
            <span className='prom'>PROMOTED</span>
          </p>
        )}
        <div className='card mx-auto my-2 shadow-sm mb-5 bg-white rounded'>
          <div
            className='background card-img-top'
            style={{
              backgroundImage: `url(img/${image})`,
              position: 'relative',
              height: '300px',
              width: '100%',
            }}
          >
            <div className='b-layer'>
              <div className='col-md-12 dflex justifycontentend mt-5'>
                <button
                  type='button'
                  className={`btn btn-${this.renderButtonColor(
                    rating_remarks
                  )}`}
                >
                  {rating} / 5
                  <br />
                  {rating_remarks}
                </button>
              </div>
              <div className='col-md-12 pos-abs pos-b-15'>
                {this.renderTags(tags)}
                <button
                  type='button'
                  className='btn btn-link text-white fs14 pos-abs pos-r-0'
                >
                  #{ranking}
                </button>
              </div>
            </div>
          </div>

          <div className='card-body p-3'>
            <div className='row'>
              <div className='col-md-8'>
                <h5 className='card-title text-truncate'>
                  {college_name}
                  <span className='ml-3'>{this.renderRatings(rating)}</span>
                </h5>
                <p className='card-text'>
                  {this.renderNearestPlaces(nearest_place)}
                </p>
                <p>
                  <span className='text-success'>93% Match : </span>
                  {famous_nearest_places}
                </p>
                <span className='card-text offertxt'>{offertext}</span>
              </div>

              <div className='col-md-4'>
                <span className='card-text'>
                  <i className='fas fa-rupee-sign'></i>{' '}
                  <del>{original_fees}</del>
                  <i
                    className='fas fa-tag text-danger ml-1'
                    style={{ transform: 'rotate(-45deg)' }}
                  ></i>
                  <span className='text-danger'>{discount}%</span>
                </span>
                <br />
                <span className='card-text text-danger'>
                  <i className='fas fa-rupee-sign'></i> {discounted_fees} <br />{' '}
                  {fees_cycle}{' '}
                </span>
                <p className='card-text text-success'>{amenties}</p>
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
