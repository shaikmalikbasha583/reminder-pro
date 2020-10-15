import {
	ADD_REMINDER,
	DELETE_REMINDER,
	CLEAR_ALL_REMINDERS
} from '../constants/constants';
import { bake_cookie, read_cookie } from 'sfcookies';

let reminder = action => {
	return {
		text: action.text,
		id: Math.random(),
		dueDate: action.dueDate
	};
};

let deleteReminder = (state, action) => {
	let newState = state.filter(task => task.id !== action.id);
	return newState;
};

const reminders = (state = read_cookie('reminders'), action) => {
	let reminders = null;
	switch (action.type) {
		case ADD_REMINDER:
			reminders = [...state, reminder(action)];
			bake_cookie('reminders', reminders);
			return reminders;
		case DELETE_REMINDER:
			reminders = deleteReminder(state, action);
			bake_cookie('reminders', reminders);
			return reminders;
		case CLEAR_ALL_REMINDERS:
			reminders = [];
			bake_cookie('reminders', reminders);
			return reminders;
		default:
			return state;
	}
};

export default reminders;
