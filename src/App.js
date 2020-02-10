import React, { unstable_Profiler as Profiler } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      values: [],
    };
    this.incrementValue = this.incrementValue.bind(this);
    this.clockPerformance = this.clockPerformance.bind(this);
  }

  clockPerformance(profilerId, mode, actualTime, baseTime, startTime, commitTime) {
    console.log({ profilerId, mode, actualTime, baseTime, startTime, commitTime });
  }

  incrementValue() {
    for (let i = 0; i < 1000; i++) {
      setTimeout(() => {
        this.setState(() => ({
          value: this.state.value + 1,
        }));
      }, 1);
    }
  }

  render() {
    return (
      <div className="App">
        <button
          ref={ref => (this.btnRef = ref)}
          className="button"
          onClick={this.incrementValue}
        >
          increment
        </button>
        <Profiler id="test" onRender={this.clockPerformance}>
          <div>{this.state.value}</div>
        </Profiler>
      </div>
    );
  }
}



export default App;
