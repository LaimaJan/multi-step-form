import { useState } from 'react';
import './SecondStep.css';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ProIcon from '../../assets/images/icon-pro.svg';
import ForwardBackButtons from '../ForwardBackButtons/ForwardBackButtons';
import StepTitle from '../StepTitle/StepTitle';
import PropTypes from 'prop-types';

export default function SecondStep({
	updatePlanInfo,
	selectedSliderOption,
	setSelectedSliderOption,
}) {
	const [planChosen, setPlanChosen] = useState({
		id: '',
		planName: '',
		planPricingMonth: '',
		planPricingYearly: '',
		planYearlyDeal: '',
		monthlyOrYearly: '',
	});

	const planOptions = [
		{
			id: 1,
			planName: 'Arcade',
			planPricingMonth: '9',
			planPricingYearly: '90',
			planYearlyDeal: '2 months free',
			planIcon: ArcadeIcon,
		},
		{
			id: 2,
			planName: 'Advanced',
			planPricingMonth: '12',
			planPricingYearly: '120',
			planYearlyDeal: '2 months free',
			planIcon: AdvancedIcon,
		},
		{
			id: 3,
			planName: 'Pro',
			planPricingMonth: '15',
			planPricingYearly: '150',
			planYearlyDeal: '2 months free',
			planIcon: ProIcon,
		},
	];

	const handleNextButtonClick = () => {
		updatePlanInfo(planChosen);
	};

	const handleToggleChange = (event) => {
		const newValue = event.target.checked ? 'Yearly' : 'Monthly';
		setSelectedSliderOption(newValue);
	};

	const selectPlan = (plan) => {
		if (selectedSliderOption === 'Monthly') {
			setPlanChosen({
				...planChosen,
				id: plan.id,
				planName: plan.planName,
				planPricingMonth: plan.planPricingMonth,
				planPricingYearly: '',
				planYearlyDeal: '',
				monthlyOrYearly: selectedSliderOption,
			});
		} else {
			setPlanChosen({
				...planChosen,
				id: plan.id,
				planName: plan.planName,
				planPricingMonth: '',
				planPricingYearly: plan.planPricingYearly,
				planYearlyDeal: plan.planYearlyDeal,
				monthlyOrYearly: selectedSliderOption,
			});
		}
	};

	console.log(selectedSliderOption);

	return (
		<>
			<div className="select-plan-container">
				<div className="title-plan-container">
					<StepTitle
						heading={'Select your plan'}
						additionalInfo={'You have the option of monthly or yearly biling.'}
					/>
					<div className="plan-options">
						<div className="options">
							{planOptions.map((plan) => {
								return (
									<button key={plan.id} onClick={() => selectPlan(plan)}>
										<img src={plan.planIcon} alt="plan-icon" />
										<div className="plan-info">
											<p className="plan-name">{plan.planName}</p>
											<p className="plan-pricing">
												{selectedSliderOption === 'Yearly'
													? '+$' + plan.planPricingYearly + '/yr'
													: '+$' + plan.planPricingMonth + '/mo'}
											</p>

											<p
												className={`plan-yearly-deal ${
													selectedSliderOption === 'Yearly' ? 'show' : ''
												}`}
											>
												{plan.planYearlyDeal}
											</p>
										</div>
									</button>
								);
							})}
						</div>

						<div className="toggle-switch">
							<p
								className={`${
									selectedSliderOption === 'Monthly'
										? 'toggle-switch-month'
										: ''
								}`}
							>
								Monthly
							</p>
							<label className="switch">
								<input type="checkbox" onChange={handleToggleChange} />
								<span className="slider round"></span>
							</label>
							<p
								className={`${
									selectedSliderOption === 'Yearly' ? 'toggle-switch-month' : ''
								}`}
							>
								Yearly
							</p>
						</div>
					</div>
				</div>

				<ForwardBackButtons
					backButtonLink={'/'}
					backButtonText={'Go Back'}
					nextButtonLink={'/step3'}
					nextButtonText={'Next Step'}
					nextLinkClassName={planChosen.id ? '' : 'disabled-link'}
					onNextButtonClick={handleNextButtonClick}
				/>
			</div>
		</>
	);
}

SecondStep.propTypes = {
	updatePlanInfo: PropTypes.func,
	selectedSliderOption: PropTypes.string,
	setSelectedSliderOption: PropTypes.any,
};
