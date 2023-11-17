import './ThirdStep.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ForwardBackButtons from '../ForwardBackButtons/ForwardBackButtons';
import StepTitle from '../StepTitle/StepTitle';

export default function ThirdStep({
	updateServiceInfo,
	selectedSliderOption,
	setSideBarStepNumber,
}) {
	const [selectedAddOns, setSelectedAddOns] = useState([]);
	const [serviceChosen, setServiceChosen] = useState([]);
	const stepNumber = 3;

	const addOnsInformation = [
		{
			id: 1,
			addOnsTitle: 'Online service',
			service: 'Access to multiplayer games',
			servicePricingMonthly: '1',
			servicePricingYearly: '10',
		},
		{
			id: 2,
			addOnsTitle: 'Larger storage',
			service: 'Extra 1TB of cloud save',
			servicePricingMonthly: '2',
			servicePricingYearly: '20',
		},
		{
			id: 3,
			addOnsTitle: 'Customizable Profile',
			service: 'Custom theme on your profile',
			servicePricingMonthly: '2',
			servicePricingYearly: '20',
		},
	];

	const toggleAddOn = (addOnId) => {
		if (selectedAddOns.includes(addOnId)) {
			setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId));

			const updatedServices = serviceChosen.filter(
				(service) => service.id !== addOnId
			);
			setServiceChosen(updatedServices);
		} else {
			setSelectedAddOns([...selectedAddOns, addOnId]);

			const selectedService = addOnsInformation.find(
				(service) => service.id === addOnId
			);
			setServiceChosen([...serviceChosen, selectedService]);
		}
	};

	const handleNextButtonClick = () => {
		updateServiceInfo(serviceChosen);
	};

	useEffect(() => {
		setSideBarStepNumber(stepNumber);
	});

	return (
		<>
			<div className="pick-add-ons-container">
				<div className="step-info-add-ons-container">
					<StepTitle
						heading={'Pick add-ons'}
						additionalInfo={'Add-ons help enhance your gaming experience.'}
					/>
					<div className="add-ons">
						{addOnsInformation.map((addOn) => {
							const isChecked = selectedAddOns.includes(addOn.id);
							return (
								<button
									key={addOn.id}
									onClick={() => toggleAddOn(addOn.id)}
									className={isChecked ? 'button-checked' : ''}
								>
									<div className="check-box-service-info-container">
										<input
											type="checkbox"
											checked={isChecked}
											onChange={() => toggleAddOn(addOn.id)}
										/>

										<div className="add-ons-info">
											<p className="add-ons-title">{addOn.addOnsTitle}</p>
											<p className="add-ons-service">{addOn.service}</p>
										</div>
									</div>

									<p className="add-ons-price">
										{selectedSliderOption == 'Monthly'
											? '+$' + addOn.servicePricingMonthly + '/mo'
											: '+$' + addOn.servicePricingYearly + '/yr'}
									</p>
								</button>
							);
						})}
					</div>
				</div>

				<ForwardBackButtons
					backButtonLink={'/step2'}
					backButtonText={'Go Back'}
					nextButtonLink={'/step4'}
					nextButtonText={'Next Step'}
					onNextButtonClick={handleNextButtonClick}
				/>
			</div>
		</>
	);
}

ThirdStep.propTypes = {
	updateServiceInfo: PropTypes.func,
	selectedSliderOption: PropTypes.any,
	setSideBarStepNumber: PropTypes.func,
};
