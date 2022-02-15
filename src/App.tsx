import React from 'react';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import JohnScott from './featurettes/john-scott/JohnScott';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <JohnScott/>
      </main>
      <Footer />
    </div >
  );
}

export default App;
