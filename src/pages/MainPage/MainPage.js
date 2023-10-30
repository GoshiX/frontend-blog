import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Text from '../../components/Text';

const MainPage = () => {
    return ( 
        <div> 
            <Navbar />
            <div className='content'>
                <Text data={["Главная страница находится в разработке"]} />
            </div>
            <Footer />
        </div>
     );
}
 
export default MainPage;