import React, {useContext,useEffect} from "react";
import parse from "html-react-parser";
import introduction from "../data/IntroductionData";
import './Introduction.css';
import underline from '../assets/Icon/Website---eBacsi---final---cut_17.jpg';
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import Loading from './Loading';

function Introduction (){
    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);
    useEffect(() => {
        loading();
    }, [])

    if(isLoading){
        return(
            <Loading></Loading>
        )
    }
    else{
    return(
        <>
            <div className="introduction-container"> 
                <div className="link-title"> <Link to='/'  className="blue"> Home </Link> <span className="blue"> {`>>`} </span> <Link to='/gioithieu' className="blue"> Giới thiệu </Link> <span className="blue"> {`>>`} </span> <span className="grey"> Về chúng tôi </span> </div>
                <h3> Lời giới thiệu VNPT eBacsi</h3>
                <div className="underline"> <img src={underline}></img> </div>
                <div className="introduction-detail"> {parse(introduction)} </div>
            </div>
        </>
    )
    }
}

export default Introduction;