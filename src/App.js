
import './App.css';
import Contact from './Contact';
import Feature from './Feature';
import Hero from './Hero';
import Navbar from './Navbar';
import Skills from './Skills';
import Testimonial from './Testimonial';


function App() {
  
  return (
    <div className="app">
     <Navbar />
     <div className="appContainer"><Hero />
     <div className="appContainerSmall"><Skills />
     <Contact />
     </div></div>
     <Feature />
     
     <Testimonial />
    </div>
  );
}

export default App;
