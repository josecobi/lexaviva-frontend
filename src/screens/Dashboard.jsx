import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
function Dasboard() {
    return (
       <>
        <Container className="mt-5">
            <Row className="infoCardsRow justify-content-center g-3">
                <Col xs={10} md={3} className="infoCardsCol">
                    <LinkContainer to="/study" className="clickableElement">
                    <Card className="infoCards p-2">
                        <Card.Img variant="top" src="./assets/study.svg" className="infoCardImg"/>
                        <Card.Body>
                            <Card.Title>Study</Card.Title>
                            <Card.Text>
                                Master Vocabulary Effortlessly with Our Interactive Cards!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </LinkContainer>                  
                </Col>
                <Col xs={10} md={3} className="infoCardsCol">
                    <LinkContainer to="/profile" className="clickableElement">
                    <Card className="infoCards p-2">
                        <Card.Img variant="top" src="./assets/profile.svg" className="infoCardImg"/>
                        <Card.Body>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>
                                View and edit your profile information.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </LinkContainer>
                </Col>
                <Col xs={10} md={3} className="infoCardsCol">
                    <LinkContainer to="/mytopics" className="clickableElement">
                    <Card className="infoCards p-2">
                        <Card.Img variant="top" src="./assets/topics.svg" className="infoCardImg"/>
                        <Card.Body>
                            <Card.Title>My Topics</Card.Title>
                            <Card.Text>
                                Create and edit topics adapted to your skill level.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                      </LinkContainer>  
                </Col>
            </Row>
        </Container>
        </>
    )    
}

export default Dasboard;