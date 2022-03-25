//cafe
import React, { Component } from "react";
import './Application.css';


class Application extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <div className="textbox">
        <img src='/img/img2.jpg' alt="APP 사진">
        </img>
        <span className='h1'>APP</span><br/>
        응용 소프트웨어란 말이 바로 이 application 
        software의 번역어로, 운영체제를 제외한 나머지 
        소프트웨어/프로그램을 말한다.
        프로그램이란 거시적으로는 명령 코드의 집합체를 
        의미하고, 이를 세분화 하면 크게 시스템 프로그램과 
        응용 프로그램으로 나뉜다. 시스템 프로그램은 
        운영체제를 의미하고 응용 프로그램이 애플리케이션을 
        의미한다. 응용 프로그램이란 시스템 프로그램을 
        이용하고 응용해서 특정 기능만 하도록 새로 만들어낸 
        프로그램인 것이다. 애플리케이션은 스마트폰 
        시대에 새로 나온 새로운 개념의 프로그램이 
        아니다. 하지만 한글 Windows 등에서 '응용 프로그램'
        이라는 번역어를 쓰면서 한국에선 '애플리케이션'이란 
        단어는 잘 쓰이지 않게 되었다. 즉 응용 프로그램이라는 
        정식 명칭 대신에 그냥 다들 '프로그램'이라고 
        대충 잘라서 말한다는 것이다. 리눅스나 
        맥에서도 정식명칭은 애플리케이션이지만 
        사용자들도 리눅스 프로그램을 찾지 리눅스 
        애플리케이션을 찾는다는 표현은 거의 쓰지 않는다. 
        심지어는 Mac OS에 있는 Application 폴더는 
        한국어판에서 '응용 프로그램' 폴더로 번역됐다.
        이대로 '애플리케이션'이란 단어는 사어가 되는가 
        싶었으나 iPhone이 대히트를 치면서 부활했다. 
        이때 맥에서 쓰이던 것처럼 application의 약자로 
        app(앱)을 사용했는데, 이는 자사명인 Apple의 
        약자로도 쓸 수 있다.[1] 웃기게도 막상 애플의 
        운영체제, macOS의 한국어 번역은 여전히 '응용 
        프로그램'이다. 지금은 전세가 역전하여 Windows 
        8에서도 애플리케이션이라고 부른다. 하지만, 
        모바일에서의 인지도가 워낙 큰 탓에 대중의 
        인식은 '애플리케이션 = 스마트폰용 소프트웨어', 
        '프로그램 = PC용 소프트웨어'로 고정되어 버렸다. 
        
        <br />
        
      </div>
    )
  }
}

export default Application;