import React, { Component } from "react";
import "./style.css";
import FilterTypes from "./../../../../constants/TodoConstants";
import { observer } from "mobx-react";
@observer
class TodoActions extends Component {
  handleClick = e => {
    this.props.toggleFooter(e.target.value);
  };

  displayButtons = () => {
    let allclass = "action-button";
    let activeclass = "action-button";
    let completedclass = "action-button";
    if (this.props.footerAction === FilterTypes.all)
      allclass = "clicked-button";
    else if (this.props.footerAction === FilterTypes.active)
      activeclass = "clicked-button";
    else completedclass = "clicked-button";
    return (
      <div>
        <input
          type="button"
          className={allclass}
          value="All"
          onClick={this.handleClick}
        />
        <input
          type="button"
          className={activeclass}
          value="Active"
          onClick={this.handleClick}
        />
        <input
          type="button"
          className={completedclass}
          value="Completed"
          onClick={this.handleClick}
        />
      </div>
    );
  };

  render() {
    return <div className="footer">{this.displayButtons()}</div>;
  }
}
export default TodoActions;
