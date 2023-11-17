import { useState, useEffect } from 'react';
import './FourthStep.css';
import ForwardBackButtons from '../ForwardBackButtons/ForwardBackButtons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FourthStep({
	infoAboutPlan,
	infoAboutServices,
	selectedSliderOption,
}) {
	const [planInfo, setPlanInfo] = useState([]);
	const [servicesInfo, setServicesInfo] = useState([]);
	const [totalPrice, setTotalPrice] = useState('');

	const objectOfPlanInfo = planInfo;

	useEffect(() => {
		const countTotalPrice = () => {
			let price = 0;

			if (selectedSliderOption === 'Monthly') {
				const planPriceMonth = +planInfo.planPricingMonth || 0;

				const servicePriceMonth = servicesInfo.map((service) => {
					return +service.servicePricingMonthly || 0;
				});

				if (servicePriceMonth.length === 1) {
					price += planPriceMonth + servicePriceMonth[0];
				} else {
					price +=
						planPriceMonth +
						servicePriceMonth.reduce((acc, val) => acc + val, 0);
				}
			} else {
				const planPriceYearly = +planInfo.planPricingYearly || 0;

				const servicePriceYearly = servicesInfo.map((service) => {
					return +service.servicePricingYearly || 0;
				});

				if (servicePriceYearly.length === 1) {
					price += planPriceYearly + servicePriceYearly[0];
				} else {
					price +=
						planPriceYearly +
						servicePriceYearly.reduce((acc, val) => acc + val, 0);
				}
			}

			return price;
		};

		setPlanInfo(infoAboutPlan || []);
		setServicesInfo(infoAboutServices || []);
		setTotalPrice(countTotalPrice());
	}, [
		infoAboutPlan,
		infoAboutServices,
		selectedSliderOption,
		planInfo.planPricingMonth,
		planInfo.planPricingYearly,
		servicesInfo,
	]);

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
								<p className="plan-title">
									{objectOfPlanInfo.planName}{' '}
									{objectOfPlanInfo.planPricingMonth ? '(Monthly)' : '(Yearly)'}
								</p>

								<p className="change-plan-title">
									<Link to="/step2">Change</Link>
								</p>
							</div>
							<div className="plan-total-pricing">
								<p>
									{objectOfPlanInfo.planPricingMonth !== ''
										? '+$' + objectOfPlanInfo.planPricingMonth + '/mo'
										: '+$' + objectOfPlanInfo.planPricingYearly + '/yr'}
								</p>
							</div>
						</div>
						<hr className="horizontal-line" />
						<div className="other-services-pricing-container">
							{servicesInfo.map((service) => (
								<div className="services-container" key={service.id}>
									<p className="services-title">{service.addOnsTitle}</p>
									<p className="services-pricing">
										{selectedSliderOption === 'Monthly'
											? '+$' + service.servicePricingMonthly + '/mo'
											: '+$' + service.servicePricingYearly + '/yr'}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="total-plan-services-pricing">
						<p>
							Total{' '}
							{objectOfPlanInfo.planPricingMonth ? '(per month)' : '(per year)'}
						</p>

						<p className="total-price">
							+${totalPrice}
							{objectOfPlanInfo.planPricingMonth ? '/mo' : '/yr'}
						</p>
					</div>
				</div>

				<ForwardBackButtons
					backButtonLink={'/step3'}
					backButtonText={'Go Back'}
					nextButtonLink={'/step5'}
					nextButtonText={'Confirm'}
					nextButtonClassName={'confirm-button-link'}
				/>
			</div>
		</>
	);
}

FourthStep.propTypes = {
	infoAboutPlan: PropTypes.object,
	infoAboutServices: PropTypes.array,
	selectedSliderOption: PropTypes.any,
};
