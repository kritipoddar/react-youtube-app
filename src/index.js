import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

import SearchBar from './components/search';

//const API_KEY='Add API-Key here';

class App extends Component{

    constructor(props)
    {
        super(props);

        this.state={
            videos:[],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos)=> {
          this.setState({
            videos : videos,
            selectedVideo: videos[0]
          });
      });
    }

   render(){
     const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400);

     return (
    <div>
    <p className="heading-bar">Made with <span className="heart">&#9829;</span> by Kriti</p><hr/>
      <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
    </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.container') );
