import 'swiper/swiper.min.css';
import "boxicons";
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';


import Routes from './config/Routes';

function App() {
    return (
      <BrowserRouter>
          <Route render={props => (
             <>
            <Header {...props} />
             <Routes />
             <Footer />
             </>
          )}/>
      </BrowserRouter>
     
    );
}

export default App;
