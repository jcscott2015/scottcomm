import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import JohnScott from './featurettes/john-scott/JohnScott';
import Contact from './featurettes/contact/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <JohnScott />
        <Contact />
      </main>
      <Footer />
    </div >
  );
}

export default App;
