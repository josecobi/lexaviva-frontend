import { Col, Row } from 'react-bootstrap'
import SelectTopic from '../components/study/SelectTopic'
function Study() {

  return (
    <Row className="row justify-content-center mt-5">
      <Col xs={12} md={8}>
        <h2>Vocabulary Cards</h2>
        <p>Study with flashcards to help you learn and retain information. Hover the card with your mouse to reveal the meaning.</p> 
        <hr />  
      </Col>   
        <SelectTopic />
   
    </Row>
  )
}

export default Study