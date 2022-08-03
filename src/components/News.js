import React from "react"
import newsCategories from "../data/NewsCategoriesData";
import { Link } from "react-router-dom";

const News = ({news}) => {
    return(
        <>
        {news.map((ne) => {
            const {id, image, title, info, category} = ne;
            const newsCategory = newsCategories.find(newsCt => newsCt.name===category)
            return(
                <div key={id} className="news">
                    <img src={image}></img>
                    <div className="text">
                        <Link to={`/tintuc/${newsCategory.id}/${id}`}> <h5> {title} </h5> </Link>
                        <p> {`${info.slice(0,100)}...`} </p> 
                    </div>
                </div>
            );
        })}
        </>
    )
}
export default News;