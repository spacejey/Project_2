import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import GalleryIndex from './components/GalleryIndex'
import GallerySingle from './components/GallerySingle'
import Search from './components/Search'
import PageNavBar from './components/PageNavBar'

const App = () => {
  return (

    <div className='site-wrapper'>

      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryIndex />} />
          <Route path="/gallery/:galleryId" element={<GallerySingle />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <footer>&copy; Made by Rossana & Eunyeong</footer>
      </BrowserRouter>

    </div>
  )
}

export default App