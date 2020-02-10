import React, { unstable_Profiler as Profiler } from 'react';
import { render } from "react-dom";
import logo from './logo.svg';
import './App.css';

function Logo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.clockPerformance = this.clockPerformance.bind(this);
  }

  clockPerformance(profilerId, mode, actualTime, baseTime, startTime, commitTime) {
    console.log({ profilerId, mode, actualTime, baseTime, startTime, commitTime });
  }

  render() {
    return (
      <Profiler id="test" onRender={this.clockPerformance}>
        <Logo />
      </Profiler>
    );
  }
}



export default App;
