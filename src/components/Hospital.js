import React from "react"

const Hospital = ({hospitals,ref}) => {
    return(
        <>
        {hospitals.map((hospital) => {
            const {id, image} = hospital;
            return(
                <article key={id} className="hospital" ref={ref}>
                <img src={image}></img>
                </article>
            );
        })}
        </>
    )
}
export default Hospital;