import { useState } from 'react';
import './FourthStep.css';

import { Link } from 'react-router-dom';

export default function FourthStep() {
	const [planInfo, setPlanInfo] = useState([
		{
			id: 1,
			planName: 'Arcade',
			planPricingMonth: '$9/mo',
			planPricingYearly: '$9/yr',
			planYearlyDeal: '2 months free',
		},
	]);
	const [servicesInfo, setServicesInfo] = useState([
		{
			id: 1,
			addOnsTitle: 'Online service',
			service: 'Access to multiplayer games',
			servicePricing: '+$1/mo',
		},
		{
			id: 3,
			addOnsTitle: 'Customizable Profile',
			service: 'Custom theme on your profile',
			servicePricing: '+$2/mo',
		},
	]);
	const [totalPrice, setTotalPrice] = useState('12');

	return (
		<>
			<div className="finishing-up-container">
				<div className="finishing-up-info-summary-container">
					<div className="finishing-up">
						<p className="info-heading">Finishing up</p>
						<p className="info">
							Double-check everything looks OK before confirming.
						</p>
					</div>
					<div className="total-pricing">
						<div className="plan-summary">
							<div className="plan-title-container">
								{planInfo.map((plan) => {
									return (
										<p className="plan-title" key={plan.id}>
											{plan.planName}{' '}
											{plan.planPricingMonth ? '(Monthly)' : '(Yearly)'}
										</p>
									);
								})}
								<p className="change-plan-title">
									<Link>Change</Link>
								</p>
							</div>

							<div className="plan-total-pricing">
								{planInfo.map((plan) => {
									return <p key={plan.id}>{plan.planPricingMonth}</p>;
								})}
							</div>
						</div>
						<hr className="horizontal-line" />
						<div className="other-services-pricing-container">
							{servicesInfo.map((service) => {
								return (
									<div className="services-container" key={service.id}>
										<p className="services-title">{service.addOnsTitle}</p>
										<p className="services-pricing">{service.servicePricing}</p>
									</div>
								);
							})}
						</div>
					</div>

					<div className="total-plan-services-pricing">
						{planInfo.map((plan) => {
							return (
								<p key={plan.id}>
									Total {plan.planPricingMonth ? '(per month)' : '(per year)'}
								</p>
							);
						})}

						{planInfo.map((plan) => {
							return (
								<p key={plan.id} className="total-price">
									+${totalPrice}
									{plan.planPricingMonth ? '/mo' : '/yr'}
								</p>
							);
						})}
					</div>
				</div>
				<div className="plan-buttons">
					<button className="go-back-button">
						<Link to={'/step3'}>Go Back</Link>
					</button>

					<button className="next-button">
						<Link to={'/step5'}>Confirm</Link>
					</button>
				</div>
			</div>
		</>
	);
}
