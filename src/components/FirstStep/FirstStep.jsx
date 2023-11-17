import './FirstStep.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import StepTitle from '../StepTitle/StepTitle';

export default function FirstStep() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [nameAlert, setNameAlert] = useState(false);
	const [emailAlert, setEmailAlert] = useState(false);
	const [phoneAlert, setPhoneAlert] = useState(false);

	const handleNameChange = (e) => {
		const nameValue = e.target.value;
		setName(nameValue);

		if (!nameValue.trim()) {
			setNameAlert(true);
		} else {
			setNameAlert(false);
		}
	};

	const handleEmailChange = (e) => {
		const emailValue = e.target.value;
		setEmail(emailValue);

		if (!emailValue.includes('@')) {
			setEmailAlert(true);
		} else {
			setEmailAlert(false);
		}
	};

	const handlePhoneChange = (e) => {
		const phoneValue = e.target.value;
		setPhone(phoneValue);

		if (!phoneValue.trim()) {
			setPhoneAlert(true);
		} else {
			setPhoneAlert(false);
		}
	};

	return (
		<>
			<div className="form-container">
				<div className="personal-info-form">
					<StepTitle
						heading={'Personal info'}
						additionalInfo={
							'	Please provide your name, email address, and phone number.'
						}
					/>
					<div className="form-labels-inputs-container">
						<div className="labels-inputs">
							<div className="label-alert-container">
								<label>Name</label>
								{nameAlert ? (
									<p className="name-alert-hidden show">
										This field is required
									</p>
								) : (
									''
								)}
							</div>
							<input
								className={`${nameAlert === true ? 'name-alert' : ''}`}
								type="text"
								name="name"
								placeholder="Name"
								value={name}
								onChange={handleNameChange}
							/>
						</div>

						<div className="labels-inputs">
							<div className="label-alert-container">
								<label>Email Address</label>
								{emailAlert ? (
									<p className="email-alert-hidden show">
										This field is required
									</p>
								) : (
									''
								)}
							</div>
							<input
								className={`${emailAlert === true ? 'email-alert' : ''}`}
								type="email"
								name="email"
								placeholder="Email"
								value={email}
								onChange={handleEmailChange}
							/>
						</div>

						<div className="labels-inputs">
							<div className="label-alert-container">
								<label>Phone Number</label>
								{phoneAlert ? (
									<p className="phone-alert-hidden show">
										This field is required
									</p>
								) : (
									''
								)}
							</div>
							<input
								className={`${phoneAlert === true ? 'phone-alert' : ''}`}
								type="tel"
								name="phone"
								placeholder="e.g. +1234 567 890"
								value={phone}
								onChange={handlePhoneChange}
							/>
						</div>
					</div>
				</div>
				<div className="form-buttons">
					<button className="next-button">
						<Link
							to={'/step2'}
							className={name && email && phone ? '' : 'disabled-link'}
						>
							Next Step
						</Link>
					</button>
				</div>
			</div>
		</>
	);
}
