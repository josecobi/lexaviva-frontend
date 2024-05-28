import ActionCard from "../components/topics/ActionCard"
import { Container, Row, Col } from 'react-bootstrap'



const MyTopics = () => {
    
    return(
        <>
        <Container fluid className="mt-5">
      {/* <Row className="justify-content-md-center text-center g-5"> */}
      <Row className="justify-content-center g-5">

        <Col xs={10} md={3} >
        <ActionCard 
            title='Edit Topics' 
            text='Edit, add, and delete words from your topics with ease.' 
            action='Edit' link='/EditTopics' 
            icon={["fa-solid", "fa-pen-to-square"]}
        />
        </Col>
        <Col xs={10} md={3}>
        <ActionCard 
            title='Create New Topic' 
            text='Create topics adapted to your skill level. ' 
            action='Create' link='/NewTopic' 
            icon={["fa-solid", "fa-circle-plus"]}
        />
        </Col>
        </Row>
        </Container>
        </>
    )    
}

    export default MyTopics