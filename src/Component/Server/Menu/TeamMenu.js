import React from "react";
import './TeamEdit.css'
import Header from "../../Header/Header";
import axios from "axios";

const access_token = sessionStorage.getItem('user_token');
const api = "http://mmyu.direct.quickconnect.to:8880"
//팀 이미지

const onChangeImg = (e) => {
    e.preventDefault();
    const input = document.getElementById('edit_team_pic')
    if (e.target.files) {
        const formData = new FormData()
        formData.append('file', input.files[0])
        axios({
            method: 'post',
            url: api + '/team/profilePic',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(function (response) {
                console.log(response)
                console.log("데이터 전송 성공함")
                window.location.reload();
            })
    }
}
//팀 이미지 임시 체크
function temp_Delete_Teamimage() {
    if (window.confirm('정말로 현재 팀 이미지를 삭제하시겠습니까?') === true) {
        console.log("응애");
        Delete_Teamimage();
    }

}
//팀 이미지 삭제 함수
function Delete_Teamimage() {
    axios({
        method: 'delete',
        url: api + "/team/profilePic",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then(function (response) {
            // response
            console.log("팀 이미지 삭제 성공함");
            window.location.href = "/TeamMenu";
            // window.location.reload();
        }).catch(function (error) {
            // 오류발생시 실행
            console.log(error.message);
            if (error.message === 'Network Error') {
                alert('No server response');
            }
            if (error.message === 'Request failed with status code 404') {
                alert('404 error');
            }
            else {
                alert(error.message);
            }
        });
}

//팀 추가 이동 함수
function Move_Team_Add() {
    window.location.href = "/TeamAdd";
}
function Move_Team_Delete() {
    // window.location.href = "/TeamDelete";
    if (window.confirm('정말로 현재 팀을 삭제하시겠습니까?') === true) {
        axios({
            method: 'delete',
            url: api + "/team",
            headers: {
                Authorization: `Bearer ${access_token}`
            }

        })
            .then(function (response) {
                // response
                console.log("팀 삭제 성공함");
                window.location.href = "/TeamMenu";
                Delete_Teamimage();
                // document.location.reload();
            }).catch(function (error) {
                // 오류발생시 실행
                console.log(error.message);
                if (error.message === 'Network Error') {
                    alert('No server response');
                }
                if (error.message === 'Request failed with status code 404') {
                    alert('404 error');

                }
                else {
                    alert(error.message);
                }
            });
    }


}
function Move_Team_Drop() {
    window.location.href = "/TeamDrop";
}
function Move_Team_Edit() {
    window.location.href = "/TeamEdit";
}

//팀 데이터 변경 창
function on_load_team() {
    // var on_load_team = document.getElementById('on_load_team');
    //팀 이미지 받아오기
    axios.get(api + "/team/profilePic", {
        responseType: "arraybuffer",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then((response) => {
            // console.log(response)
            document.getElementById('team_pic').src = "data:image/png;base64," + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
        })
        .catch((error) => {
            console.error(error)
        });
    //팀 정보 받아오기
    axios.get(api + "/team", {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then((res) => {
            console.log(res.data.message)
            document.getElementById('on_load_team').innerText = res.data.message.Name;

        })
        .catch((error) => {
            console.error(error)
        })

}

class Login extends React.Component {
    render() {
        return (
            <div className="Team_editPageWrap">
                <Header />
                <div className="Team_editWrap">
                    <img className="Team_editlogo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    <br />
                    <img id='team_pic' width="100px" height="100px" role="button" src={process.env.PUBLIC_URL + '/img/user.png'} alt='team_photo'></img>
                    <br />
                    <form>
                        <input
                            type="file"
                            id="edit_team_pic"
                            accept="image/jpeg,image/png"
                            onChange={onChangeImg}
                        />

                    </form>
                    <button onClick={temp_Delete_Teamimage}>이미지 삭제</button>
                    <br />
                    <p>현재 소속된 팀</p><p id='on_load_team'> 없음
                        {on_load_team()}
                    </p>
                    <p><button className="Loginbutton" type="button"
                        onClick={Move_Team_Add}>팀 추가</button></p>
                    <p><button className="Loginbutton" type="button"
                        onClick={Move_Team_Edit}>팀 수정</button></p>
                    <p><button className="Loginbutton" type="button"
                        onClick={Move_Team_Delete}>팀 삭제</button></p>
                    <p><button className="Loginbutton" type="button"
                        onClick={Move_Team_Drop}>팀 탈퇴</button></p>
                </div>
            </div>
        );
    }
}

export default Login;