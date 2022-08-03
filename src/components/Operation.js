import React from "react"
// import image from '../assets/Icon/greyimage.jpg'
const Operation = ({operations}) => {
    return(
        <>
        {operations.map((operation) => {
            const {id,image, title, info} = operation;
            return(
                <article key={id} className="operation">
                <div className="operation-header">
                    <img src={image} ></img>
                    <h4> {title} </h4>
                </div>
                <p> {info} </p> 
                </article>
            );
        })}
        </>
    )
}
export default Operation;