import ActionCard from "../components/topics/ActionCard"
import { Container, Row, Col } from 'react-bootstrap'
function Dasboard() {
    return (
       <>
        <Container fluid className="mt-5">
            <Row className="justify-content-center g-2">
                <Col xs={10} md={3} >
                    <ActionCard 
                        title='Study' 
                        text='Master Vocabulary Effortlessly with Our Interactive Cards!' 
                        action='Study' link='/study' 
                        icon={["fa-solid", "fa-shapes"]}
                    />
                </Col>
                <Col xs={10} md={3}>
                    <ActionCard 
                        title='Profile' 
                        text='Keep Your Profile Information Current' 
                        action='Update' link='/profile' 
                        icon={["fa-solid", "fa-circle-user"]}
                    />
                </Col>
                <Col xs={10} md={3}>
                    <ActionCard 
                        title='My Topics' 
                        text='Create and edit topics adapted to your skill level.' 
                        action='Create' link='/mytopics' 
                        icon={["fa-solid", "fa-rectangle-list"]}
                    />
                </Col>
            </Row>
        </Container>
        </>
    )    
}

export default Dasboard;