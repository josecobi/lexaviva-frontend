import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
function Dasboard() {
    return (
       <>
        <Container className="mt-5">
            <Row className="infoCardsRow justify-content-center g-3">
                <Col xs={10} md={3} className="infoCardsCol">
                    <Card className="infoCards p-2">
                        <Card.Img variant="top" src="./assets/study.svg" className="infoCardImg"/>
                        <Card.Body>
                            <Card.Title>Study</Card.Title>
                            <Card.Text>
                                Master Vocabulary Effortlessly with Our Interactive Cards!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
            <LinkContainer to="/Study" className="clickableElement">

                <button className="button-primary">Study</button>
            </LinkContainer>

                </Card.Footer>
                    </Card>
                </Col>
                <Col xs={10} md={3} className="infoCardsCol">
                    <Card className="infoCards p-2">
                        <Card.Img variant="top" src="./assets/profile.svg" className="infoCardImg"/>
                        <Card.Body>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>
                                View and edit your profile information.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
            <LinkContainer to="/Profile" className="clickableElement">

                <button className="button-primary">Profile</button>
            </LinkContainer>

                </Card.Footer> 
                    </Card>
                </Col>
                <Col xs={10} md={3} className="infoCardsCol">
                    <Card className="infoCards p-2">
                        <Card.Img variant="top" src="./assets/topics.svg" className="infoCardImg"/>
                        <Card.Body>
                            <Card.Title>My Topics</Card.Title>
                            <Card.Text>
                                Create and edit topics adapted to your skill level.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
            <LinkContainer to="/MyTopics" className="clickableElement">

                <button className="button-primary">Topics</button>
            </LinkContainer>

                </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )    
}

export default Dasboard;