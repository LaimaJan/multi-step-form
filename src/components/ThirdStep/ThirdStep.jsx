import './ThirdStep.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ThirdStep() {
	const [selectedAddOns, setSelectedAddOns] = useState([]);
	console.log(selectedAddOns);

	const addOnsInformation = [
		{
			id: 1,
			addOnsTitle: 'Online service',
			service: 'Access to multiplayer games',
			servicePricing: '+$1/mo',
		},
		{
			id: 2,
			addOnsTitle: 'Larger storage',
			service: 'Extra 1TB of cloud save',
			servicePricing: '+$2/mo',
		},
		{
			id: 3,
			addOnsTitle: 'Customizable Profile',
			service: 'Custom theme on your profile',
			servicePricing: '+$2/mo',
		},
	];

	const toggleAddOn = (addOnId) => {
		if (selectedAddOns.includes(addOnId)) {
			setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId));
		} else {
			setSelectedAddOns([...selectedAddOns, addOnId]);
		}
	};

	return (
		<>
			<div className="pick-add-ons-container">
				<div className="step-info-add-ons-container">
					<div className="step-info">
						<p className="info-heading">Pick add-ons</p>
						<p className="info">Add-ons help enhance your gaming experience.</p>
					</div>
					<div className="add-ons">
						{addOnsInformation.map((addOn) => {
							const isChecked = selectedAddOns.includes(addOn.id);
							return (
								<button key={addOn.id} onClick={() => toggleAddOn(addOn.id)}>
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

									<p className="add-ons-price">{addOn.servicePricing}</p>
								</button>
							);
						})}
					</div>
				</div>
				<div className="plan-buttons">
					<button className="go-back-button">
						<Link to={'/step2'}>Go Back</Link>
					</button>

					<button className="next-button">
						<Link to={'/step4'}>Next Step</Link>
					</button>
				</div>
			</div>
		</>
	);
}
