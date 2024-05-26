import propTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function NewTopicForm({setNewTopicName}){

    return(
        <>
        <Container>
        <Row className='justify-content-md-center text-center mt-5'>
        <h2>New Topic</h2>
        </Row>
        
            <Row className='justify-content-md-center text-center mt-3'>
                <Col xs={12} md={6} className='card p-4'>
                    <h4>Topic name</h4>
                    <Form onSubmit={displayWordsForm}>  
                        <Form.Group className="my-2" controlId="topic">
                            <Form.Control name="topic" type="text" defaultValue="" placeholder="Enter topic name"></Form.Control>
                        </Form.Group>  
                        <Button  type="submit" className="btn btn-success">Save</Button>                 
                    </Form>
                </Col>
            </Row>
        </Container>

    </>
        
    )

            // Function 
    function displayWordsForm(event) {
        event.preventDefault()
        setNewTopicName(event.target.topic.value);  
    }
}

NewTopicForm.propTypes = {
    setNewTopicName: propTypes.func.isRequired,
}