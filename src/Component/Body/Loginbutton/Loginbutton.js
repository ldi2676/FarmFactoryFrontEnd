import React from "react";
import './Loginbutton.css';
function unity_in() {
    window.location.href = "./Unitychecklogin"
}
const Loginbutton = () => {
    
    return (
        <div className="designbutton">
            <button onClick={()=>unity_in()}>설계하기</button>
        </div>
    )
}

export default Loginbutton