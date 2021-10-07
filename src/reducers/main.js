import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';
// import
// import Redux from 'redux';
var searchBarReducer = (state = '', action) => {
    //TODO: define a reducer for the currentVideo field of our state.
    switch (action.type) {
      case "CHANGE_SEARCH":
    //    console.log(action.text);
        return action.text || state;
      default:
        return state;
    }
};

const rootReducer = combineReducers({
    videoList: videoListReducer,
    currentVideo: currentVideoReducer,
    searchBar: searchBarReducer
});


// var rootReducer = () => {
//   Redux.combineReducers({
//     videos: videoList,
//     currentVideo: currentVideo,

//   });
// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
