import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => (
  <ul className="col-md-4 list-group">
    {
      props.videos.map(
        (val,index)=>(<VideoListItem
          video={val} key={index}
          onVideoSelected={props.onVideoSelected} />)
      )
    }
  </ul>
);

export default VideoList;
