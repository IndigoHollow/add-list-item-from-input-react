import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      newitem: ""
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    console.log("Name changed: " + this.state.name);
    this.setState({ newitem: this.state.name });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </label>
        </form>

        <ul>
          <List element={this.state.newitem} />
        </ul>
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.element,
      newitem = <li>{item}</li>;

    return newitem;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
