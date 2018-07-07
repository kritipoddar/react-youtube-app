import React, { Component } from 'react';

class searchbar extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            term: ''
        };

        //this.onInputChange=this.onInputChange.bind(this);
    }
    render(){
    return(
        <div className="search-bar">
        Search Here: <input
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)}/>

     </div>
    );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default searchbar;
