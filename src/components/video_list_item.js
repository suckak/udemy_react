import React from 'react';

const VideoListItem = ({video,onVideoSelected}) => {
  const videoUrl = video.snippet.thumbnails.medium.url;
  return (
    <li className="list-group-item container" onClick={onVideoSelected.bind(this,video)}>
      <div className="video-list media row">
        <div className="media-left col-xs-12">
          <img src={videoUrl} />
        </div>
        <div className="media-body col-xs-12">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
