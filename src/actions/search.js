import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //searchYoutube video with query to get the data
  // chagneVideo action to change the state
  var query = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  return (dispatch) => {
    searchYouTube(query,  () => {
      dispatch(changeVideoList);
    });
  };
  //TODO:  Write an asynchronous action to handle a video search!

};

export default handleVideoSearch;
