import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import SocialMedia from './components/SocialMedia';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <Header/>
      <SocialMedia/>
      <Education/>
      <WorkExperience/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
