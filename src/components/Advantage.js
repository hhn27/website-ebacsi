import React from "react"

const Advantage = ({advantages}) => {
    return(
        <>
        {advantages.map((advantage) => {
            const {id, image, title} = advantage;
            return(
                <article key={id} className="advantage">
                <img src={image}></img>
                <h4> {title} </h4>
                </article>
            );
        })}
        </>
    )
}
export default Advantage;