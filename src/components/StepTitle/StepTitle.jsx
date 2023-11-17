import './StepTitle.css';
import PropTypes from 'prop-types';

export default function StepTitle({ heading, additionalInfo }) {
	return (
		<div className="info">
			<p className="heading">{heading}</p>
			<p className="additional-info">{additionalInfo}</p>
		</div>
	);
}

StepTitle.propTypes = {
	heading: PropTypes.string,
	additionalInfo: PropTypes.string,
};
