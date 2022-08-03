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

function App() {
  const color=orange[500];
  const [linkActive, setLinkActive] = useState(0);
  const handelLinkClick = (linkIndex) => {
    setLinkActive(linkIndex);
  }
  return (
    <>
    <Router basename="/website-ebacsi">
      <div>
        <nav>
          <ul >
            <li>
              <Link to="/" className={linkActive===1 ? 'active' : null} onClick={() => handelLinkClick(1)}> <img src={logo} alt='logo'></img> </Link>
            </li>
            <li>
              <Link to="/gioithieu" className={linkActive===2 ? 'active' : null} onClick={() => handelLinkClick(2)}> Giới thiệu </Link>
            </li>
            <li className='medical-service'>
              <Link to="/cacgoidichvuyte" className={linkActive===3 ? 'active' : null} onClick={() => handelLinkClick(3)}> Các gói dịch vụ y tế </Link>
              <article className='medical-service-category'>
                <Link to="/cacgoidichvuyte"> <p> Tất cả gói khám </p> </Link>
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
              <Link to="/tintuc" className={linkActive===4 ? 'active' : null} onClick={() => handelLinkClick(4)}>Tin tức </Link>
            </li>
            <li>
              <Link to="/dangkynhantuvan" className={linkActive===5 ? 'active' : null} onClick={() => handelLinkClick(5)}> Đăng ký nhận tư vấn </Link>
            </li>
            <li> <button> Vi </button></li>
            <li className='cart'>
              <Link to="/giohang"> 
                <Badge badgeContent={2} sx={{
                                              "& .MuiBadge-badge": {
                                                color: "white",
                                                backgroundColor: color,
                                              }
                                            }}>
                    <ShoppingCartIcon sx={{ color: "white", stroke: color, strokeWidth: 1, fontSize: 30}} />
                </Badge> 
              </Link>
            </li>
          </ul>
        </nav>                                      
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/gioithieu" element={<><SubPage title={`Giới thiệu`}/><Introduction/></>}>
            <></>
          </Route>
          <Route path="/cacgoidichvuyte" element={<><SubPage title={`Các gói dịch vụ y tế`}/> <ServicePack/></>}>
          </Route>
          <Route path="/cacgoidichvuyte/:id" element={<><SubPage title={`Các gói dịch vụ y tế`}/><ServicePackDetail/></>}>
          </Route>
          <Route path="/tintuc" element={<><SubPage title={`Tin tức`}/><NewsMainPage/></>}>
          </Route>
          <Route path="/tintuc/:id" element={<><SubPage title={`Tin tức`}/><NewsByCategory/></>}>
          </Route>
          <Route path="/tintuc/:category/:id" element={<><SubPage title={`Tin tức`}/><NewsDetail/></>}>
          </Route>
          <Route path="/dangkynhantuvan" element={<><SubPage title={`Đăng ký nhận tư vấn`}/><RegisterConsultPage/></>}>
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
                  <Link to="/gioithieu"> Giới thiệu </Link>
                </li>
                <li>
                  <Link to="/cacgoidichvuyte"> Các gói dịch vụ y tế </Link>
                </li>
                <li>
                  <Link to="/tintuc">Tin tức </Link>
                </li>
                <li>
                  <Link to="/dangkynhantuvan"> Đăng ký nhận tư vấn </Link>
                </li>
              </ul>
          </nav>
          <div className='footer-container'>
            <div> 
              <h5 className='white uppercase'> Tổng công ty truyền thông (VNPT-Media)</h5>
              <p className='uppercase'> Giấy chứng nhận đăng ký doanh nghiệp số: 0106873188 DO</p>
              <p className='uppercase'> Sở KH&DT Hà Nội cấp ngày 12/06/2015</p>
            </div>
            <div className='footer-right-side'>
              <div>
                <h5 className='white uppercase'> Điều khoản chính sách và bảo mật </h5>
                <p> Điều khoản hoạt động </p>
                <p> Quy định thanh toán </p>
                <p> Chính sách bảo mật thông tin </p>
              </div>
              <div >
                <h5 className='white uppercase'> Kết nối với chúng tôi </h5>
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
