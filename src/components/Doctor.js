import React from "react"

const Doctor = ({doctors}) => {
    return(
        <>
        {doctors.map((doctor) => {
            const {id, image, name, info} = doctor;
            return(
                <article key={id} className="doctor">
                <img src={image}></img>
                <h4> {name} </h4>
                <p> {info }</p>
                </article>
            );
        })}
        </>
    );
}
export default Doctor;