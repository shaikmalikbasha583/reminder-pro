import reminders from './reducers/reminderReducer';
import { createStore } from 'redux';

const store = createStore(
	reminders,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
