import React from "react";
import './TeamEdit.css'
import Header from "../../../Header/Header";
// import Tosignup from "./Tosignup";
// import { Link } from "react-router-dom";
// import axios from "axios";

//팀 데이터 변경 창

// function onLoggin () {
//     var Emailaddr = document.getElementById('login_email').value;
//     var Password = document.getElementById('login_pw').value;
//     // console.log("응ㅇㅇㅇㅇㅇ")
//     console.log(Emailaddr)
//     console.log(Password)
//     axios({
//         method: 'post',
//         url: 'http://mmyu.iptime.org:8000/user/signin',
//         //responseType: 'stream',
//         data: {
//           Emailaddr: Emailaddr,
//           Password: Password
//         },
//         headers:{
//             // headers:authToken
//         }
//     })
    
//         .then(function (response) {
//             console.log("토큰");
//             console.log(response);
//             // response.data.pipe(fs.createWriteStream('.jpg'))
//             window.location.href = "/";
//         })
//         .catch(function (error) {
//             // 오류발생시 실행
//                 console.log(error);
//                 if(error.message ==='Network Error'){
//                     alert('No server response');
                    
//                 }
                
//         });
        
// }   

class Login extends React.Component {
    render() {
        return (
            <div className = "Team_editPageWrap">
                <Header/>
                <div className = "Team_editWrap">
                <img className="Team_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <p>현재 소속된 팀 : {}</p>
                <p><button className = "Loginbutton" type="button" 
                >팀 추가</button></p>
                <p><button className = "Loginbutton" type="button" 
                >팀 수정</button></p>
                <p><button className = "Loginbutton" type="button" 
                >팀 삭제</button></p>
                <p><button className = "Loginbutton" type="button" 
                >팀 탈퇴</button></p>
                </div>
            </div>
        );
    }
}

export default Login;