import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <div className={this.getHideRow()}>
          <div className="col mt-4">
            <span className={this.getAlertClasses()}>
              {this.getEmptyNotice()}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col mt-4">
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                onIncrement={onIncrement}
                onDelete={onDelete}
                counter={counter}
              ></Counter>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  getEmptyNotice() {
    return this.props.counters.length === 0
      ? "Please add new counter to proceed"
      : "";
  }

  getAlertClasses() {
    return this.props.counters.length === 0 ? "alert alert-danger" : "";
  }

  getHideRow() {
    let classes = "row d-";
    classes += this.props.counters.length === 0 ? "block" : "none";
    return classes;
  }
}

export default Counters;
