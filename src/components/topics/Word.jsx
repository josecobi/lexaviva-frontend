import propTypes from 'prop-types';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SearchImages from './SearchImages';
import { useEffect, useState } from 'react';
import { deSelectIllustration } from '../../slices/illustrationSlice';
import { useDispatch } from 'react-redux';


// This component is used to display the words in the table
function Word({wordData, selectedTopic, setFetchedData, fetchedData, activeKey}) {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.auth)
  const user_id = userInfo._id
  const {selectedIllustration} = useSelector((state) => state.illustration);
  const [document, setDocument] = useState({_id: wordData._id,
    topic: wordData.topic,
    english_word: wordData.english_word,
    word: wordData.word,
    attribution: wordData.attribution,
    imgUrl: wordData.imgUrl,
  });

  const fallbackImgUrl = './assets/img-thumbnail-fallback.svg';

useEffect(() => {
  console.log("active key changed to: ", activeKey);
  dispatch(deSelectIllustration())}, [activeKey, dispatch]
);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setDocument((prevDoc) => ({
    ...prevDoc,
    [name]: value
  }));
};


  return (
    
      <Container fluid> 
        <Form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, setFetchedData, fetchedData, user_id, document)}>   
          <Row className="justify-content-center g-5">
            <Col md={10}>
              <Row>
                <Form.Group as={Col} className="mb-3 col-md-6 col-sm-12">
                  <label htmlFor="word" className="form-label">Term</label>
                  <Form.Control name="word" id="word" className="form-control" type="text" value={document.word} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group  className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="english_word" className="form-label">Meaning</label>
                    <Form.Control name="english_word" id="english_word" className="form-control" type="text" required value={document.english_word}
                  onChange={handleInputChange}></Form.Control>
                </Form.Group>
              </Row>
            </Col>
            <Col className="mb-3 mt-sm-1 mt-md-5 justify-content-center ">
                <h6 className="d-block">New illustration</h6>
                  <img className="thumbnail d-block mx-auto mb-2" src={selectedIllustration.src || fallbackImgUrl} alt='Illustration thumbnail'></img>
            </Col>
          </Row>
          <Row className="justify-content-center g-2">
            <button onClick={(event) => handleRemoveWord(event, fetchedData, setFetchedData)} value={document._id} className="button-tertiary col-md-2 col-sm-4 me-3">Delete</button>     
            <button  type="submit" className="button-primary me-3 col-md-2 col-sm-4">Update</button>
          </Row>

        </Form>
        <SearchImages />
      </Container>
  )
  // function used to update the word
  async function handleSaveChanges(event, setFetchedData, fetchedData, user_id, document) {
    event.preventDefault();
    let formData= {};
      try{
        if(selectedIllustration.src === "") {
           formData = {
            _id: document._id,
            // word: event.target.word.value,
            word: document.word,
            imgUrl: document.imgUrl,
            attribution: document.attribution,
            // english_word: event.target.english_word.value,
            english_word: document.english_word,
            topic: document.topic,
            user_id: user_id
          }
        }
        else {
           formData = {
            _id: document._id,
            // word: event.target.word.value,
            word: document.word,
            imgUrl: selectedIllustration.src,
            attribution: selectedIllustration.author,
            // english_word: event.target.english_word.value,
            english_word: document.english_word,
            topic: document.topic,
            user_id: user_id
          }
        }
        // update the word
          try{
            const response = await axios.put(`api/words/update/${document._id}`, formData);
            // if response is ok, log the updated word and fetch the updated data
            if(response.status === 200) {
              await axios.get(`/api/words/bytopic?selectedTopic=${selectedTopic}&user_id=${userInfo._id}`)
              .then(response => {
                setFetchedData(response.data);
                response.data.forEach(word => {
                    if(word._id === document._id) {
                      setDocument(word);
                    }
                })

              })
            }
          }
          catch(error) {
            console.error("Error:", error.message);
          }

        //reset illustration selection
        dispatch(deSelectIllustration());
      } 
      catch(error){
        console.error("Error:", error.message);
      }
   
  }
  // function used to remove the word
  async function handleRemoveWord(event, fetchedData, setFetchedData) {
    try {
      console.log("event id:", event.target.value);
      // alert the user to confirm the deletion
      if (!window.confirm("Are you sure you want to delete this word?")) {
        return;
      }
      else {
        await axios.delete(`/api/words/delete/${event.target.value}`);
        
        // lift up the state so the word is removed from the list 
        const wordsNotDeleted = fetchedData.filter(word => word && word._id !== event.target.value);
        setFetchedData(wordsNotDeleted);
      }    
   
    }
    catch(error) {
      console.error("Error:", error.message);
    }
    event.preventDefault();
  }
  
}
// define the prop types
Word.propTypes = {
 wordData: propTypes.object.isRequired,
  selectedTopic: propTypes.string.isRequired,
  setFetchedData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired,
  activeKey: propTypes.string
}
export default Word