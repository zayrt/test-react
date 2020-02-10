import React, { unstable_Profiler as Profiler } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    };
    this.updateTxtPerf = [];
    this.clockPerformance = this.clockPerformance.bind(this);
    this.getBenchmark = this.getBenchmark.bind(this);
    this.getAvg = this.getAvg.bind(this);
    this.incrementValues = this.incrementValues.bind(this);
  }

  clockPerformance(profilerId, mode, actualTime, baseTime, startTime, commitTime) {
    // console.log({ profilerId, mode, actualTime, baseTime, startTime, commitTime });
    this.updateTxtPerf.push(actualTime)
  }

  getAvg(perfs) {
    const sum = perfs.reduce((a, b) => a + b, 0);
    return (sum / perfs.length) || 0;
  }

  incrementValues() {
    const promises = [];

    for (let i = 0; i < 1000; i++) {
      promises.push(new Promise((resolve) => setTimeout(() => {
        this.setState(() => ({
          value: this.state.value + 1,
        }));
        resolve();
      }, 0)));
    }
    return promises;
  }

  getBenchmark() {
    Promise.all(this.incrementValues()).then(() => {
      console.log('txt perf: ', Math.min(...this.updateTxtPerf), ' : ', Math.max(...this.updateTxtPerf), ' : ', this.getAvg(this.updateTxtPerf));
      this.setState(() => ({ value: 0 }));
      this.updateTxtPerf = []
    })
    // console.log('txt perf: ', Math.min(...this.updateTxtPerf), ' : ', Math.max(...this.updateTxtPerf), ' : ', this.getAvg(this.updateTxtPerf))
  }

  render() {
    return (
      <div className="App">
        <button
          ref={ref => (this.btnRef = ref)}
          className="button"
          onClick={this.getBenchmark}
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
