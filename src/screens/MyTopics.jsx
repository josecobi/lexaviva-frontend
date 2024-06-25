import { Card, Col, Row, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




const MyTopics = () => {
    return(
        <Container className="mt-5">
        <Row className="g-4 infoCardsRow justify-content-center">
        <Col xs={12} md={4} className="infoCardsCol">
            <LinkContainer to="/EditTopics" className="clickableElement">
                <Card className="infoCards p-2">
                    <Card.Img variant="top" src="./assets/editable.svg" className="infoCardImg"/>
                    <Card.Body>
                    <Card.Title>Edit Topics</Card.Title>
                    <Card.Text>
                    Edit, add, and delete words from your topics with ease. You can also change their illustrations.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </Col>
        <Col xs={12} md={4} className="infoCardsCol">      
            <LinkContainer to="/NewTopic" className="clickableElement">
            <Card className="infoCards p-2">
                <Card.Img variant="top" src="./assets/create.svg" className="infoCardImg" />
                <Card.Body>
                <Card.Title>Create New Topic</Card.Title>
                <Card.Text>
                Create topics adapted to your skill level.
                </Card.Text>
                </Card.Body>
            </Card>
            </LinkContainer>
        </Col>
      
    </Row>
    </Container>
    )    
}

    export default MyTopics