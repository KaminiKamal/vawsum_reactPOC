import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import Clock from './Clock';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    { 
      deadline: 'December 25, 2017',
      newDeadline: '', //any data you like
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  changeDeadline()
  {//console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div>
            CountDown to {this.state.deadline}
          </div>
          <Clock deadline={this.state.deadline} />
        </div> 
        <Form inline> 
          <FormControl placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}/>
          <Button type="submit" value="Submit" onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
