import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapVideoPlayerProp = function(data) {
  var prop = {
    video: data.currentVideo
  }
  return prop;
}

var VideoPlayerContainer = connect(mapVideoPlayerProp)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
