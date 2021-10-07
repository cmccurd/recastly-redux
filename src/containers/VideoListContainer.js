import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
// import store from '../store/store.js';

var mapVideoListProp = function (data) {
   var prop = {
    videos: data.videoList,
    video: data.currentVideo
   }
   return prop;
};

var maphandleVideoListEntryTitleClick = function(dispatch) {
    var prop ={
      handleVideoListEntryTitleClick: function(event) {dispatch(changeVideo(event))}
    }
    return prop;
};

var VideoListContainer = connect(mapVideoListProp,maphandleVideoListEntryTitleClick)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
