import './App.css';

import About from './components/About';
import Art from './components/Art';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Mint from './components/Mint';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import Story from './components/Story';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Story />
      <Mint />
      <Roadmap />
      <Art />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
