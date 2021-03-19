import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag 1", "tag 2", "tag 3"],
  //   }; //Single Source Truth so hide it should be controlled parent component
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // old function declaration for binding current object to method
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // new technique use arrow function
  //handleIncrement = () => {
  //React Does not capture change automatically but we can add setState property to know where should change
  //this.setState({ value: this.state.value + 1 });
  // };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
