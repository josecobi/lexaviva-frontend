import { Container, Col, Row } from 'react-bootstrap'
import SelectTopic from '../components/study/SelectTopic'
function Study() {

  return (
    <Container className="screen-container mt-4 pt-3 pb-5">
    <Row className="row mt-1">
      <Col className="text-center" >
        <p className="pages-title">Vocabulary Cards</p>
        <p>Flip the card to reveal the meaning.</p> 
      </Col>   
      <SelectTopic />
   
    </Row>
    </Container>
  )
}

export default Study