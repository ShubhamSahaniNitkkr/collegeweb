import React, { Component } from 'react';
export default class Default extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='msg msgdanger textcenter ' role='alert'>
          <p className='fs45'>
            ERROR : 404 <i className='fas fa-biohazard'></i>
          </p>
          <p className='fs25'>
            The Requested URL &nbsp;
            <span className='text-blue'>{this.props.location.pathname}</span>
            &nbsp; does not exist !
          </p>
        </div>
      </React.Fragment>
    );
  }
}
