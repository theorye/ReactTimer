// import React from 'react';
// import ReactDOM from 'react-dom';
// import expect from 'expect';
// import $ from 'jQuery';
// import TestUtils from 'react-addons-test-utils';
//
// import CountdownForm from '../../components/CountdownForm';
//
// describe('CountdownForm', ()=> {
//   it('should exist', () => {
//     expect(CountdownForm).toExist();
//   });
//
//   it('should call onSetCountdown if valid seconds entered', ()=> {
//     var spy = expect.createSpy();
//     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
//     // var $el = $(ReactDOM.findDOMNode(countdownForm));
//     //
//     // countdownForm.refs.seconds.value = '109';
//     // TestUtils.Simulate.submit($el.find('form')[0]);
//     //
//     // expect(spy).toHaveBeenCalledWith(109);
//     var el = ReactDOM.findDOMNode(countdownForm);
//
//     countdownForm.refs.seconds.value = '12a';
//     TestUtils.Simulate.submit(el.getElementsByClassName('countdown-form')[0]);
//     expect(spy).toHaveBeenCalledWith(109);
//
//   });
// });
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('../../components/CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
