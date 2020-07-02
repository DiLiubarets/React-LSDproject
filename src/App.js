import React from 'react';
import './App.css';
import AppBar from './components/navbar/navbar';
import MyChart from './components/chart/chart';
import DropDown from './components/dropDown/dropDown';
import News from './components/news/news';
import AboutLSD from './components/AboutLSD/AboutLSD';
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <AppBar/>
      </header>
      <div className="mui-row" id="mui-row">
       <MyChart/>
       <DropDown/>
      </div>
      <News/>
      <AboutLSD/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
