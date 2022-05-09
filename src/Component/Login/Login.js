import React from "react";
import './Login.css'
import Header from "../Header/Header";
import Tosignup from "./Tosignup";
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
    render() {
        return (
            <div className = "LoginPageWrap">
                <Header/>
                <div className = "LoginWrap">
                <img className="Loginlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <p className = "id">
                    <input type="text" id = "login_email" 
                    placeholder="전화번호, 사용자 이름 또는 이메일"/></p>
                <p className = "pw">
                    <input type="text" id = "login_pw" 
                    
                    placeholder="비밀번호"/></p>
                <button className = "Loginbutton" type="" 
                onClick={onLoggin}>로그인 하기</button>
                </div>
                <Tosignup/>
            </div>
        );
    }
}

export default Login;