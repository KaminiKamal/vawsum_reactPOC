import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import '../App.css';
import '../index.css';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import * as actions from '../actions';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			text: '',
      dueDate: ''
		}
	}

	addReminder(){
		this.props.addReminder(this.state.text,  this.state.dueDate);
    //this.setState({text: ''})
		console.log('this.props', this.state.dueDate);
	}

  deleteReminder(id){
    this.props.deleteReminder(id);
    console.log('id', id);console.log('this.props', this.props);
  }

  clearReminder(){
    this.props.clearReminder();
    console.log('this.props', this.props);
  }

  renderReminders(){
    const {remind} = this.props;
    return(
      <ul className="list-group col-sm-4">
        {
          remind.map(reminder =>
          {
            return(
              <li key={reminder.id} className="list-group-item">

                <div>{reminder.text} </div>
                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                <span className="delete-button" onClick={()=>this.deleteReminder(reminder.id)} >&#x2715;</span>
                </div>
              </li>
            )
          }
          )
        }
      </ul>
    )
  }

	render(){
    console.log('pppp', this.props.remind);
		return(
		<div className="App">
			<div className="App-title">
				Remainder Pro
			</div>
			<div className="form-inline">
				<div className="form-group">
					<input className="form-control" placeholder="I have to ..."
					onChange={event => this.setState({text: event.target.value})}/>
          <input className="form-control" type="datetime-local" placeholder="set date to reminders ..."
          onChange={event => this.setState({dueDate: event.target.value})}/>

				</div>
				<button type="submit" className="btn btn-success" onClick={() => this.addReminder()}>Add Remainder</button>
        <button type="clear" className="btn btn-success" onClick={() => this.clearReminder()}>Clear Remainder</button>
        <div>
          {this.renderReminders()}
        </div>
			</div>
		</div>
		)
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({addReminder}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(App);
function mapStateToProps(state){
  console.log("state", state);
  return{
    remind: state
  }
}

export default connect(mapStateToProps, actions)(App);
