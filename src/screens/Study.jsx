import { Container, Col, Row } from 'react-bootstrap'
import SelectTopic from '../components/study/SelectTopic'
function Study() {

  return (
    <Container className="study-container mt-2 p-3">
    <Row className="row mt-3">
      <Col className="text-center" >
        <h2>Vocabulary Cards</h2>
        <p>Flip the card to reveal the meaning.</p> 
      </Col>   
      <SelectTopic />
   
    </Row>
    </Container>
  )
}

export default Study