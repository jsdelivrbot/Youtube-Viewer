import React, {Component} from 'react';
import ReactDOM from 'react-DOM';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar'; 
import VideoDetail from './components/video_detail'; 


const API_KEY = 'AIzaSyD3KogYMB06aSlcxStHwDJXGJR8zM5yvm8';

//Create a new component. This should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [],
                    selectedVideo: null 
        };

        this.videoSearch('Arsenal');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
        });
    }


    render() {

        const videoSearch = _.debounce( term => {this.videoSearch(term)}, 300);
        return (

        <div>
            <h1>Search youtube</h1>
            <SearchBar onSearchTermChange = {videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );
    }

}
//Take this component  and put it (render) it to the DOM

ReactDOM.render(<App />, document.querySelector('.container'));