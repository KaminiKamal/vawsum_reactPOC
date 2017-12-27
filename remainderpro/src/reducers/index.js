import { ADD_REMINDER, 	DELETE_REMINDER, CLEAR_REMINDER } from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
	return {
		text: action.text,
		id: Math.random(),
		dueDate: action.dueDate
	}
}

const deleteById = (state, id) => {
	const reminders = state.filter(reminder => reminder.id!==id);
	console.log('reminders ', reminders)
	return reminders;
}
const clearReminder = () => {
	const reminders=[];
	console.log('reminders ', reminders)
	return reminders;
}


const reminders = ( state=[], action ) => {console.log("inside my mapApp");
	let reminders = null;
	state = read_cookie('reminders');
	switch(action.type){
		case ADD_REMINDER: ;console.log("inside ADD_REMINDER", state);
			reminders = [...state, reminder(action)]
			bake_cookie('reminders', reminders);console.log("inside ADD_REMINDER 2", state);
			console.log('reminders as state', reminders);
			return reminders;
		case DELETE_REMINDER:
			reminders = deleteById(state, action.id);
			bake_cookie('reminders', reminders);
			console.log('reminders as state', reminders);
			return reminders;
		case CLEAR_REMINDER:
			reminders = clearReminder();
			bake_cookie('reminders', reminders);
			console.log('reminders as state', reminders);
			return reminders;
		default:
			return state;
	}
}

export default reminders;
