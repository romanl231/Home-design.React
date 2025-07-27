import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout: React.FC = () => {
  return (
            <>
            <Header />

            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                  <Outlet />
                </main>
            </div>
            
            <Footer/>
            </>
  );
};

export default Layout;