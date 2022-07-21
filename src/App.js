import './App.css';
import { Navbar, Banner, Skills, Projects, Footer } from './components';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
