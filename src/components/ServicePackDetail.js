import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicePacks from "../data/ServicePacksData";
import './ServicePackDetail.css';
import underline from '../assets/Icon/Website---eBacsi---final---cut_17.jpg'
import register from '../assets/button/Dang ky ngay.png'
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import Loading from './Loading';
import parse from 'html-react-parser';

const ServicePackDetail = () => {
    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);

    useEffect(() => {
        loading();
    }, [])
    const {id} = useParams();
    const servicePackId = parseInt(id, 10);
    const thisService = servicePacks.find(servicePack => servicePack.id===servicePackId);

    // const detailRef = React.createRef('');
    // detailRef.current.innerHTML = thisService.detail;
    // const parse = require('html-react-parser');

    const {isFormDisplay, openForm} = useContext(AppContext);

    if(isLoading){
        return(
            <Loading></Loading>
        )
    }

    else{
    return(
        <div className="service-pack-detail-container">
            <div className="link-title"> <Link to='/'  className="blue"> Home </Link> <span className="blue"> {`>>`} </span> <Link to='/cacgoidichvuyte' className="blue"> Tất cả các gói khám </Link> <span className="blue"> {`>>`} </span> <span className="grey"> {thisService.title} </span> </div>
            <div key={thisService.id} className="service-pack-detail-header">
                    <img className='feature-image' src={thisService.image}></img>
                    <div>
                        <h4> {thisService.title} </h4>
                        <div><img src={underline}></img></div>
                        <div> {parse(thisService.info)} </div>
                        <button onClick={openForm}> <img src={register}></img> </button>
                        <div className={isFormDisplay ? "form-block":"form-hidden"}> <RegisterForm></RegisterForm> </div>
                    </div>
            </div>
            <div className="content">
                <h5 className="blue"> Thông tin chi tiết </h5>
                <div> {parse(thisService.detail)}  </div>
            </div>
        </div>
    )
    }
}
export default ServicePackDetail;