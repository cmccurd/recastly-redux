import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

const mapStateToProps = (state) => {
  return {
    text: searchBar
  };
};

var mapDispatchToProps = function (dispatch) {
  var props = {
    handleSearchInputChange: function(event) {dispatch(handleVideoSearch(event))}
  }
  return props;
  //handleInputChange
}

// var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

var SearchContainer = connect(null, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
