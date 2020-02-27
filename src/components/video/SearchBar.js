import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
         term: ""
         };  

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    

    render() {
        return (
            <div>

                <div className="ui fluid container">
                <div className="ui menu">
                <div className="left item">
                    <h4> Our YOUTube  <i className="ui play circle icon"></i></h4>
                </div>

                        <div className="item">
                        <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <input
                                type=" big text"
                                placeholder="Search"
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })}
                            />
                            <i className="ui search icon"></i>
                        </div>
                        </form> 
                        </div>

                    

                </div>
               
     
            </div>

            <br/><br/>



            </div>
        );
    }
}
