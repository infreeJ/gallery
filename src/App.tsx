import './App.css'
import { Route, Routes } from 'react-router-dom';

// 네비
import Header from './components/header';

// 페이지들
import HomePage from './pages/home';
import ArtistsPage from './pages/artists';
import ExhibitionsPage from './pages/exhibitions';
import NewsPage from './pages/news';

// 훅
import HeaderDisable from './hooks/headerDisable'
import TitleChange from './hooks/TitleChange'



function App() {
  // 네비 숨기기
  const scrollNum = HeaderDisable()

  // 메인이미지 텍스트 색 변경
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
