import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
// import bgphoto from './assets/Images/aboutme.png';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
