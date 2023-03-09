import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const GalleryIndex = () => {

  const [art, setArt] = useState([])
  const apiKey = 'ea65da40-779b-43c2-87a7-1bbc03fef7d6&size=100&page=10'

  useEffect(() => {
    const setArt = async () => {
      try {
        const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${apiKey}`)
        console.log(data.records)
      } catch (err) {
        console.log(err)
      }
    }
    setArt()
  }, [])






  return (

    <h1>Gallery page</h1>
  )
}
export default GalleryIndex