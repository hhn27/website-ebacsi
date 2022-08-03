import React, { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from "../context";


function RegisterForm() {
    const nameInputRef = React.useRef('');
    const phoneInputRef = React.useRef('');
    const categoryInputRef = React.useRef('');

    const {closeForm} = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault();
        let item={};
        item.name = nameInputRef.current.value;
        item.phone = phoneInputRef.current.value;
        item.category = categoryInputRef.current.value;
        alert(JSON.stringify(item))
    }

    return(
        <article className="registerForm-container">
            <div className="top">
                <button className="close-icon" onClick={closeForm}>
                    <CloseIcon ></CloseIcon> 
                </button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" id="name" name="name" placeholder="Họ và tên" ref={nameInputRef}></input>
                <input type="text" id="phone" name="phone" placeholder="Số điện thoại" ref={phoneInputRef}></input>
                <select id="category" name="category" 
                    ref={categoryInputRef} >
                    <option value="">Select</option>
                    <option value="feature1"> Gói khám 1</option>
                    <option value="feature2"> Gói khám 2</option>
                    <option value="feature3">Gói khám 3</option>
               </select>
               <input type="submit" value="Submit" />
            </form>
        </article>
    )
}

export default RegisterForm;