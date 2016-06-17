import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from '../../components/Countdown';

describe('Countdown', ()=> {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {  // done called for async
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than 0', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });


    it('should reset count on stopped status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });

  // it('should call onSetCountdown if valid seconds entered', ()=> {
  //   let spy = expect.createSpy();
  //   let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
  //
  //   // jQuery way
  //   // var $el = $(ReactDOM.findDOMNode(countdownForm));
  //   //
  //   // countdownForm.refs.seconds.value = '109';
  //   // TestUtils.Simulate.submit($el.find('form')[0]);
  //   //
  //   // expect(spy).toHaveBeenCalledWith(109);
  //
  //   // non jquery
  //   let el = ReactDOM.findDOMNode(countdownForm);
  //
  //   countdownForm.refs.seconds.value = '109';
  //   TestUtils.Simulate.submit(el.getElementsByClassName('countdown-form')[0]);
  //   expect(spy).toHaveBeenCalledWith(109);
  // });
  //
  // it('should not call on onSetcountdown if invalid seconds entered', ()=> {
  //   let spy = expect.createSpy();
  //   let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
  //
  //   let el = ReactDOM.findDOMNode(countdownForm);
  //
  //   countdownForm.refs.seconds.value = '109b';
  //   TestUtils.Simulate.submit(el.getElementsByClassName('countdown-form')[0]);
  //   expect(spy).toNotHaveBeenCalled();
  //});
});
