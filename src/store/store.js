import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

function configureStore(initialize) {
  return createStore(
      rootReducer,
      initialize,
      applyMiddleware(thunk)
  );
}
var preload = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

const store = configureStore(preload);


export default store;