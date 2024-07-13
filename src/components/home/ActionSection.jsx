import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function ActionSection() {
return (
    <Row className="footer-action-row p-5 mt-5 mx-0 d-flex justify-content-center">
        <Col sm={12} md={6} className="text-center">
            <h4 className="mb-4">Join LexaViva Today and Master Spanish Vocabulary!</h4>
        
            <LinkContainer to='/register'>
                <button className="button-secondary mb-3" role="button">Sign Up</button>
            </LinkContainer>
        </Col>

      </Row>
)
}

export default ActionSection;