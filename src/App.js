// components
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Footer from './components/Footer';
import PhotoSlide from './components/PhotoSlide';
//css
import './App.css';


function App() {
  return (
    <div className="App">  
      {/* <Navbar /> */}
      {/* <div style={ { "borderStyle": "dotted"} }><Navbar /></div>
      <div style={ { "borderStyle": "dotted"} }><Home /></div> */}
      {/* <div style={ { "borderStyle": "dotted"} }><Footer /></div> */}
      {/* <Footer /> */}
      <div style={{"width" : "1000px", "height" : "400px"}}>
        <PhotoSlide />
      </div>
    </div>
  );
}

export default App;
