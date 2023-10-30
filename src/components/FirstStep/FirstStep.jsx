import './FirstStep.css';
import FormStepsSideBar from '../FormStepsSideBar/FormStepsSideBar';

export default function FirstStep() {
	return (
		<>
			<div className="card personal-info-card">
				<FormStepsSideBar className={'first-step'} />
				<div className="form-buttons-container">
					<div className="personal-info-form">
						<div className="info">
							<p className="heading">Personal info</p>
							<p className="additional-info">
								Please provide your name, email address, and phone number.
							</p>
						</div>
						<div className="form-labels-inputs-container">
							<label>
								Name
								<input type="text" name="name" placeholder="Name" />
							</label>
							<label>
								Email Address
								<input type="email" name="email" placeholder="Email" />
							</label>
							<label>
								Phone Number
								<input
									type="tel"
									name="phone"
									placeholder="e.g. +1234 567 890"
								/>
							</label>
						</div>
					</div>
					<div className="form-buttons">
						<button className="first-step-next-button">Next Step</button>
					</div>
				</div>
			</div>
		</>
	);
}
