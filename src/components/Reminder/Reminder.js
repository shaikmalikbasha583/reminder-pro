import React, { Component } from 'react';
import {
	addReminder,
	deleteReminder,
	clearAllReminders
} from '../../redux/actions/ReminderActions';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = state => {
	return {
		reminders: state
	};
};

class Reminder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		};
	}

	handleChange = e => {
		this.setState({ text: e.target.value });
	};

	handleAddReminder = () => {
		this.props.addReminder(this.state.text, this.state.dueDate);
		this.setState({ text: '' });
	};

	handleDeleteReminder = id => {
		this.props.deleteReminder(id);
	};

	handleClearAllReminders = () => {
		this.props.clearAllReminders();
	};

	renderReminderList = () => {
		const { reminders } = this.props;
		if (reminders.length === 0) return null;
		return (
			<div className='col-md-6 offset-md-3' style={{ marginTop: 20 }}>
				<ul className='list-group'>
					{reminders.map(reminder => (
						<li className='list-group-item' key={reminder.id}>
							<div>
								{reminder.text}
								<span style={{ textAlign: 'center', float: 'right' }}>
									<button
										className='btn btn-sm btn-danger'
										onClick={() => this.handleDeleteReminder(reminder.id)}>
										&#x2715;
									</button>
								</span>
								<p>{moment(new Date(reminder.dueDate)).fromNow()}</p>
							</div>
						</li>
					))}
				</ul>
				<div style={{ marginTop: 10, textAlign: 'center' }}>
					<button
						className='btn btn-info'
						onClick={this.handleClearAllReminders}>
						Clear All Reminders
					</button>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div className='row justify-row-content'>
				<div className='col-md-6 offset-md-3'>
					<div className='form-inline'>
						<input
							type='text'
							placeholder='I have to.'
							className='form-control'
							value={this.state.text}
							onChange={this.handleChange}
						/>
						&nbsp; &nbsp;
						<input
							type='datetime-local'
							className='form-control'
							onChange={e => this.setState({ dueDate: e.target.value })}
						/>
					</div>
					<div align='center' style={{ marginTop: 10 }}>
						<button
							className='btn btn-outline-success'
							onClick={this.handleAddReminder}>
							Add Reminder
						</button>
					</div>
				</div>
				{this.renderReminderList()}
			</div>
		);
	}
}

export default connect(mapStateToProps, {
	addReminder,
	deleteReminder,
	clearAllReminders
})(Reminder);
