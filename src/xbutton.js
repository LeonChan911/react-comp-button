import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './xbutton.css';

class Xbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

 
  render() {


    return (
      <div className="xbd">
      <a  className="xb">{this.props.placeholder}</a>
  
      </div>
    );
  }
}

Xbutton.propTypes = {
  placeholder: PropTypes.string
}

export default Xbutton;
