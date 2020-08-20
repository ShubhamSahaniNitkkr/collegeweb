import React, { Component } from 'react';
import College from './college';
import Title from './title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name='Our' title='Top Colleges' />

        <div className='row p-0-25'>
          <ProductConsumer>
            {(value) => {
              return value.colleges.map((college, idx) => {
                return <College key={idx} college={college} />;
              });
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}
