import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MyTopics = () => {
    
    return(
        <>
            <LinkContainer to='/EditTopics'>
                <Button size="lg">Edit my topics</Button>
            </LinkContainer>

            <LinkContainer to='/NewTopic'>
                <Button size="lg">Create new topic</Button>
            </LinkContainer>
        
        </>
    )    }

    export default MyTopics