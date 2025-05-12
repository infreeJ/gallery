import './App.css'
import { Route, Routes } from 'react-router-dom';


import Header from './components/header';

import HomePage from './pages/home';
import ArtistsPage from './pages/artists';
import ExhibitionsPage from './pages/exhibitions';
import NewsPage from './pages/news';

import HeaderDisable from './hooks/headerDisable'
import TitleChange from './hooks/TitleChange'


function App() {

  const scrollNum = HeaderDisable()

  const {titleName, takeName} = TitleChange()



  return (
  <>
  <Header scrollNum={scrollNum} takeName={takeName}/>
  <Routes>
      <Route index element={<HomePage />} />
      <Route path='Artists' element={<ArtistsPage titleName = {titleName}/>} />
      <Route path='Exhibitions' element={<ExhibitionsPage titleName = {titleName}/>} />
      <Route path='News' element={<NewsPage titleName = {titleName}/>} />
  </Routes>
  </>
  )
}


export default App
