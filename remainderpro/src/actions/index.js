import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('action in deleteReminder', action);
  return action;
}

export const clearReminder = () => {
  const action = {
    type: CLEAR_REMINDER
  }
  console.log('action in clearReminder', action);
  return action;
}
