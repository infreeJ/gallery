import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/home';
import ArtistsPage from './pages/artists';
import ExhibitionsPage from './pages/exhibitions';
import NewsPage from './pages/news';

import Header from './components/header';
import MainImg from './components/mainImg';
import Cookie from './components/cookie';
import CookieCheck from './components/cookieCheck' ;
import Overlay from './components/overlay'


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
  <MainImg/>

  <Cookie cookietap={cookietap} setCookietap={setCookietap} manageCookies={manageCookies} setManageCookies={setManageCookies}/>

  {manageCookies && <CookieCheck cookietap={cookietap} setCookietap={setCookietap} manageCookies = {manageCookies} setManageCookies = {setManageCookies}/>}
  
    <div className='a'>


    </div>
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
