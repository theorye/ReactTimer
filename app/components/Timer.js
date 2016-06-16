import React from 'react';

import Clock from './Clock';
import Controls from './Controls';

const Timer = React.createClass({

  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  startTimer: function() {
    this.timer = setInterval( () => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {  //gets called if either props or state gets updated
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  // componentWillUpdate: function(nextProps, nextState) {
  //   console.log('componentWillUpdate');
  // },
  // componentWillMount: function() {
  //   console.log('componentWillMount');
  // },
  // componentDidMount: function() {
  //   console.log('componentDidMount');
  // },
  componentWillUnmount: function() {
    //console.log('componentDidUnmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function() {
    let {count, timerStatus} = this.state;
    // let renderControlArea = () => {
    //   // if(countdownStatus !== 'stopped') {
    //   //   return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
    //   // } else {
    //   //   return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
    //   // }
    // };

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

export default Timer;
