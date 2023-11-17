import { Routes, Route } from 'react-router-dom';

import FirstStep from '../components/FirstStep/FirstStep';
import SecondStep from '../components/SecondStep/SecondStep';
import ThirdStep from '../components/ThirdStep/ThirdStep';
import FourthStep from '../components/FourthStep/FourthStep';
import FifthStep from '../components/FifthStep/FifthStep';
import SideBar from '../components/SideBar/SideBar';
import './App.css';
import { useEffect } from 'react';

import { useState } from 'react';

export default function App() {
	const [planInfo, setPlanInfo] = useState();
	const [serviceInfo, setServiceInfo] = useState();
	const [selectedSliderOption, setSelectedSliderOption] = useState('Monthly');

	const updatePlanInfo = (newPlanInfo) => {
		setPlanInfo(newPlanInfo);
	};

	const updateServiceInfo = (newServiceInfo) => {
		setServiceInfo(newServiceInfo);
	};

	useEffect(() => {}, [planInfo, serviceInfo, selectedSliderOption]);

	return (
		<div className="App">
			<SideBar />
			<Routes>
				<Route path="/" element={<FirstStep />} />
				<Route
					path="/step2"
					element={
						<SecondStep
							updatePlanInfo={updatePlanInfo}
							selectedSliderOption={selectedSliderOption}
							setSelectedSliderOption={setSelectedSliderOption}
						/>
					}
				/>
				<Route
					path="/step3"
					element={
						<ThirdStep
							updateServiceInfo={updateServiceInfo}
							selectedSliderOption={selectedSliderOption}
						/>
					}
				/>
				<Route
					path="/step4"
					element={
						<FourthStep
							infoAboutPlan={planInfo}
							infoAboutServices={serviceInfo}
							selectedSliderOption={selectedSliderOption}
							// countTotalPrice={countTotalPrice}
						/>
					}
				/>
				<Route path="/step5" element={<FifthStep />} />
			</Routes>
		</div>
	);
}
