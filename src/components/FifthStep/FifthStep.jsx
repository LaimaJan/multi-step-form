import './FifthStep.css';
import ThankYouIcon from '../../assets/images/icon-thank-you.svg';

export default function FifthStep() {
	return (
		<>
			<div className="thank-you-container">
				<img src={ThankYouIcon} alt="thank-you-icon" />
				<p className="thank-you-title">Thank you!</p>
				<p className="thank-you-support-message">
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					ar support@loremgaming.com.
				</p>
			</div>
		</>
	);
}
