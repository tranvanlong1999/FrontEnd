import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters -Rendered");
    const { onReset, counters, onIncrement, onDelete, onDecrement } =
      this.props;
    return (
      <div>
        {/* add button reset all counter */}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
