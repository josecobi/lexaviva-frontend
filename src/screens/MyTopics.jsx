// import ActionCard from "../components/topics/ActionCard"
// import { Container, Row, Col } from 'react-bootstrap'
import { Card, Col, Row, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




const MyTopics = () => {
    return(
        <Container className="mt-5">
        <Row className="g-4 myTopicsRow justify-content-center">
        <Col xs={12} md={4} className="myTopicsCol ">
            <LinkContainer to="/EditTopics" className="clickableElement">
                <Card className="myTopicCards p-2">
                    <Card.Img variant="top" src="src\assets\editable.svg" className="myTopicsCardImg"/>
                    <Card.Body>
                    <Card.Title>Edit Topics</Card.Title>
                    <Card.Text>
                    Edit, add, and delete words from your topics with ease. You can also change their illustrations.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </Col>
        <Col xs={12} md={4} className="myTopicsCol">      
            <LinkContainer to="/NewTopic" className="clickableElement">
            <Card className="myTopicCards p-2">
                <Card.Img variant="top" src="src/assets/create.svg" className="myTopicsCardImg" />
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
    //     <>
    //     <Container fluid className="mt-5">
    //   <Row className="justify-content-center g-5">

    //     <Col xs={10} md={3} >
    //     <ActionCard 
    //         title='Edit Topics' 
    //         text='Edit, add, and delete words from your topics with ease.' 
    //         action='Edit' link='/EditTopics' 
    //         icon={["fa-solid", "fa-pen-to-square"]}
    //     />
    //     </Col>
    //     <Col xs={10} md={3}>
    //     <ActionCard 
    //         title='Create New Topic' 
    //         text='Create topics adapted to your skill level. ' 
    //         action='Create' link='/NewTopic' 
    //         icon={["fa-solid", "fa-circle-plus"]}
    //     />
    //     </Col>
    //     </Row>
    //     </Container>
    //     </>
    )    
}

    export default MyTopics