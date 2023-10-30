import './FormStepsSideBar.css';
import PropTypes from 'prop-types';
import SideBarBackgroundDesktop from '../../assets/images/bg-sidebar-desktop.svg';

export default function FormStepsSide({ className }) {
	return (
		<div className={`form-steps-side ${className}`}>
			<img src={SideBarBackgroundDesktop} alt="side-bar-background-img" />
		</div>
	);
}

FormStepsSide.propTypes = {
	className: PropTypes.string,
};
