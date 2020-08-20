import React, { Component } from 'react';
import colleges from './colleges.json';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    colleges: [],
    limit: 10,
    page: 0,
  };

  componentDidMount() {
    this.setCollegeList(this.sliceArrUtil(colleges.colleges));
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.setCollegeList(this.sliceArrUtil(colleges.colleges));
    }
  };

  sliceArrUtil = (list) => {
    let limit = this.state.limit;
    var start = limit * this.state.page;
    return list.slice(start, start + limit);
  };

  setCollegeList = (collegeArr) => {
    let tempColleges = this.state.colleges,
      page = this.state.page;

    collegeArr.map((college) => {
      const singleItem = { ...college };
      tempColleges = [...tempColleges, singleItem];
    });

    this.setState(() => {
      return { colleges: tempColleges, page: page + 1 };
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
