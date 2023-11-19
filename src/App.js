import './App.css';
import React from 'react';
import Header from './LandingComponents/Header';
import Hero from './LandingComponents/Hero';
import SectionOne from './LandingComponents/SectionOne';
import SectionTwo from './LandingComponents/SectionTwo';
import SectionThree from './LandingComponents/SectionThree';
import SectionFour from './LandingComponents/SectionFour';
import FAQSection from './LandingComponents/FAQSection';
import Footer from './LandingComponents/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './LandingComponents/Login';
import LoginFooter from './LandingComponents/LoginFooter';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <Hero/>
              <SectionOne/>
              <SectionTwo/>
             <SectionThree/>
             <SectionFour/> 
             <FAQSection/>
                 <Footer/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Login/>
              <LoginFooter/>
            </React.Fragment>
          }/>
      
        </Routes>
      </Router>
    </React.Fragment>
  //   <Router>
  //   <div className="App">
  //     <Routes>
  //     <Route path="/login" element={
  //           <React.Fragment>
  //             <Login/>
  //           </React.Fragment>
  //         }/>
  //     </Routes>
  //   </div>
  // </Router>
    // <div className="App">
    // <Header/>
    // <Hero/>
    // <SectionOne/>
    // <SectionTwo/>
    // <SectionThree/>
    // <SectionFour/> 
    // <FAQSection/>
    // <Footer/>
    // </div>
  );
}

export default App;
