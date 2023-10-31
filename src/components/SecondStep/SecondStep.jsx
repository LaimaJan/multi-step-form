import { useState } from 'react';
import './SecondStep.css';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ProIcon from '../../assets/images/icon-pro.svg';

import FormStepsSideBar from '../FormStepsSideBar/FormStepsSideBar';

export default function SecondStep() {
	const [selectedOption, setSelectedOption] = useState('Monthly');
	console.log(selectedOption);

	const handleToggleChange = (event) => {
		const newValue = event.target.checked ? 'Yearly' : 'Monthly';
		setSelectedOption(newValue);
	};

	const planOptions = [
		{
			id: 1,
			planName: 'Arcade',
			planPricingMonth: '$9/mo',
			planPricingYearly: '$9/yr',
			planYearlyDeal: '2 months free',
			planIcon: ArcadeIcon,
		},
		{
			id: 2,
			planName: 'Advanced',
			planPricingMonth: '$12/mo',
			planPricingYearly: '$120/yr',
			planYearlyDeal: '2 months free',
			planIcon: AdvancedIcon,
		},
		{
			id: 3,
			planName: 'Pro',
			planPricingMonth: '$15/mo',
			planPricingYearly: '$150/yr',
			planYearlyDeal: '2 months free',
			planIcon: ProIcon,
		},
	];

	return (
		<>
			<div className="card select-plan-card">
				<FormStepsSideBar className={'second-step'} />
				<div className="select-plan-container">
					<div className="info">
						<p className="heading">Select your plan</p>
						<p className="additional-info">
							You have the option of monthly or yearly biling.
						</p>
					</div>
					<div className="plan-options">
						<div className="options">
							{planOptions.map((plan) => {
								return (
									<button key={plan.id}>
										<img src={plan.planIcon} alt="plan-icon" />
										<div className="plan-info">
											<p className="plan-name">{plan.planName}</p>
											<p className="plan-pricing">{plan.planPricingMonth}</p>
											<p className="plan-yearly-deal">{plan.planYearlyDeal}</p>
										</div>
									</button>
								);
							})}
						</div>

						<div className="toggle-switch">
							<p>Monthly</p>
							<label className="switch">
								<input type="checkbox" onChange={handleToggleChange} />
								<span className="slider round"></span>
							</label>
							<p>Yearly</p>
						</div>
					</div>
					<div className="plan-buttons">
						<button className="go-back-button">Go Back</button>

						<button className="next-button">Next Step</button>
					</div>
				</div>
			</div>
		</>
	);
}
