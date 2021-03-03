import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              Counter App{" "}
              <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
                Add Counter
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
