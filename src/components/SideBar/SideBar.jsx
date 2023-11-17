import './SideBar.css';
import PropTypes from 'prop-types';
import SideBarBackgroundDesktop from '../../assets/images/bg-sidebar-desktop.svg';

export default function SideBar({ sideBarStepNumber }) {
	return (
		<div className={`form-steps-side`}>
			<img src={SideBarBackgroundDesktop} alt="side-bar-background-img" />
			<div className="steps-card-container">
				<div className="first-step-container steps-container ">
					<div
						className={`step-round-number ${
							sideBarStepNumber === 1 ? 'active-step' : ''
						}`}
					>
						<p>1</p>
					</div>
					<div className="steps-info">
						<p className="step">Step 1</p>
						<p className="step-additional-info">Your Info</p>
					</div>
				</div>
				<div className="second-step-container steps-container">
					<div
						className={`step-round-number ${
							sideBarStepNumber === 2 ? 'active-step' : ''
						}`}
					>
						<p>2</p>
					</div>
					<div className="steps-info">
						<p className="step">Step 2</p>
						<p className="step-additional-info">Select Plan</p>
					</div>
				</div>
				<div className="third-step-container steps-container">
					<div
						className={`step-round-number ${
							sideBarStepNumber === 3 ? 'active-step' : ''
						}`}
					>
						<p>3</p>
					</div>
					<div className="steps-info">
						<p className="step">Step 3</p>
						<p className="step-additional-info">Add-ons</p>
					</div>
				</div>
				<div className="fourth-step-container steps-container">
					<div
						className={`step-round-number ${
							sideBarStepNumber === 4 ? 'active-step' : ''
						}`}
					>
						<p>4</p>
					</div>
					<div className="steps-info">
						<p className="step">Step 4</p>
						<p className="step-additional-info">Summary</p>
					</div>
				</div>
			</div>
		</div>
	);
}

SideBar.propTypes = {
	sideBarStepNumber: PropTypes.number,
};
