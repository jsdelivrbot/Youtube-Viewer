import React from 'react';
import VideoListItem from './video_list_item';

//passing props from index. using{videos} instead of props.videos
const VideoList = (props) => {
    // videos passed from index.js. video is arbitary
    const videoItems = props.videos.map(video => {
        return (
            //key is used to give individual key to each item. etag is included from the API
            <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            key={video.etag} 
            video={video} /> 
        )
    });
    
    return(
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;