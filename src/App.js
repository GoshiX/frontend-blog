//libs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import PhotoSlide from './components/PhotoSlide';
// import Photo from './components/Photo';
// import Title from './components/Title';
// import PicTextBlock from './components/PicTextBlock';
// import Text from './components/Text';

//css
import './App.css';

//tmp_pics
// import img1 from "./components/testImg/img1.jpg"
// import img2 from "./components/testImg/img2.jpg"
// import img3 from "./components/testImg/img3.jpg"

//pages
import Resume from './pages/Resume/Resume';
import MainPage from './pages/MainPage/MainPage';
import BlockInfo from './pages/BlockInfo/BlockInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/resume' element={<Resume />} />
        <Route exact path='/block_info' element={<BlockInfo />} />
      </Routes>
    </Router>
  );
}

export default App;