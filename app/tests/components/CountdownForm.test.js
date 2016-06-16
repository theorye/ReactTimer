import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', ()=> {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', ()=> {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

    // jQuery way
    // var $el = $(ReactDOM.findDOMNode(countdownForm));
    //
    // countdownForm.refs.seconds.value = '109';
    // TestUtils.Simulate.submit($el.find('form')[0]);
    //
    // expect(spy).toHaveBeenCalledWith(109);

    // non jquery
    let el = ReactDOM.findDOMNode(countdownForm);

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit(el.getElementsByClassName('countdown-form')[0]);
    expect(spy).toHaveBeenCalledWith(109);

  });
});
