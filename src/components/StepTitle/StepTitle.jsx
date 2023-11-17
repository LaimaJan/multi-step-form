import './StepTitle.css';

export default function StepTitle({ heading, additionalInfo }) {
	return (
		<div className="info">
			<p className="heading">{heading}</p>
			<p className="additional-info">{additionalInfo}</p>
		</div>
	);
}
