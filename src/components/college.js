import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const {
      college_name,
      promoted,
      rating,
      rating_remarks,
      tags,
      original_fees,
      discounted_fees,
      famous_nearest_places,
      amenties,
      discount,
      fees_cycle,
      image,
      offertext,
      ranking,
    } = this.props.college;
    return (
      <div className='col-md-6'>
        <ProductConsumer>
          {(value) => (
            <div className='card mx-auto my-2 shadow-sm p-3 mb-5 bg-white rounded'>
              <img
                src={`img/${image}`}
                className='card-img-top'
                alt={college_name}
              />
              <br />

              <div className='card-body p-0'>
                <h5 className='card-title text-truncate'>{college_name}</h5>
                <p className='card-text'>Price : </p>
                <hr />
                <div></div>
              </div>
            </div>
          )}
        </ProductConsumer>
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
