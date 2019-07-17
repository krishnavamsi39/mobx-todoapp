import React, { Component } from "react";
class DisplayCategory extends Component {
  render() {
    return (
      <>
        <tr>
          <th>{this.props.category}</th>
        </tr>
      </>
    );
  }
}
export default DisplayCategory;
