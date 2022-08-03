import React from "react";
import banner2 from '../assets/Icon/Banner 2.jpg';
import underline1 from '../assets/Icon/Website---eBacsi---final---cut_61.png';
import { Link } from "react-router-dom";
import './SubPage.css'

const SubPage = ({title}) => {
    return(
    <>
        <div className="subpage-header"> 
                <img className="subpage-banner" src={banner2}></img>
                <div className="subpage-title">
                    <h3 className='white text-center'> {title} </h3>
                    <div className="underline"> <img src={underline1}></img> </div>
                </div>
        </div>
    </>
    )
}
export default SubPage;