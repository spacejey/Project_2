import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const GallerySingle = () => {

  const [art, setArt] = useState(null)

  const apiKey = 'ea65da40-779b-43c2-87a7-1bbc03fef7d6&size=100&page=10'

  const { objectid } = useParams()
  console.log(objectid)

  useEffect(() => {
    const getArt = async () => {
      try {
        const { data } = await axios.get(`https://api.harvardartmuseums.org/object/${objectid}?apikey=${apiKey}`)
        setArt(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getArt()
  }, [objectid])


  return (
    <main>
      <Container>
        <Row>
          {art &&
            <>
              <Col xs="12">
                <h1 className='singleName' >{art.people[0].name}</h1>
                <p className='singleInfo' >{art.people[0].culture}-{art.people[0].displaydate}</p>
              </Col>
              <Col md="6">
                <img className='singleImage' src={art.images[0].baseimageurl} alt={art.people[0].name} />
                <p className='singeTitle' >{art.title}</p>
              </Col>
            </>
          }
        </Row>
      </Container>
    </main>
  )
}

export default GallerySingle