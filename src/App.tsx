import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/home';
import ArtistsPage from './pages/artists';
import ExhibitionsPage from './pages/exhibitions';
import NewsPage from './pages/news';

import Header from './components/header';
import MainImg from './components/mainImg';
import MainText from './components/mainText';
import Cookie from './components/cookie';
import CookieCheck from './components/cookieCheck';
import Overlay from './components/overlay';

import ArtistsContent1 from './components/artistsContent1';
import ArtistsContent2 from './components/artistsContent2';
import ArtistsContent3 from './components/artistsContent3';



function App() {

// header disable
  const [scrollNum, setScrollNum] = useState(true)
  const [scrollY, setScrollY] = useState(0);

  
  window.addEventListener("scroll", () => {
    // const y = window.scrollY;
    setScrollY(window.scrollY);
  })

  


  useEffect( () => {
    if(scrollY == 0){
      setScrollNum(true)
    } else {
      setScrollNum(false)
    }
  }, [scrollY])


  // img Change
  const [imgNum, setImgNum] = useState(1);

  function imgBtn(i:string) {
    switch(i){
        case 'left' :
            if(imgNum > 1) {
                setImgNum(imgNum-1);
            } else if(imgNum == 1) {
                setImgNum(3)
            }
            break
            
        case 'right' :
            if(imgNum < 3) {
                setImgNum(imgNum+1);
            } else if(imgNum == 3) {
                setImgNum(1)
            }
            break
    }
}





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



  
  return (
  <>
  
  {manageCookies && <Overlay cookietap={cookietap} setCookietap={setCookietap} manageCookies = {manageCookies} setManageCookies = {setManageCookies}/>}
  
  <Header scrollNum={scrollNum}/>
  <MainImg imgNum = {imgNum} setImgNum = {setImgNum}/>

  <ArtistsContent1/>
  <ArtistsContent2/>
  <ArtistsContent3/>


  <Cookie cookietap={cookietap} setCookietap={setCookietap} manageCookies={manageCookies} setManageCookies={setManageCookies}/>

  {manageCookies && <CookieCheck cookietap={cookietap} setCookietap={setCookietap} manageCookies = {manageCookies} setManageCookies = {setManageCookies}/>}
  
  <MainText imgBtn={imgBtn}/>

  
  </>
  )
}


<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/artists' element={<ArtistsPage />} />
  <Route path='/exhibitions' element={<ExhibitionsPage />} />
  <Route path='/news' element={<NewsPage />} />
</Routes>

export default App
