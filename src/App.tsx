import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import JohnScott from './featurettes/john-scott/JohnScott';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <JohnScott />
      </main>
      <Footer />
    </div >
  );
}

export default App;
