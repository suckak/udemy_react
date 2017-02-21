import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  render(){
    return (
      <div className="search-bar">
        <input type="text" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(text){
    this.setState({
      text
    });
    this.props.onSearchTermChange(text);
  }
}

export default SearchBar;
