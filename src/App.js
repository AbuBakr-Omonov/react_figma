import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';
import Featured from './components/featured/Featured';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Section/>
      <Featured />
    </div>
  );
}

export default App;
