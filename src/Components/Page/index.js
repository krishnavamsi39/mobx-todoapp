import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { action } from "mobx";
import Searchbar from "./Searchbar";
import Displaytable from "./Displaytable";
@observer
class Page extends Component {
  @observable searchText = "";
  @observable checked = false;
  @action updateChecked = check => {
    this.checked = check;
  };
  @action updateSearchbar = text => {
    this.searchText = text;
  };
  render() {
    return (
      <>
        <Searchbar
          searchtext={this.searchText}
          checked={this.checked}
          updateCheck={this.updateChecked}
          updateSearch={this.updateSearchbar}
        />
        <Displaytable
          products={this.props.products}
          searchText={this.searchText}
          checked={this.checked}
        />
      </>
    );
  }
}
export default Page;
