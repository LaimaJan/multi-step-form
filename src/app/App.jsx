import { Routes, Route } from 'react-router-dom';

import FirstStep from '../components/FirstStep/FirstStep';
import SecondStep from '../components/SecondStep/SecondStep';
import ThirdStep from '../components/ThirdStep/ThirdStep';
import FourthStep from '../components/FourthStep/FourthStep';
import FifthStep from '../components/FifthStep/FifthStep';
import SideBar from '../components/SideBar/SideBar';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<SideBar />
			<Routes>
				<Route path="/" element={<FirstStep />} />
				<Route path="/step2" element={<SecondStep />} />
				<Route path="/step3" element={<ThirdStep />} />
				<Route path="/step4" element={<FourthStep />} />
				<Route path="/step5" element={<FifthStep />} />
			</Routes>
		</div>
	);
}
