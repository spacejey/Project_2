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
    const getArt = async () => {
      try {
        const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${apiKey}`)
        setArt(data.records)
        //console.log(data.records)
      } catch (err) {
        console.log(err)
      }
    }
    getArt()
  }, [])


  return (
    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className='display-4 mb-4 text-center'>Gallery</h1>
          </Col>
          {art.length > 0 &&
            art.filter(art => art.people && art.images && art.images[0] && art.images[0].baseimageurl).map(art => {
              const { id, people: [{ name }], images: [{ baseimageurl }] } = art
              console.log(id, name, baseimageurl)
              return (
                <Col key={id} lg="4" md="6" sm="12" className='art'>
                  <Link to={`/art/${id}`}>
                    <Card>
                      <div className="card-image" style={{ backgroundImage: `url('${baseimageurl}')` }}></div>
                      <Card.Body>
                        <Card.Text>{name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </main>
  )
}
export default GalleryIndex