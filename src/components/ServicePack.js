import React, { useContext, useEffect, useState } from "react";
import './ServicePack.css'
import servicePacks from "../data/ServicePacksData";
import Feature from "./Feature";
import seemore from "../assets/button/Xem them button.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import Loading from "./Loading";
import parse from "html-react-parser";

function ServicePack() {
    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage=9;
    let totalPage = Math.ceil(servicePacks.length / itemsPerPage );
    let first = (currentPage -1)*itemsPerPage;
    let last = first + itemsPerPage;
    let filteredItems = servicePacks.slice(first, last);

    let pageArray = new Array();
    let i=1;
    for (i=1; i<=totalPage; i++) pageArray.push(i);

    useEffect(() => {
        loading();
    }, [])
    
    const handlePage = (index) => {
        setCurrentPage(index);
      }
    const handleNextPage = () => {
        if(currentPage<pageArray.length)
            setCurrentPage(currentPage+1);
    }
    if(isLoading){
        return(
            <Loading></Loading>
        )
    }
    else{
    return(
        <div className="service-pack-page">
            <div className="link-title"> <Link to='/' className="blue"> Home </Link> <span className="blue">{`>>`} </span> <Link to='/cacgoidichvuyte' className="blue"> Tất cả các gói khám </Link></div>
                <div className="items-perpage">
                    {filteredItems.map((servicePack) => {
                        const infoDisplay = servicePack.info.length>=150 ? servicePack.info.slice(0, 150) : servicePack.info;
                        return(
                        <article key={servicePack.id} className="service-pack-item">
                            <img className="service-pack-image" src={servicePack.image}></img>
                            <div className="service-pack-text">
                                <h4> {servicePack.title} </h4>
                                <div> {parse(`${infoDisplay}...`)} </div>
                                <Link to={`/cacgoidichvuyte/${servicePack.id}`}><button className="seemore" > <img src={seemore}></img> </button></Link> 
                            </div>
                        </article>
                        )
                    }
                    )}
                </div>
                <div className="button-page-number-list">
                    {pageArray.map((indx) => (
                        <button key={indx} className={indx===currentPage ? "button-current" : " button-side "} onClick={() => handlePage(indx)} > {indx} </button>
                    )
                    )}
                    <button className="button-next-page" onClick={handleNextPage}> {`>>`} </button>
                </div>
        </div>
    )
    }
}

export default ServicePack;