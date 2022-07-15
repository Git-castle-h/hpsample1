import {useState, useEffect} from 'react';


function Header(){
    return(
        <div className="header on">
            <header className="topHeader">
                <div className="logoWrap">
                    <a href="/" className="">
                        <img src={`${process.env.PUBLIC_URL}/images/common/main_logo.png`} alt="학교로고" />
                    </a>
                </div>
                <div className="hamburgerWrap">
                    <div onClick={menuClick} className="center">
                        <div className=""></div>
                    </div>
                </div>
            </header>
            <div className="subHeader" onMouseEnter={subMenuDown} onMouseLeave={subMenuLeave}>
                <div className="leftMenuWrap">
                    <ul>
                        <li><a href="login" onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu1_ico.png'} alt="" /><span>My 페이지</span></a></li>
                        <li><a href="subpage" onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu2_ico.png'} alt="" /><span>취업교육 동영상</span></a></li>
                        <li><a href="subpage" onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu3_ico.png'}alt="" /><span>Job Tube</span></a></li>
                        <li><a href="subpage" onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu4_ico.png'} alt="" /><span>선배들의 코칭사례</span></a></li>
                        <li><a href="subpage" onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu5_ico.png'} alt="" /><span>서비스 안내</span></a></li>
                        <li><a href="login" onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu6_ico.png'} alt="" /><span>로그인</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function menuClick(evt){
    let hamburger = document.querySelector('.hamburgerWrap .center');
    let subMenu = document.querySelector('.subHeader');
    if(hamburger.classList.contains('on')){
        hamburger.classList.remove('on');
    subMenu.classList.remove('on');
        
    }else{
        hamburger.classList.add('on');
    subMenu.classList.add('on');
    }
    
}

function subMenuDown(evt){
    let subMenu = document.querySelector('.subHeader');
    subMenu.classList.add('on');
}

function subMenuLeave(evt){
    let subMenu = document.querySelector('.subHeader');
    subMenu.classList.remove('on');
    let hamburger = document.querySelector('.hamburgerWrap .center');
    hamburger.classList.remove('on');
    
}


export{Header};