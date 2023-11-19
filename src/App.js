import './App.css';
import './LandingComponents/Landing.css'
import Header from './LandingComponents/Header';
import Hero from './LandingComponents/Hero';
import SectionOne from './LandingComponents/SectionOne';
import SectionTwo from './LandingComponents/SectionTwo';
import SectionThree from './LandingComponents/SectionThree';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    {/* <SectionFour/>  */}
    </div>
  );
}

export default App;
