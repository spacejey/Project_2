import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import Gallery from './components/Gallery'
import Search from './components/Search'
import NavBar from './components/NavBar'

const App = () => {
  return (

    <div className='site-wrapper'>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <footer>&copy; Made by Rossana & Eunyeong</footer>
      </BrowserRouter>
    </div>
  )
}

export default App