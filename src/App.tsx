import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Web from './pages/web/Web';
import Hardware from './pages/hardware/Hardware';
import Production from './pages/production/Production';

const App = () => {
	return (
		<div className="App">
			<Header />
			<main>
				<Home />
				{/* <Web />
				<Hardware />
				<Production /> */}
			</main>
			<Footer />
		</div >
	);
}

export default App;
