import { Routes, Route } from 'react-router-dom';

import FirstStep from '../components/FirstStep/FirstStep';
import SecondStep from '../components/SecondStep/SecondStep';
import SideBar from '../components/SideBar/SideBar';
import './App.css';

export default function App() {
	// You can add the current step state if needed

	return (
		<div className="App">
			<SideBar />
			<Routes>
				<Route path="/" element={<FirstStep />} />
				<Route path="/step2" element={<SecondStep />} />
			</Routes>
		</div>
	);
}
