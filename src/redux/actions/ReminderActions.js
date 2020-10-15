import {
	ADD_REMINDER,
	DELETE_REMINDER,
	CLEAR_ALL_REMINDERS
} from '../constants/constants';

export const addReminder = (text, dueDate) => {
	let action = {
		type: ADD_REMINDER,
		text,
		dueDate
	};
	return action;
};

export const deleteReminder = id => {
	let action = {
		type: DELETE_REMINDER,
		id
	};
	return action;
};

export const clearAllReminders = () => {
	let action = {
		type: CLEAR_ALL_REMINDERS
	};
	return action;
};
