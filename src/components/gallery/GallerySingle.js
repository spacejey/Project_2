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

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getArt = async () => {
      try {
        const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${apiKey}/gallery/${id}`)
        setArt(data.records)
        //console.log(data.records)
      } catch (err) {
        console.log(err)
      }
    }
    getArt()
  }, [id])



  return (
    <main>
      <Container>
        <Row>
          {art &&
            <>
              <Col xs="12">
                <h1 className='display-6 mb-4'>{art.name}</h1>
              </Col>
              <Col md="6">
                <img key={id} src={art.baseimageurl} alt="" />
              </Col>
              <Col md="6">
                <h4></h4>
                <p></p>
              </Col>
            </>
          }
        </Row>
      </Container>
    </main>
  )
}

export default GallerySingle