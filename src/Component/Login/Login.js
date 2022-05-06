import React from "react";
import './Login.css'
import Header from "../Header/Header";
// import isLogin from "../Header/MenuBar/MenuBar";
import Tosignup from "./Tosignup";
// import { Link } from "react-router-dom";
import axios from "axios";



function onLoggin () {
    
    var Emailaddr = document.getElementById('login_email').value;
    var Password = document.getElementById('login_pw').value;
    var access_token
    console.log(Emailaddr)
    console.log(Password)
    axios({
        method: 'post',
        url: 'http://mmyu.direct.quickconnect.to:8880/user/signin',
        //responseType: 'stream',
        data: {
          Emailaddr: Emailaddr,
          Password: Password,
          access_token : access_token
        }
    })
    
        .then(function (response) {
            console.log("토큰");
            console.log(response.data);
            console.log(response.data.name);
            console.log(response.data.nickname);
            console.log(response.data.ProfilePio);
            console.log(response.data.Team);
            console.log(response.data.access_token);
            //response.data.pipe(fs.createWriteStream('.jpg'))
            sessionStorage.setItem('user_id',Emailaddr)
            sessionStorage.setItem('user_data',response.data)
            sessionStorage.setItem('user_name',response.data.name)
            sessionStorage.setItem('user_nick',response.data.nickname)
            sessionStorage.setItem('user_pw',Password)
            sessionStorage.setItem('user_pic',response.data.ProfilePio)
            sessionStorage.setItem('user_team',response.data.Team)
            sessionStorage.setItem('user_token',response.data.access_token)
            window.location.href = "/";
        })
        .catch(function (error) {
            // 오류발생시 실행
                console.log(error);
                if(error.message ==='Network Error'){
                    alert('No server response');
                    
                }
                if(error.message ==='Request failed with status code 404'){
                    alert('404 error');
                    
                }
                if(error.message ==='Request failed with status code 401'){
                    alert('401 error,계정 존재하지 않음!'); 
                }
                else{
                    alert(error);
                }
                
        });
        
}   

class Login extends React.Component {
    // goToMain = () => {
    // this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
//   }
    render() {
        return (
            <div className = "LoginPageWrap">
                <Header/>
                <div className = "LoginWrap">
                <img className="Loginlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                {/* <h1 className = "Logintitle">로그인 페이지</h1> */}
                <p className = "id">
                    <input type="text" id = "login_email" 
                    placeholder="전화번호, 사용자 이름 또는 이메일"/></p>
                <p className = "pw">
                    <input type="text" id = "login_pw" 
                    
                    placeholder="비밀번호"/></p>
                {/* <Link to="/"> */}
                <button className = "Loginbutton" type="" 
                onClick={onLoggin}>로그인 하기</button>
                {/* </Link> */}
                </div>
                <Tosignup/>
            </div>
        );
    }
}

export default Login;