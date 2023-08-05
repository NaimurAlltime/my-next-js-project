import Footer from '@/components/HomeSection/Footer/Footer';
import Navbar from '@/components/HomeSection/Navbar/Navbar';

const WithLayout = ({ children }) => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Navbar></Navbar>
              {children}
           <Footer></Footer>
        </div>
    );
};

export default WithLayout;