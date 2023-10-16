// components
// import Navbar from './components/Navbar';
// import Home from './components/Home';
import Footer from './components/Footer';
import PhotoSlide from './components/PhotoSlide';
// import Photo from './components/Photo';
//css
import './App.css';

//tmp
import img1 from "./components/testImg/img1.jpg"
import img2 from "./components/testImg/img2.jpg"


function App() {
  return (
    <div className="App">  
      {/* <Navbar /> */} 
      {/* <div style={ { "borderStyle": "dotted"} }><Navbar /></div>
      <div style={ { "borderStyle": "dotted"} }><Home /></div> */}
      {/* <div style={ { "borderStyle": "dotted"} }><Footer /></div> */}
      {/* <Footer /> */}
      {/* <div style={{"width" : "700px", "height" : "700px", "borderStyle": 'dashed'}}>
        <Photo img = {img2} />
      </div> */}
      {/* <div style={{"width" : "700px", "height" : "700px", "borderStyle": 'dashed'}}>
        <Photo img = {img1} />
      </div> */}
      <div style={{"width" : "700px", "height" : "400px", "borderStyle": 'dashed'}}>
        <PhotoSlide img = {[img1, img2]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;