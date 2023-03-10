import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import GalleryIndex from './components/gallery/GalleryIndex'
import GallerySingle from './components/gallery/GallerySingle'
import PageNavBar from './components/common/PageNavBar'


const App = () => {
  return (

    <div className='site-wrapper'>

      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryIndex />} />
          <Route path="/gallery/:objectid" element={<GallerySingle />} />
        </Routes>
        <footer className='footer'>&copy; Made by Rossana & Eunyeong</footer>
      </BrowserRouter>

    </div>
  )
}

export default App