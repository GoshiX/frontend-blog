// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import PhotoSlide from './components/PhotoSlide';
// import Photo from './components/Photo';
import Title from './components/Title';
//css
import './App.css';

//tmp
// import img1 from "./components/testImg/img1.jpg"
// import img2 from "./components/testImg/img2.jpg"
// import img3 from "./components/testImg/img3.jpg"


function App() {
  return (
    <div className="App">  
      <Navbar /> 
      <div className='content'>
        <Title tags={["lol", "kek"]} data="Резюме" />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;