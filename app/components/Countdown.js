import React from 'react';
import Clock from './Clock';


const Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Countdown</h1>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

export default Countdown;
