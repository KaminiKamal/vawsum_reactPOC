import React, { Component } from 'react';
import './App.css';

class Clock extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('props', this.props);
  }
  componentWillMount()
  {
  	this.getTimeUntil(this.props.deadline);
  }

  getTimeUntil(deadline)
  {
	var time = Date.parse(deadline) - Date.parse(new Date());//console.log('time', time);
	const seconds = Math.floor((time/1000) %60);
	const minutes = Math.floor((time/1000/60) %60);
	const hours = Math.floor((time/1000*60*60) %24);
	const days = Math.floor(time/(1000*60*60*24));
	//console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds);
	//this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds})
	this.setState({days, hours, minutes, seconds})
  }

  componentDidMount()
  {
  	setInterval( ()=> this.getTimeUntil(this.props.deadline), 1000)
  }

  leading0(data)
  {
  	return data < 10 ? '0'+data : data;
  }

  render() 
  {	
    return (
    	<div>
    	<div className="App-days">
    	  {this.leading0(this.state.days)} Days
    	</div>
    	<div className="App-hours">
    	  {this.leading0(this.state.hours)} hours
    	</div>
    	<div className="App-minutes">
    	  {this.leading0(this.state.minutes)} minutes
    	</div>
    	<div className="App-seconds">
    	  {this.leading0(this.state.seconds)} seconds
    	</div>
    	</div>
    )
  }
}

export default Clock;    