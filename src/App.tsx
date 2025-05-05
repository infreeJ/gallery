import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Header from './components/header';
import { useEffect, useState } from 'react';
import ArtistsPage from './pages/artists';
import ExhibitionsPage from './pages/exhibitions';
import NewsPage from './pages/news';



function App() {

  
  const [scrollNum, setScrollNum] = useState(true)
  const [scrollY, setScrollY] = useState(0);

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    setScrollY(y);
  })

  useEffect( () => {
    if(scrollY > 0){
      setScrollNum(false)
    } else {
      setScrollNum(true)
    }
  }, [scrollY])


  return (
  <>
  { scrollNum ? <Header/> : <></>}


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
