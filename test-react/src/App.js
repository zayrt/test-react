import React, { unstable_Profiler as Profiler } from 'react';
// import Perf from 'react-addons-perf';
import './App.css';
import Value from './Value';

// const Profiler = React.unstable_Profiler;

console.log('profiler', Profiler);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      values: [],
    };
    this.incrementValue = this.incrementValue.bind(this);
    this.incrementThousandTime = this.incrementThousandTime.bind(this);
    this.btnRef = null;
    this.clockPerformance = this.clockPerformance.bind(this);
  }

  componentDidUpdate() {
    // console.error(JSON.stringify(Perf.getLastMeasurements()));
  }

  incrementThousandTime() {
    for (let i = 0; i < 1000; i++) {
      this.btnRef.click();
    }
  }
  clockPerformance(
    profilerId,
    mode,
    actualTime,
    baseTime,
    startTime,
    commitTime,
  ) {
    console.log({
      profilerId,
      mode,
      actualTime,
      baseTime,
      startTime,
      commitTime,
    });
  }
  incrementValue() {
    // Perf.start();

    setTimeout(() => {
      this.setState(() => ({
        value: this.state.value + 1,
      }));
    }, 1);
  }

  render() {
    return (
      <div className="App">
        <h1>Test React</h1>
        <button className="button" onClick={this.incrementThousandTime}>
          increment x 1000
        </button>
        <button
          ref={ref => (this.btnRef = ref)}
          className="button"
          onClick={this.incrementValue}
        >
          increment
        </button>
        <Profiler id="test" onRender={this.clockPerformance}>
          <Value val={this.state.value} />
        </Profiler>
      </div>
    );
  }
}

export default App;
