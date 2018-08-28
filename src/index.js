import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      items: [
        {
          id: 1,
          text: "asdas"
        }
      ]
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    /* ADD NEW ELEMNT IN STATE 'items' */
    let newItem = {
      id: 2,
      text: this.state.name
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));
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

        <List element={this.state.items} />
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.element;

    return (
      <ul>
        {this.props.element.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
