
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>

         <div className=' max-w-5xl mx-auto font-Poppins'> 
          <NavBar></NavBar>
          <Outlet></Outlet>  
           </div>

           <Footer></Footer>
           <Toaster></Toaster>
            
          
            
        </div>
    );
};

export default MainLayout;