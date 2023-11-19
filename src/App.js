import './App.css';
import './LandingComponents/Landing.css'
import Header from './LandingComponents/Header';
import Hero from './LandingComponents/Hero';
import SectionOne from './LandingComponents/SectionOne';
import SectionTwo from './LandingComponents/SectionTwo';
import SectionThree from './LandingComponents/SectionThree';
import SectionFour from './LandingComponents/SectionFour';
import FAQSection from './LandingComponents/FAQSection';
import Footer from './LandingComponents/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/> 
    <FAQSection/>
    <Footer/>
    </div>
  );
}

export default App;
