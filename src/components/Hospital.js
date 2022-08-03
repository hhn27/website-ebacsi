import React from "react"

const Hospital = ({hospitals}) => {
    return(
        <>
        {hospitals.map((hospital) => {
            const {id, image} = hospital;
            return(
                <article key={id} className="hospital">
                <img src={image}></img>
                </article>
            );
        })}
        </>
    )
}
export default Hospital;