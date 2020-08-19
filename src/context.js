import React, { Component } from 'react';
import { detailProduct } from './data';
import colleges from './colleges.json';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    colleges: [],
    detailProduct: detailProduct,
    cart: [],
    modlaOpen: true,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setCollegeList();
  }

  setCollegeList = () => {
    let tempColleges = [],
      collegeArr = colleges.colleges,
      limit = 10;
    for (let college of collegeArr) {
      const singleItem = { ...college };
      tempColleges = [...tempColleges, singleItem];
      limit--;
      if (!limit) break;
    }
    this.setState(() => {
      return { colleges: tempColleges };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
