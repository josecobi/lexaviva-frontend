import { useState } from 'react';
import StudyCard from './StudyCard';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { ArrowLeftIconLight, ArrowRightIconLight } from '../icons/ArrowIcons';
import { LinkContainer } from 'react-router-bootstrap';

function Demo() {
    //set the state for the select menu and the data that will be fetched(vocab words data)
    // const [fetchedTopics, setFetchedTopics] = useState([""]);
    const [fetchedData, setFetchedData] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);


 

   

    // handle event when submit button is clicked
    const handleChange = async (e) => {
        //counter for the words to display in the card
        setWordIndex(0);
        e.preventDefault();
        await axios.get(`/demo/study`)
        // reasign the value 
        .then(response => {
            setFetchedData(response.data);
        })     
        .catch(error => console.error("Error:", error.message));
    }

    const handleNext = () => {
        if (wordIndex < fetchedData.length - 1) {
            setWordIndex(wordIndex + 1);
        }
    }

    const handlePrev = () => {
        if (wordIndex > 0) {
            setWordIndex(wordIndex - 1);
        } 
    }
    return (
        <Container className="screen-container mt-4 pt-3 pb-5">
        <Row className="row mt-1">
          <Col className="text-center" >
            <p className="pages-title">Vocabulary Cards</p>
            <p>Flip the card to reveal the meaning.</p> 
          </Col>   

        <div className="mt-2 container text-center">
            <div className="row justify-content-center mt-1">
                <div className="col-md-4  col-sm-10 dropdown">
                    {// show the spinner while the data is being fetched
                            <form >
                                    <select onChange={handleChange} className="form-select select mb-1"  aria-label="Select Topics" name="topic" defaultValue="option1">
                                        <option className='topic-option' value="option1" disabled onClick={console.log("option clicked")}>Select a topic</option>
                                        <option className='topic-option' value="Basic actions" onClick={console.log("option clicked")}>Basic actions</option>
                                    </select>

                                <br />
                            </form>}
                </div>
            </div>
            {/* check both fetchedData and fetchedData[wordIndex] to see they aren't empty. If not, display card for the first element*/}
            {            
            fetchedData && fetchedData[wordIndex] && wordIndex < fetchedData.length - 1 && (
                
                <div className="align-items-center justify-content-center no-wrap card-container">
                     <div className="col-2 mr-0 clickable-element arrow-button" onClick={handlePrev}>
                     {wordIndex > 0 &&<ArrowLeftIconLight />}
                        </div>
                    <StudyCard className="col-8"
                        key={wordIndex}
                        word={fetchedData[wordIndex].word}
                        imgUrl={fetchedData[wordIndex].imgUrl}
                        attribution={fetchedData[wordIndex].attribution}
                        english_word={fetchedData[wordIndex].english_word}
                    />
                                     
                    <div className="col-2 clickable-element arrow-button" onClick={handleNext}>
                   <ArrowRightIconLight className="arrow-button"/>
                        </div> 
                    
                                 
                </div>
            )}
            { wordIndex === fetchedData.length - 1 &&  
            (<>
                <p>Great Job!</p>
                <LinkContainer to='/newTopic'>
                
                <button className="button-primary mb-3" role="button">Create New Topic</button>
                </LinkContainer>
            </>
            )}
        </div>

       
       </Row>
       </Container>
    );
}

export default Demo;

Demo.propTypes = {
    user_id: PropTypes.string
}