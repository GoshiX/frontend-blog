// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PhotoSlide from '../../components/PhotoSlide';
import Photo from '../../components/Photo';
import Title from '../../components/Title';
import PicTextBlock from '../../components/PicTextBlock';
import Text from '../../components/Text';
import Margin from '../../components/Margin';

import img1 from './TestPic/a.jpg';
import img2 from './TestPic/b.jpg';
import img3 from './TestPic/c.jpg';
import img4 from './TestPic/d.jpg';
import img5 from './TestPic/e.jpg';

const BlockInfo = () => {
    return (  
        <div> 
            <Text data={["Text block"]}/>
            <Text data={["<Text /> - Text block", "Props:", "data - string array - content info", "padding - css format(string) - object padding (deafault - 15px)"]}/>
            <div style={{border: 'solid'}}></div>

            <Navbar />
            <Text data={["<Navbar /> - Navbar", "Props:", "No"]}/>
            <div style={{border: 'solid'}}></div>

            <Title data="Title name" tags={["Tag1", "Lol"]}/>
            <Text data={["<Title /> - Title", "Props:", "data - string - title data", "tags - string array - array of tags"]}/>
            <div style={{border: 'solid'}}></div>

            <Photo img={img1} />
            <Text data={["<Photo /> - Photo", "Props:", "img - imageOgj - shown image"]}/>
            <div style={{border: 'solid'}}></div>

            <PhotoSlide img={[img1, img2, img3, img4, img5]} />
            <Text data={["<PhotoSlide /> - Many Photoes element", "Props:", "img - imageOgj array - shown images"]}/>
            <div style={{border: 'solid'}}></div>

            <PicTextBlock img={[img1, img3, img5]} data={["Cool pictures of Japan", "And sunset too)"]} />
            <Text data={["<PicTextBlock /> - Pictures+text", "Props:", "img - imageOgj array - shown images", "data - string array - content info"]}/>
            <div style={{border: 'solid'}}></div>

            <Margin val="50px" />
            <Text data={["<Margin /> - Space between blocks", "Props:", "val - css format(string) - margin val (deafault - 30px)"]}/>
            <div style={{border: 'solid'}}></div>

            <Footer />
            <Text data={["<Footer /> - Footer", "Props:", "No"]}/>
            <div style={{border: 'solid'}}></div>

            <Text data={[
                "More info:",
                "Use className='content' for all content"
            ]}/>
            <Margin />
            <Text data={[
                "TODO:",
                "Image counter",
                "Telegram connect",
                "Adaptive aerticle block (mobile/desktop)",
                "Change font",
                "center/align to props",
                "Add blocks for snabdart picture proportions",
                "404 page",
                "Intro animation CSS",
                "Bigger social links (mobile)",
            ]}/>
        </div>
    );
}
 
export default BlockInfo;