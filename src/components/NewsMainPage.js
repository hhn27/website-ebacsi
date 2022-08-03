import React, {useContext, useEffect, useState} from "react";
import news from "../data/NewsData";
import newsCategories from "../data/NewsCategoriesData";
import "./NewsMainPage.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import Loading from './Loading';

function NewsMainPage (){
    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);

    useEffect(() => {
        loading();
    }, [])

    if(isLoading){
        return(
            <Loading></Loading>
        )
    }
    else{
    return(
        <div className="news-list">
            <div className="link-title"> <Link to='/' className="blue"> Home </Link> <span className="blue">{`>>`} </span> <Link to='/tintuc' className="blue"> Tin tức </Link> </div>
            {newsCategories.map((newsCategory) => {
                const newsItems= news.filter((newsItem) => newsItem.category===newsCategory.name);
                return(
                    <div key={newsCategory.id} className="news-item-container">
                        <h4 className="news-category white uppercase text-center"> {newsCategory.name} </h4>
                        <Link to={`/tintuc/${newsCategory.id}`} className="seemore white"> Xem thêm </Link>
                        {newsItems.map((newsItem) => 
                        <div key={newsItem.id} className="news-category-container">
                            <img src={newsItem.image}></img>
                            <div className="text">
                                <Link to={`/tintuc/${newsCategory.id}/${newsItem.id}`}> <h5> {newsItem.title} </h5> </Link> 
                                <p> {newsItem.info} </p> 
                            </div>
                        </div>
                        )}
                    </div>
                )
            }
        )}
        </div>
    )
    }
}
export default NewsMainPage;