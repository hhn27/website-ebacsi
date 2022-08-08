import React, {useContext, useEffect, useState} from "react";
import './RegisterConsultPage.css'
import banner2 from '../assets/Icon/Banner 2.jpg';
import underline1 from '../assets/Icon/Website---eBacsi---final---cut_61.png';
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import Loading from './Loading';

function RegisterConsultPage() {
    const {isLoading} = useContext(AppContext);
    const {loading} = useContext(AppContext);

    useEffect(() => {
        loading();
    }, [])

    const nameInputRef = React.useRef('');
    const dateOfBirthRef = React.useRef('');
    const phoneInputRef = React.useRef('');
    const cityRef = React.useRef('');
    const districtRef = React.useRef('');
    const addressRef = React.useRef('');
    const contentRef = React.useRef('');
    const [gender, setGender] = React.useState('male');

    let minOffset = 0, maxOffset = 50;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }

    function handleChange(e){
        setGender(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        let item={};
        item.name = nameInputRef.current.value;
        item.gender = gender;
        item.dateOfBirth = dateOfBirthRef.current.value;
        item.phone = phoneInputRef.current.value;
        item.city = cityRef.current.value;
        item.district = districtRef.current.value;
        item.address = addressRef.current.value;
        item.content = contentRef.current.value;
        alert(JSON.stringify(item))
    }

    return(
    <>
        { isLoading? <Loading></Loading> :
            <div className="register-consult-container">
                <div> <Link to='/' className="blue"> Home </Link> <span className="blue">{`>>`} </span> <Link to='/dangkynhantuvan' className="blue"> Đăng ký nhận thông tin tư vấn </Link> </div>
                <article className="register-consult">
                    <h3 className="register-consult-title uppercase text-center"> Bạn cần tìm hiểu thêm thông tin về sản  phẩm </h3>
                    <p className="text-center"> Vui lòng liên hệ hotline 19001544 hoặc gửi thông tin của bạn để được hỗ trợ </p>
                    <form className="register-consult-form" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <input type="text" id="name" name="name" placeholder="Họ và tên (*)" required ref={nameInputRef}></input>
                            <label className="gender"> Giới tính </label>
                            <input type="radio" name="gender" value="nam" onChange={handleChange} /> Nam
                            <input type="radio" name="gender" value="nữ" onChange={handleChange}/> Nữ
                        </div>
                        <div>
                            <select id="dateOfBirth" name="dateOfBirth" className="grey" ref={dateOfBirthRef} >
                                <option value=""> Năm sinh </option>
                                {allYears.map((year) =>{
                                    return(
                                        <option value={year}> {year} </option>
                                    )
                                })}
                            </select>
                            <input type="text" id="phone" name="phone" placeholder="Số điện thoại (*)" required ref={phoneInputRef}></input>
                        </div>
                        <div>
                            <input type="text" id="city" name="city" placeholder="Tỉnh/ Thành phố (*)" required ref={cityRef}></input>
                            <input type="text" id="district" name="district" placeholder="Quận/ Huyện (*)" required ref={districtRef}></input>
                            <input type="text" id="address" name="address" placeholder="Địa chỉ (*)" required ref={addressRef}></input>
                        </div>
                        <p> Nội dung cần tư vấn (*) </p>
                        <div>
                            <textarea id="content" name="content" rows="10" required ref={contentRef}></textarea>
                        </div>
                    <button type="submit" value="Submit" > Gửi thông tin </button>
                    </form>
                </article>
            </div>
        }
    </>
    )
}
export default RegisterConsultPage;