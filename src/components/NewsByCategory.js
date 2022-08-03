import React, { useState } from "react";
import './NewsByCategory.css'
import news from "../data/NewsData";
import newsCategories from "../data/NewsCategoriesData";
import { Link, useParams } from "react-router-dom";


function NewsByCategory() {
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage=5;
    const {id} = useParams();
    const newsCategoryId = parseInt(id, 10);
    const newsCategory = newsCategories.find((newsCt) => newsCt.id===newsCategoryId)
    const itemsByCategory = news.filter((newsItem) => newsItem.category===newsCategory.name);

    let totalPage = Math.ceil(itemsByCategory.length / itemsPerPage );
    let first = (currentPage -1)*itemsPerPage;
    let last = first + itemsPerPage;
    let filteredItems = itemsByCategory.slice(first, last);

    let pageArray = new Array();
    let i=1;
    for (i=1; i<=totalPage; i++) pageArray.push(i);
    
    const handlePage = (index) => {
        setCurrentPage(index);
      }
    const handleNextPage = () => {
        if(currentPage<pageArray.length)
            setCurrentPage(currentPage+1);
    }

    return(
        <div className="news-by-category">
            <div className="link-title"> <Link to='/' className="blue"> Home </Link> <span className="blue"> {`>>`} </span> <Link to='/tintuc' className="blue"> Tin tức </Link> <span className="blue"> {`>>`} </span> <span className="grey"></span> <span className="grey"> {newsCategory.name} </span> </div>
            <div className="news-by-category-container">
                <h4 className="news-category white uppercase text-center"> {newsCategory.name} </h4>
                {filteredItems.map((item) =>
                            <div key={item.id} className="news-category-container">
                                <img src={item.image}></img>
                                <div className="text">
                                    <Link to={`/tintuc/${newsCategory.id}/${item.id}`}> <h5> {item.title} </h5> </Link>
                                    <p> {item.info} </p> 
                                </div>
                            </div>
                )}
                <div className="button-page-number-list">
                    {pageArray.map((indx) => (
                        <button key={indx} className={indx===currentPage ? "button-current" : " button-side "} onClick={() => handlePage(indx)} > {indx} </button>
                    )
                    )}
                    <button className="button-next-page" onClick={handleNextPage}> {`>>`} </button>
                </div>
            </div>
        </div>
    )
}

export default NewsByCategory;