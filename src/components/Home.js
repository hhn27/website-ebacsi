import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import servicePacks from '../data/ServicePacksData';
import Feature from './Feature';
import image from '../assets/Icon/Banner 1 (1920x640).png'
import banner1 from '../assets/Icon/Banner 2 Tong dai.jpg'
import banner2 from '../assets/Icon/Banner 2.jpg'
import iphone from '../assets/Icon/Iphone.png'
import underline from '../assets/Icon/Website---eBacsi---final---cut_17.jpg'
import './Home.css'
import Operation from './Operation';
import operations from '../data/OperationsData';
import advantages from '../data/AdvantagesData';
import Advantage from './Advantage';
import banner3 from '../assets/Icon/Banner 3.jpg'
import chevronleft from '../assets/Icon/Website---eBacsi---final---cut_65.png'
import chevronright from '../assets/Icon/Website---eBacsi---final---cut_68.png'
import underline1 from '../assets/Icon/Website---eBacsi---final---cut_61.png'
import hospitals from '../data/HospitalsData';
import Hospital from './Hospital';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import doctors from '../data/DoctorsData';
import Doctor from './Doctor';
import banner4 from '../assets/Icon/Banner 4.jpg'
import qr from '../assets/Icon/qrApp.png'
import googleplay from '../assets/Icon/Website---eBacsi---final---cut_77.png'
import appstore from '../assets/Icon/Website---eBacsi---final---cut_79.png'
import feedbacks from '../data/FeedbackData';
import ReactPlayer from 'react-player';
import news from '../data/NewsData';
import News from './News';
import banners from '../data/BannersData';
import CircleIcon from '@mui/icons-material/Circle';
import { AppContext } from "../context";
import Loading from './Loading';
import newsCategories from '../data/NewsCategoriesData';

function Home() {
    const [index, setIndex] = useState(0);
    const [featureIndex, setFeatureIndex] = useState(0);
    const featuresDisplay = servicePacks.slice(featureIndex, featureIndex+3);
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    

    const [index3, setIndex3] = useState(0);
    const feedbackLeftIndex  = index3==0 ? feedbacks.length-1 : index3-1;
    const feedbackRightIndex= index3===feedbacks.length-1 ? 0 : index3+1;
    const [isNext, setIsNext]= useState(true);
    const [style1,setStyle1] = useState({transform: 'translateX(0)'});
    const [style2,setStyle2] = useState({transform: 'translateX(0)'});
    const latestNewsCategory= newsCategories.find(newsCt => newsCt.name === news[0].category);

    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);

    useEffect(() => {
        loading();
    }, [])
    const hoRef = React.useRef();
    const hosliRef = React.useRef();
    const hospitalHandleRightClick = () => {
        let newIndex= index1+1;
        if(newIndex>( hospitals.length- hosliRef.current.offsetWidth/hoRef.current.offsetWidth)){
            newIndex=hospitals.length - Math.floor(hosliRef.current.offsetWidth/hoRef.current.offsetWidth);
        }
        setIndex1(newIndex);
        setStyle1({transform: `translateX(-${newIndex*(hoRef.current.offsetWidth+15)}px)`,transition: 'transform 400ms'});
        setIsNext(true);
    }
    const hospitalHandleLeftClick = () => {
        let newIndex= index1-1;
        if(newIndex<0){
            newIndex=0;
        }
        setIndex1(newIndex);
        setStyle1({transform: `translateX(-${newIndex*(hoRef.current.offsetWidth+15)}px)`, transition: 'transform 400ms'}  );
        setIsNext(false);
    }

    const doRef= React.useRef()
    const doctorHandleRightClick = () => {
        let newIndex= index2+1;
        if(newIndex>doctors.length-2){
            newIndex= doctors.length-2;
        }
        setIndex2(newIndex);
        setStyle2({transform: `translateX(-${newIndex*(doRef.current.offsetWidth+15)}px)`,transition: 'transform 400ms'});
        setIsNext(true);
    }
    const doctorHandleLeftClick = () => {
        let newIndex= index2-1;
        if(newIndex<0){
            newIndex=0;
        }
        setIndex2(newIndex);
        setStyle2({transform: `translateX(-${newIndex*(doRef.current.offsetWidth+15)}px)`, transition: 'transform 400ms'}  );
        setIsNext(false);
    }

    const pre3 = () =>{
        setIndex3((index3) => {
            let newIndex = index3 - 1;
            if(newIndex<0)
                return feedbacks.length-1;
            return newIndex;
        });
        setIsNext(false);
    }  
    const next3 = () =>{
        setIndex3((index3) => {
            let newIndex = index3 + 1;
            if(newIndex>feedbacks.length-1)
                return 0;
            return newIndex;
        });
        setIsNext(true);
    }
    const [indexBanner,setIndexBanner] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(indexBanner);
            setIndexBanner((indexBanner) => {
                let newIndex = indexBanner+1;
                if(newIndex>1)
                    return 0;
                return newIndex;
            })
        }
            , 8000);
        return () => clearInterval(interval);
    }, [indexBanner]);
    let dotArray = new Array();
    let i=0;
    for (i=0; i<=banners.length-1; i++) dotArray.push(i);

    if(isLoading){
        return(
            <Loading></Loading>
        )
    }
    else{
    return(
        <>
        <div className='banner-container'>
            <div className='banner-wrapper'>
                <TransitionGroup>
                    <CSSTransition
                    key={indexBanner}
                    timeout= {3000}
                    classNames="banner">
                        <img src={banners[indexBanner].image} alt='banner'></img>
                        {/* <img className='banner2' src={banner1} alt='banner2'></img> */}
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <div className='dot-container'>
                {dotArray.map((dotindx) => (
                    <CircleIcon key={dotindx} className={indexBanner===dotindx? "dot-active blue" : "dot-notactive"}></CircleIcon> 
                )
                )}
            </div>
        </div>
        <div className='feature-container'>
            <div className='title'>
                <h3> S???n ph???m - D???ch v??? n???i b???t </h3>
                <Link to="/cacgoidichvuyte"> Xem th??m </Link>
                <div className="underline"><img src={underline}></img></div>
            </div>
            <div className='feature-info'>
                <Feature features={featuresDisplay}></Feature>
            </div>
        </div>

        <div className='operation-relative'>
            <img className='banner2' src={banner2} alt='banner2'></img>
            <div className='operation-components'>
                <div className='operation-container'>
                    <img className='iphone' src={iphone} alt='iphone'></img>
                    <p className='operation-title large white'> <b>VNPT eBacSi</b> - Ch??m s??c s???c kh???e to??n di???n m???i n??i, m???i l??c</p>
                    <div className='operation-info'>
                        <Operation operations={operations}></Operation>
                    </div>
                    <div className='button'><button className='primary'> T??m hi???u ngay m?? h??nh ho???t ?????ng </button> </div>
                </div>
            </div>
        </div>
        
        <div className='advantage-container'>
            <div className='title'>
                <p className='text-center large blue'> <b> VNPT eBacsi </b> - Gi??p vi???c ch??m s??c s???c kh???e ????n gi???n v?? g???n g??i h??n </p>
                <div className="underline"><img src={underline}></img></div>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet turpis quis consectetur posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet turpis quis consectetur posuere.</p>
            <div className='advantage-info'>
                <Advantage advantages={advantages}></Advantage>
            </div>
        </div>

        <div className='network-relative'>
            <img className='banner3' src={banner3} alt='banner3'></img>
            <div className='network-components'>
                <div className='network-container'>
                    <div className='title'>
                        <p className='large white'> M???ng l?????i y t??? <b> VNPT eBacsi </b> - ?????t l???ch kh??m v???i </p>
                        <div className="underline"><img src={underline1}></img></div>
                    </div>
                    <div className='number-employee'>
                        <div>
                            <h3 className='h3-white'> <b> 36 </b> </h3>
                            <h4 className='h4-white'> B???nh vi???n </h4>
                        </div>
                        <div>
                            <h3 className='h3-white'> <b> 369 </b>  </h3>
                            <h4 className='h4-white'> B??c s?? </h4>
                        </div>
                        <div>
                            <h3 className='h3-white'> <b> 986 </b> </h3>
                            <h4 className='h4-white'> Nh??n vi??n y t??? </h4>
                            <p className='p-white'> lu??n s???n s??ng h??? tr??? </p> 
                        </div>
                    </div>
                    <div className='hospital-slider' ref={hosliRef}>
                        <div className='hospital-wrapper'>
                        
                                <div className='hospital-info' style={style1} >
                                {hospitals.map((hospital) => {
                                    const {id, image} = hospital;
                                    return(
                                        <article key={id} className="hospital" ref={hoRef}>
                                        <img src={image}></img>
                                        </article>
                                    );
                                })}
                                </div>
        
                        </div>
                        <button className='chevron-left' onClick={hospitalHandleLeftClick}> <img src={chevronleft}></img> </button>
                        <button className='chevron-right' onClick={hospitalHandleRightClick}> <img src={chevronright}></img> </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='doctor-container'>
            <div className='title'>
                <div>
                    <h3> ?????i ng?? b??c s?? ??u t?? </h3>
                    <div className="underline"><img src={underline}></img></div>
                </div>
                <Link to="/bacsi"> Xem th??m </Link>
            </div>
            <div className='doctor-grid'>
                <p> ?????i ng?? b??c s?? ??u t?? v???i th??m ni??m trung b??nh 10+ n??m kinh nghi???m
                    hi???n c??ng t??c t???i c??c b???nh vi???n h??ng ?????u Vi???t Nam, th??m kh??m chuy??n khoa ??a d???ng
                    , t???n t??m ch??m s??c b???n v?? gia ????nh.
                </p>
                <div className='doctor-relative'>
                    <div className='doctor-wrapper'>
                        
                                <div className='doctor-info' style={style2}>
                                {doctors.map((doctor) => {
                                    const {id, image, name, info} = doctor;
                                    return(
                                        <article key={id} className="doctor" ref={doRef}>
                                        <img src={image}></img>
                                        <h4> {name} </h4>
                                        <p> {info }</p>
                                        </article>
                                    );
                                })}
                                </div>
                            
                    </div>
                    <button className='chevron-left' onClick={doctorHandleLeftClick}> <img src={chevronleft}></img> </button>
                    <button className='chevron-right' onClick={doctorHandleRightClick}> <img src={chevronright}></img> </button>
                </div>
            </div>
        </div>

        <div className='app-feed-relative'>
            <img className='banner4' src={banner4} alt='banner4'></img>
            <div className='app-absolute'>
                <div className='app-container'>
                    <div className="video-player">
                        <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=vtJLQBnLmrA" playing={false} controls={true} >
                        </ReactPlayer>
                    </div>
                    <div className='download'>
                        <img src={qr}></img>
                        <h4> T???i ???ng d???ng ngay </h4>
                        <img src={googleplay}></img>
                        <img src={appstore}></img>
                    </div>
                </div>
            </div>
            <div className='feedback-components'>
                <article className='feedback-container'>
                    <div className='title'>
                        <p className='text-center large blue'> Kh??ch h??ng n??i g?? v??? <b> VNPT eBacsi </b> ?????t l???ch kh??m v???i </p>
                        <div className="underline"><img src={underline}></img></div>
                    </div>
                    <div className='feedback-slider'>
                        <div className='feedback-wrapper'>
                            <TransitionGroup childFactory={child => React.cloneElement(child, { classNames: isNext ? "next-feed" : "pre-feed", timeout: 500 })}>
                                <CSSTransition
                                    key={index3}
                                    timeout={100}
                                    
                                >
                                <div className='feedback-info'>
                                    <div className='feedback-image'>
                                    <img className ='img-left' src={feedbacks[feedbackLeftIndex].image}></img>
                                    <img className='feedback' src={feedbacks[index3].image}></img>
                                    {/* <Feedback feedback={feedbacks[index]} > </Feedback> */}
                                    <img className = 'img-right' src={feedbacks[feedbackRightIndex].image}></img>
                                    </div>
                                    <p> {feedbacks[index3].info} </p>
                                </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                    <button className='chevron-left' onClick={pre3}> <img src={chevronleft}></img> </button>
                    <button className='chevron-right' onClick={next3}> <img src={chevronright}></img> </button>
                </article>
            </div>
        </div>

        <div className='news-container'>
            <div className='title'>
                <h3> Tin t???c </h3>
                <Link to="/tintuc"> Xem th??m </Link>
                <div className="underline"><img src={underline}></img></div>
            </div>
            <div className='news-info'>
                <div className='latestNews'>
                    <img src={news[0].image}></img>
                    <Link to={`/tintuc/${latestNewsCategory.id}/${news[0].id}`}> <h4> {news[0].title} </h4> </Link>
                    <p> {news[0].info} </p>
                </div>
                <div className='right-side-news'><News news={news.slice(1,4)}></News></div>
            </div>
        </div>
        </>
    )
    }
}
export default Home