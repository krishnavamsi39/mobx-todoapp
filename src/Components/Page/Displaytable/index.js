import React, { Component } from "react";
import DisplayCategory from "./DisplayCategory";
import DisplayContent from "./DisplayContent";

class Displaytable extends Component {
  createRows = () => {
    const rows = [];
    const filterText = this.props.searchText;
    const inStockOnly = this.props.checked;
    let lastCategory = null;

    this.props.products.map(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <DisplayCategory category={product.category} key={product.category} />
        );
      }
      rows.push(<DisplayContent product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return rows;
  };
  render() {
    return (
      <>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <td>{this.createRows()}</td>
        </table>
      </>
    );
  }
}
export default Displaytable;
