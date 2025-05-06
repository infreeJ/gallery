import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Header from './components/header';
import { useEffect, useRef, useState } from 'react';
import ArtistsPage from './pages/artists';
import ExhibitionsPage from './pages/exhibitions';
import NewsPage from './pages/news';
import { useNavigate } from "react-router-dom"
import MainImg from './components/mainImg';

import Cookie from './components/cookie';




function App() {

  // const navigate = useNavigate();

  const [scrollNum, setScrollNum] = useState(true)
  const [scrollY, setScrollY] = useState(0);

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    setScrollY(y);
  })

  useEffect( () => {
    if(scrollY == 0){
      setScrollNum(true)
    } else {
      setScrollNum(false)
    }
  }, [scrollY])

  const [accept, setAccept] = useState(true);

  useEffect( () => {

  })


  return (
  <>
    
  <Header scrollNum={scrollNum}/>

  <MainImg/>

  {accept && <Cookie ac={accept} setAc={setAccept}/>}

  


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
