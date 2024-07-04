import { Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




const MyTopics = () => {
    return(
        // <Container className="mt-5">
        <Row className="g-4 infoCardsRow justify-content-center">
        <Col xs={12} md={4} className="infoCardsCol">
                <Card className="infoCards p-2">
                    <Card.Img variant="top" src="./assets/editable.svg" className="infoCardImg"/>
                    <Card.Body>
                        <Card.Title>Edit Topics</Card.Title>
                        <Card.Text>
                        Edit, add, and delete words from your topics with ease. Update your illustrations.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <LinkContainer to="/EditTopics" className="clickableElement">
                            <button className="button-primary">Edit</button>
                        </LinkContainer>
                    </Card.Footer>
                </Card>
        </Col>
        <Col xs={12} md={4} className="infoCardsCol">      
            <Card className="infoCards p-2">
                <Card.Img variant="top" src="./assets/create.svg" className="infoCardImg" />
                <Card.Body>
                <Card.Title>Create New Topic</Card.Title>
                <Card.Text>
                Create topics adapted to your skill level.
                </Card.Text>
                
                </Card.Body>
                <Card.Footer>
            <LinkContainer to="/NewTopic" className="clickableElement">

                <button className="button-primary">Create</button>
            </LinkContainer>

                </Card.Footer>
            </Card>
        </Col>
      
    </Row>
    // </Container>
    )    
}

    export default MyTopics