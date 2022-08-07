import React from "react"
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Feature = ({features}) => {
    return(
        <>
        {features.map((feature) => {
            const {id, image, title, info} = feature;
            const infoDisplay = info.length>=150 ? info.slice(0, 150) : info;
            return(
                <article key={id} className="feature">
                <img className='feature-image' src={image}></img>
                <div>
                <Link to={`/cacgoidichvuyte/${id}`}> <h4> {title} </h4> </Link>
                <div> {parse(`${infoDisplay}...`)} </div>
                </div> 
                </article>
            );
        })}
        </>
    )
}
export default Feature;