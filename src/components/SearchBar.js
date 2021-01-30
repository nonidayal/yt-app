import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onSearch = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Search the Videos</label>
            <input
              type="text"
              placeholder="Search video"
              onChange={this.onSearch}
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
