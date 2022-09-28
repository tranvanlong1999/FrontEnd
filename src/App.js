import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log('App  -Constructor');
    // set state nhận được từ props bên ngoài

  }

  componentDidMount() {
    console.log('App -Mounted');
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleOnDelete = (counter) => {
    const counters = [...this.state.counters].filter(m => m.id !== counter.id);
    // const counters = this.state.counters.filter(m => m.id !== counter.id);
    this.setState({ counters });
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log('app Render');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='contrainer'>
          <Counters onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
            onDelete={this.handleOnDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;