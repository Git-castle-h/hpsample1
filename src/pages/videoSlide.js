import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

function VideoSlide(){
    useEffect(function(){
        let slideArea = document.querySelector('.slideArea');
        let slideArr = document.querySelectorAll('.slideArea .slide');
        let drag = false;
        let originX;
        let moveX;
        let curSelect;
        window.addEventListener('load',slideDup());
        window.addEventListener('resize',slideDup());
        function slideDup(){
            let SAWidth = slideArea.clientWidth;
            let slideWidth = slideArr[0].clientWidth;
            let max = true;
            // console.log( SAWidth>slideWidth*(slideArr.length));
            for(let i=0; max; i++){
            if(SAWidth < slideWidth*(slideArr.length)){
                max = true;
                // console.log(max);
            }else{
                max =false;
                // console.log(max);
            }
            slideArea.appendChild(slideArr[i].cloneNode(true));
            console.log(slideArr[i]);
            }
        }
        slideArea.addEventListener('mousedown',slideDown);
        slideArea.addEventListener('mousemove',slideMove);
        slideArea.addEventListener('mouseup',slideUp);
        slideArea.addEventListener('mouseleave',slideUp);
        function slideDown(evt){
            evt.preventDefault();
            drag = true;
            originX = evt.clientX;
            curSelect = evt.target;
        }
        function slideMove(evt){
            if(drag){
            let slideWidth = slideArr[0].clientWidth;
                console.log('move');
                moveX = evt.clientX;
                let num =  moveX - originX;
                slideArea.style.left = num+'px';
                curSelect.style.pointerEvents ='none';
                if(num>slideWidth){
                    slidePrev();
                }
                if(num<-slideWidth){
                    slideNext();
                }


            }
        }
        function slideUp(evt){
            drag = false;
            curSelect.style.pointerEvents ='auto';
        }
        function slidePrev(){
            let slideP = slideArr[0];
            slideP.remove();
            slideArea.appendChild(slideP.cloneNode(true));
            slideArr = document.querySelectorAll('.slideArea .slide');
        }
        function slideNext(){
            console.log(slideArr.length);
            let slideN = slideArr[slideArr.length-1];
            slideN.remove();
            slideArea.appendChild(slideN.cloneNode(true));
            slideArr = document.querySelectorAll('.slideArea .slide');
        }

    },[])
    return(
        <section className="VideoSlide">
            <div className="maintab">
                <h1 className='title'>
                    취업 교육 동영상
                </h1>
                <div className="select">
                    <button className="onepoint on"></button>
                    <button className="chippo"></button>
                </div>
            </div>
            <div className="subtab">
                <button className='subBtn on' data-id="prepare">취업준비</button>
                <button className='subBtn' data-id="resume">서류전형</button>
                <button className='subBtn' data-id="test">필기시험</button>
                <button className='subBtn' data-id="interview">면접전형</button>
            </div>
            <div className="slideWrap">
                <div className="slideArea">
                    <div className="slide">
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind01.png'} alt="" /></a>
                    </div>                    
                    <div className="slide">
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind02.png'} alt="" /></a>
                    </div>
                    <div className="slide">
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind03.png'} alt="" /></a>
                    </div>
                    <div className="slide">
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind04.png'} alt="" /></a>
                    </div>
                    <div className="slide">
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind05.png'} alt="" /></a>
                    </div>
                    <div className="slide">
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind06.png'} alt="" /></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export{VideoSlide}