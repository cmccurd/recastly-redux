import React from 'react';
import PropTypes from 'prop-types';

var Search = (prop) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      value={prop.text}
     onChange ={prop.handleSearchInputChange}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
)



export default Search;
