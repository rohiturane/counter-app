import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags : ['tag 1','tag 2','tag 3'],
     }
     styles={
         fontSize:10,
         fontWeight:'bold'
     };
    // old function declaration for binding current object to method
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // new technique use arrow function
    handleIncrement = () => {
        //React Does not capture change automatically but we can add setState property to know where should change
        this.setState({ count: this.state.count + 1});
    }
    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/* <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul> */}
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;