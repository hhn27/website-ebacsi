import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import newsCategories from "../data/NewsCategoriesData";
import news from "../data/NewsData";
import underline from '../assets/Icon/Website---eBacsi---final---cut_17.jpg'
import { Link } from "react-router-dom";
import "./NewsDetail.css";
import chevronleft from '../assets/Icon/Website---eBacsi---final---cut_65.png'
import chevronright from '../assets/Icon/Website---eBacsi---final---cut_68.png'
import { AppContext } from "../context";
import Loading from './Loading';

function NewsDetail() {
    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);
    
    useEffect(() => {
        loading();
    }, [])

    const {category, id} = useParams();
    const newsCategoryId = parseInt(category, 10);
    const newsId = parseInt(id, 10)
    const newsCategory = newsCategories.find((newsCt) => newsCt.id===newsCategoryId)
    const newsDetail = news.find((newsItem) => newsItem.id===newsId);
    let relatedNews= news.filter(ne => ne.category===newsCategory.name);
    if(relatedNews.length>=4){
        relatedNews = relatedNews.slice(0,4);
    }
    else{
        relatedNews= relatedNews.slice(0,relatedNews.length);
    }
    relatedNews = relatedNews.filter(reNe => reNe.id!==newsDetail.id);
    if(relatedNews.length===4){
        relatedNews = relatedNews.slice(0,3);
    }

    const suggestionNews = news.slice(0,6);
    const [index,setIndex] = useState(0);
    const [isNext,setIsNext] = useState(false);
    const [style,setStyle] = useState({transform: 'translateX(0)'});
    const sgRef = React.useRef();
    const sgSliRef = React.useRef();
    
    const handleRightClick = () => {
        let newIndex= index+1;
        if(newIndex>(suggestionNews.length-sgSliRef.current.offsetWidth/sgRef.current.offsetWidth)){
            newIndex= suggestionNews.length-Math.floor(sgSliRef.current.offsetWidth/sgRef.current.offsetWidth);
        }
        setIndex(newIndex);
        setStyle({transform: `translateX(-${newIndex*(sgRef.current.offsetWidth+15)}px)`,transition: 'transform 400ms'});
        setIsNext(true);
    }
    const handleLeftClick = () => {
        let newIndex= index-1;
        if(newIndex<0){
            newIndex=0;
        }
        setIndex(newIndex);
        setStyle({transform: `translateX(-${newIndex*(sgRef.current.offsetWidth+15)}px)`, transition: 'transform 400ms'}  );
        setIsNext(false);
    }

    if(isLoading){
        return(
            <Loading></Loading>
        )
    }
    else{
    return(
        <div className="news-detail-container">
            <div className="link-title"> <Link to='/' className="blue"> Home </Link > <span className="blue"> {`>>`} </span> <Link to='/tintuc' className="blue"> Tin tức </Link> <span className="blue"> {`>>`} </span> <span className="grey"> {newsCategory.name} </span> </div>
            <div className="title">
                <h4 className="uppercase"> {newsDetail.title} </h4>
                <div className="underline"> <img src={underline}></img> </div>
            </div>
            <div className="related-news">
                {relatedNews.map((reNe) => 
                    <p> {reNe.title} </p> 
                )}
            </div>
            <div>
                <p className="news-inf"> <strong> {newsDetail.info} </strong></p>
                <p> {newsDetail.detail} </p>
            </div>
            <div className="suggestion-news-slider" ref={sgSliRef}>
                <div className="suggestion-news-wrapper">
                    <div className="suggestion-news" style={style}>
                        {suggestionNews.map((snews) => {
                            const suggestionNewsCategory = newsCategories.find(newsCategory => newsCategory.name===snews.category);
                            return(
                                <article key={snews.id} ref={sgRef}>
                                    <img src={snews.image}></img>
                                    <div className="suggestion-news-text">
                                    <Link to={`/tintuc/${suggestionNewsCategory.id}/${snews.id}`}><h5>{snews.title} </h5> </Link>
                                    <p> {`${snews.info.slice(0,100)}...`} </p>
                                    <p className="blue"> {`Xem thêm >>`} </p>
                                    </div>
                                </article>
                            )
                        }
                        )}
                    </div>
                </div>
                <button className='chevron-left' onClick={handleLeftClick}> <img src={chevronleft}></img> </button>
                <button className='chevron-right' onClick={handleRightClick}> <img src={chevronright}></img> </button>
            </div>
        </div>
    )
    }
}
export default NewsDetail;