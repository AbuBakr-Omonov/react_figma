import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';
import Featured from './components/featured/Featured';
import Most from './components/most/most';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Section/>
      <Featured />
      <Most/>
      <Footer/>


      
    </div>
  );
}

export default App;
