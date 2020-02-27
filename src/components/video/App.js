import React, {Component} from "react";
import unsplash from "./unsplash";
import SearchBar from  "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import axios from "axios";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
       
    };


    onTermSubmit = async (term) => {
       const response = await unsplash.get('/search', {
            params: {
                q: term
            }
        });   

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }; 

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render(){
        return(
            <div>

            <div className="ui fluid container" style={{ marginTop : "0px"}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>    

            <div className="ui container">
               <div className="ui grid">
                   <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />


                    
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
             

            </div>
        );
    }
}

export default App;