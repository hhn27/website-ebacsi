import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import logo from './assets/Icon/logo.png'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { orange } from '@mui/material/colors';
import Home from './components/Home';
import { width } from '@mui/system';
import logowhite from './assets/Icon/Website---eBacsi---final---cut_82.png'
import facebook from './assets/Icon/Website---eBacsi---final---cut_86.png'
import insta from './assets/Icon/Website---eBacsi---final---cut_88.png'
import youtube from './assets/Icon/Website---eBacsi---final---cut_90.png'
import copyright from './assets/Icon/Website---eBacsi---final---cut_96.png'
import categories from './data/CategoriesData';
import Category from './components/Category';
import ServicePack from './components/ServicePack';
import ServicePackDetail from './components/ServicePackDetail';
import NewsMainPage from './components/NewsMainPage';
import NewsByCategory from './components/NewsByCategory';
import NewsDetail from './components/NewsDetail';
import RegisterConsultPage from './components/RegisterConsultPage';
import hotline from './assets/Icon/hotline.png'
import reserve from './assets/Icon/Website---eBacsi---final---cut_14.png'
import messenger from './assets/Icon/Website---eBacsi---final---cut_07.png'
import zalo from './assets/Icon/Website---eBacsi---final---cut_10.png'
import servicePacks from './data/ServicePacksData';
import SubPage from './components/SubPage';
import Introduction from './components/Introduction';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

function App() {
  const color=orange[500];
  const [linkActive, setLinkActive] = useState(0);
  const handelLinkClick = (linkIndex) => {
    setLinkActive(linkIndex);
  }
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const openSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);

  }
  return (
    <>
    <Router basename="/website-ebacsi">
      <div>
        <nav>
            <div>
              <Link to="/" className={linkActive===1 ? 'active' : null} onClick={() => handelLinkClick(1)}> <img src={logo} alt='logo'></img> </Link>
            </div>
            <div className='nav-right'>
          {/* <div className='btn-sidebar'>  */}
            <div> <button className={sidebarIsOpen? 'toggle-btn toggle-btn-active' : 'toggle-btn'} onClick={openSidebar}> <HorizontalSplitIcon sx={{fontSize: 30}}></HorizontalSplitIcon> </button> </div>
          <ul className={sidebarIsOpen? 'nav-links nav-links-active' : 'nav-links'}>
            <li>
              <Link to="/gioithieu" className={linkActive===2 ? 'active' : null} onClick={() => handelLinkClick(2)}> Gi???i thi???u </Link>
            </li>
            <li className='medical-service'>
              <Link to="/cacgoidichvuyte" className={linkActive===3 ? 'active' : null} onClick={() => handelLinkClick(3)}> C??c g??i d???ch v??? y t??? </Link>
              <article className='medical-service-category'>
                <Link to="/cacgoidichvuyte"> <p> T???t c??? g??i kh??m </p> </Link>
                {servicePacks.map((servicePack) => {
                  return(
                      <div key={servicePack.id}>
                          <Link to={`/cacgoidichvuyte/${servicePack.id}`} > <p> {servicePack.title} </p> </Link>
                      </div>
                  );
                })}
              </article> 
            </li>
            <li>
              <Link to="/tintuc" className={linkActive===4 ? 'active' : null} onClick={() => handelLinkClick(4)}>Tin t???c </Link>
            </li>
            <li>
              <Link to="/dangkynhantuvan" className={linkActive===5 ? 'active' : null} onClick={() => handelLinkClick(5)}> ????ng k?? nh???n t?? v???n </Link>
            </li>
            </ul>
            {/* </div> */}
          
            <div className='cart'>
              <Link to="/giohang"> 
                <Badge badgeContent={2} sx={{
                                              "& .MuiBadge-badge": {
                                                color: "white",
                                                backgroundColor: color,
                                              }
                                            }}>
                    <ShoppingCartIcon className='li-cart' sx={{ color: "white", stroke: color, strokeWidth: 1, fontSize: 30}} />
                </Badge> 
              </Link>
            </div>
          
            <div> <button style={{fontSize: 16}}> Vi </button></div>
            </div>
        </nav>   

        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/gioithieu" element={<><SubPage title={`Gi???i thi???u`}/><Introduction/></>}>
            <></>
          </Route>
          <Route path="/cacgoidichvuyte" element={<><SubPage title={`C??c g??i d???ch v??? y t???`}/> <ServicePack/></>}>
          </Route>
          <Route path="/cacgoidichvuyte/:id" element={<><SubPage title={`C??c g??i d???ch v??? y t???`}/><ServicePackDetail/></>}>
          </Route>
          <Route path="/tintuc" element={<><SubPage title={`Tin t???c`}/><NewsMainPage/></>}>
          </Route>
          <Route path="/tintuc/:id" element={<><SubPage title={`Tin t???c`}/><NewsByCategory/></>}>
          </Route>
          <Route path="/tintuc/:category/:id" element={<><SubPage title={`Tin t???c`}/><NewsDetail/></>}>
          </Route>
          <Route path="/dangkynhantuvan" element={<><SubPage title={`????ng k?? nh???n t?? v???n`}/><RegisterConsultPage/></>}>
            <></>
          </Route>
          <Route path="/giohang">
            <></>
          </Route>
        </Routes>
        <footer>
        <nav className='footer-nav'>
              <div>
                <Link to="/"> <img src={logowhite} alt='logo'></img> </Link>
              </div>
              <ul>
                <li>
                  <Link to="/gioithieu"> Gi???i thi???u </Link>
                </li>
                <li>
                  <Link to="/cacgoidichvuyte"> C??c g??i d???ch v??? y t??? </Link>
                </li>
                <li>
                  <Link to="/tintuc">Tin t???c </Link>
                </li>
                <li>
                  <Link to="/dangkynhantuvan"> ????ng k?? nh???n t?? v???n </Link>
                </li>
              </ul>
          </nav>
          <div className='footer-container'>
            <div> 
              <h5 className='white uppercase'> T???ng c??ng ty truy???n th??ng (VNPT-Media)</h5>
              <p className='uppercase'> Gi???y ch???ng nh???n ????ng k?? doanh nghi???p s???: 0106873188 DO</p>
              <p className='uppercase'> S??? KH&DT H?? N???i c???p ng??y 12/06/2015</p>
            </div>
            <div className='footer-right-side'>
              <div>
                <h5 className='white uppercase'> ??i???u kho???n ch??nh s??ch v?? b???o m???t </h5>
                <p> ??i???u kho???n ho???t ?????ng </p>
                <p> Quy ?????nh thanh to??n </p>
                <p> Ch??nh s??ch b???o m???t th??ng tin </p>
              </div>
              <div >
                <h5 className='white uppercase'> K???t n???i v???i ch??ng t??i </h5>
                <img className='social-image' src={facebook}></img>
                <img className='social-image' src={insta}></img>
                <img className='social-image' src={youtube}></img>
                <div> <img src={copyright}></img> </div> 
              </div> 
            </div>
          </div>                                 
        </footer>

        <div className='btn-left-fixed'> 
          <img className='hotline' src={hotline}></img> 
          <img className='reserve' src={reserve}></img>
        </div>
        <div className='social-contact'>
            <img className='zalo' src={zalo}></img>
            <img className='messenger' src={messenger}></img>
        </div>
      </div>
    </Router>            
    </>
  );
}

export default App;
