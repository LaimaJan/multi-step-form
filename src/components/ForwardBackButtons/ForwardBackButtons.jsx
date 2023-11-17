import './ForwardBackButtons.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ForwardBackButtons({
	backButtonLink,
	backButtonText,
	nextButtonLink,
	nextButtonText,
	nextLinkClassName,
	nextButtonClassName,
	onNextButtonClick,
}) {
	return (
		<>
			<div className="plan-buttons">
				<button className="go-back-button">
					<Link to={backButtonLink}>{backButtonText}</Link>
				</button>

				<button
					className={`next-button ${nextButtonClassName}`}
					onClick={onNextButtonClick}
				>
					<Link
						to={nextButtonLink}
						className={nextLinkClassName}
						onClick={onNextButtonClick}
					>
						{nextButtonText}
					</Link>
				</button>
			</div>
		</>
	);
}

ForwardBackButtons.propTypes = {
	backButtonLink: PropTypes.string.isRequired,
	backButtonText: PropTypes.string.isRequired,
	nextButtonLink: PropTypes.string.isRequired,
	nextButtonText: PropTypes.string.isRequired,
	nextLinkClassName: PropTypes.string,
	nextButtonClassName: PropTypes.string,
	onNextButtonClick: PropTypes.func,
};
