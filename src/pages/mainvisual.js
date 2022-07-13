import {useState, useEffect} from 'react';

function Mainvisual(){
    return(
        <section className="mainVisual" id='mainVisual'>
                <div className="univBox">
                    <img className='logo' src={process.env.PUBLIC_URL+'/images/main/cam_logo.png'} alt="" />
                    <h1 className='title'>
                        가톨릭 관동대학교 1:1 맞춤형 취업코칭 프로그램
                    </h1>
                    <a className='univ_btn roundRect_btn' href="">
                        <span>취업코칭 요청하기</span>
                    </a>
                </div>
                <div className="aboutCamcoWrap">
                    <button className="about_CamCo" onClick={aboutCamco_click}>
                            <div className="CamCoImg"></div>
                            <span className="CamCoTxt one">캠퍼스코치잡이란?</span>
                            <span className="CamCoTxt two">자세히 알아보려면 <span className="click_flicker">Click</span></span>
                            <video className="CamCo_video" controls loop autoPlay muted>
                                <source src="" type="video/mp4"/>
                                IE 버전을 업데이트 하시길 바랍니다.
                            </video>
                    </button>
                </div>
        </section>
    )

}
function aboutCamco_click(){
    let $AboutCamCo = document.querySelector('.about_CamCo');
    let $CamCoVideo = document.querySelector('.CamCo_video');
    let $CamCoVideoSource = document.querySelector('.CamCo_video source');
    // let $TitH1 = document.querySelector('.tit_h1');
    // let $NullBox = document.querySelector('.mv_nullbox');
    if ($AboutCamCo.classList.contains('on')) {
        $AboutCamCo.classList.remove('on');
        $CamCoVideo.pause();
        $CamCoVideoSource.src = '';
        $CamCoVideo.load();
        $CamCoVideo.play();
    } else {
        $AboutCamCo.classList.add('on');
        $CamCoVideo.pause();
        $CamCoVideoSource.src = process.env.PUBLIC_URL+'/images/video/CoachJobMV.mp4';
        $CamCoVideo.load();
        $CamCoVideo.play();
    }

}
export{Mainvisual}