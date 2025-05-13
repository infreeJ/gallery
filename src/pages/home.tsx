import { useEffect, useState } from 'react';

// 컴포넌트
import MainImg from '../components/mainImg';
import MainText from '../components/mainText';
import Cookie from '../components/cookie';
import CookieCheck from '../components/cookieCheck';
import Overlay from '../components/overlay';
import BlackOverlay from '../components/blackOverlay'

import ArtistsContent1 from '../components/artistsContent1';
import ArtistsContent2 from '../components/artistsContent2';
import ArtistsContent3 from '../components/artistsContent3';
import YoutubeVideo from '../components/youtubeVideo';
import YoutubeVideoLink from '../components/youtubeVideo-link';


// 훅
import ImgSet from '../hooks/imgSet'




export default function HomePage () {


    
    // 버튼 클릭으로 메인 이미지 변경 및 페이드 인-아웃
    const {imgNum, imgBtn, overlayState} = ImgSet()

    const [blackBool, setBlackBool] = useState(false)

    useEffect(() => {
        setBlackBool(true)
        setTimeout(() => {
            setBlackBool(false)
        }, 300);
    }, [overlayState])




// cookieTap close
    const [cookietap, setCookietap] = useState(true);


// cookieCheck component create
    const [manageCookies, setManageCookies] = useState(false)


// cookieCheck scroll off
    if(manageCookies) {
    document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = 'unset';
    }




    return(
        <>
        
    {manageCookies && <Overlay cookietap={cookietap} setCookietap={setCookietap} manageCookies = {manageCookies} setManageCookies = {setManageCookies}/>}
        
    <BlackOverlay blackBool= {blackBool}/>
    <MainImg imgNum = {imgNum}/>
    

    <ArtistsContent1/>
    <ArtistsContent2/>
    <ArtistsContent3/>


    <Cookie cookietap={cookietap} setCookietap={setCookietap} manageCookies={manageCookies} setManageCookies={setManageCookies}/>

    {manageCookies && <CookieCheck cookietap={cookietap} setCookietap={setCookietap} manageCookies = {manageCookies} setManageCookies = {setManageCookies}/>}
        
    <MainText imgBtn={imgBtn} imgNum = {imgNum}/>

    <YoutubeVideo/>
    <YoutubeVideoLink/>
    
        </>

    )

}