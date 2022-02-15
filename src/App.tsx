import React from 'react';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import JohnScott from './featurettes/john-scott/JohnScott';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <JohnScott/>
      </main>
      <Footer />
    </div >
  );
}

export default App;
