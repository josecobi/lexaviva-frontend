import propTypes from 'prop-types';
import { Row, Col, Form } from 'react-bootstrap';

export default function NewTopicForm({setNewTopicName}){

    return(
        <>
        <Row className='justify-content-md-center text-center'>
        </Row>
        
            <Row className='justify-content-md-center text-center'>
                <Col xs={12} md={6} className='card p-4'>
                    <p>Topic name</p>
                    <Form onSubmit={displayWordsForm}>  
                        <Form.Group className="my-2" controlId="topic">
                            <Form.Control name="topic" type="text" defaultValue="" placeholder="Enter topic name"></Form.Control>
                        </Form.Group>  
                        <button  type="submit" className="button-primary">Create</button>                 
                    </Form>
                </Col>
            </Row>
    

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