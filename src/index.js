/**
 * Created by Daniel_Gutierrez on 2/17/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyCwnhIOdykYSssfxGaaTyJX-d9dePeSV84';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo:null
    };
    this.videoSearch('foals');

  }

  selectVideo(selectedVideo){
    this.setState({selectedVideo})
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term}, videos => {
      this.setState({videos,selectedVideo:videos[0]});
    });
  }

  render(){
    const videoSearch = _.debounce((term => this.videoSearch(term)),300);

    return (
      <div>
          <SearchBar onSearchTermChange={ videoSearch }/>
          <div className="row">
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelected={this.selectVideo.bind(this)}
              videos={this.state.videos}/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.container'));
