import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
class Searchbar extends Component {
  handleCheckbox = e => {
    this.props.updateCheck(e.target.checked);
  };
  handleSearchbar = e => {
    this.props.updateSearch(e.target.value);
  };
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchtext}
          onChange={this.handleSearchbar}
        />
        <br />
        <span>
          <input type="checkbox" onClick={this.handleCheckbox} />
          Only show products in stock
        </span>
      </>
    );
  }
}
export default Searchbar;
