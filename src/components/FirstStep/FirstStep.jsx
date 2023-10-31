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
							<div className="labels-inputs">
								<div className="label-alert-container">
									<label>Name</label>
									<p className="name-alert alert">This field is required</p>
								</div>
								<input
									// className="on-alert"
									type="text"
									name="name"
									placeholder="Name"
								/>
							</div>

							<div className="labels-inputs">
								<div className="label-alert-container">
									<label>Email Address</label>
									<p className="name-alert alert">This field is required</p>
								</div>
								<input
									// className="on-alert"
									type="email"
									name="email"
									placeholder="Email"
								/>
							</div>

							<div className="labels-inputs">
								<div className="label-alert-container">
									<label> Phone Number</label>
									<p className="name-alert alert">This field is required</p>
								</div>
								<input
									// className="on-alert"
									type="tel"
									name="phone"
									placeholder="e.g. +1234 567 890"
								/>
							</div>
						</div>
					</div>
					<div className="form-buttons">
						<button className="next-button">Next Step</button>
					</div>
				</div>
			</div>
		</>
	);
}
