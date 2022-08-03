import React from "react"

const Category = ({categories}) => {
    return(
        <>
        {categories.map((category) => {
            const {id, name} = category;
            return(
                <div key={id} className="category">
                    <p> {name} </p>
                </div>
            );
        })}
        </>
    )
}
export default Category;