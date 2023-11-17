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
	const [sideBarStepNumber, setSideBarStepNumber] = useState(1);

	const updatePlanInfo = (newPlanInfo) => {
		setPlanInfo(newPlanInfo);
	};

	const updateServiceInfo = (newServiceInfo) => {
		setServiceInfo(newServiceInfo);
	};

	useEffect(() => {}, [
		planInfo,
		serviceInfo,
		selectedSliderOption,
		sideBarStepNumber,
	]);

	return (
		<div className="App">
			<SideBar sideBarStepNumber={sideBarStepNumber} />
			<Routes>
				<Route
					path="/"
					element={<FirstStep setSideBarStepNumber={setSideBarStepNumber} />}
				/>
				<Route
					path="/step2"
					element={
						<SecondStep
							updatePlanInfo={updatePlanInfo}
							selectedSliderOption={selectedSliderOption}
							setSelectedSliderOption={setSelectedSliderOption}
							setSideBarStepNumber={setSideBarStepNumber}
						/>
					}
				/>
				<Route
					path="/step3"
					element={
						<ThirdStep
							updateServiceInfo={updateServiceInfo}
							selectedSliderOption={selectedSliderOption}
							setSideBarStepNumber={setSideBarStepNumber}
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
							setSideBarStepNumber={setSideBarStepNumber}
						/>
					}
				/>
				<Route path="/step5" element={<FifthStep />} />
			</Routes>
		</div>
	);
}
