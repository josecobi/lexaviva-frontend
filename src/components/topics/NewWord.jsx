import propTypes from 'prop-types';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchImages from "./SearchImages";
// import UploadImageForm from "./UploadImageForm";
import { deSelectIllustration } from '../../slices/illustrationSlice';
import { setTopic } from '../../slices/topicSlice';
import { Container, Row, Col, Form} from 'react-bootstrap';



// Component to add a new word
function NewWord({selectedTopic, setFetchedData, fetchedData, setIsFirstWordSaved, setTopicExists}) {
  const {userInfo} = useSelector((state) => state.auth);
  const user_id = userInfo._id;
  const dispatch = useDispatch();
  const {selectedIllustration} = useSelector((state) => state.illustration);
  const fallbackImgUrl = './assets/img-thumbnail-fallback.svg';

  //create an empty form to add a new word which will be a new document in MongoDB
   //initialize the state for the form document
   const [document, setDocument] = useState({
    word: "",
    imgUrl: "",
    attribution: "",
    english_word: "",
    topic: ""
  });

  // Update the document's fields when changes are made
  useEffect(() => {
    setDocument((prevDoc) => ({ ...prevDoc, topic: selectedTopic, imgUrl: selectedIllustration.src, attribution: selectedIllustration.author}));
  }, [selectedTopic, selectedIllustration.src, selectedIllustration.author, selectedIllustration]);


  return (
    <Container fluid>
      <Form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, setFetchedData, fetchedData, user_id)} className="needs-validation" noValidate>   
      <Row className="justify-content-center g-5">
        <Col md={10}>
          <Row>
            <Form.Group as={Col} className="mb-3 col-md-6 col-sm-12">
              <label htmlFor="term" className="form-label">Term</label>
              <Form.Control name="term" className="form-control" type="text" defaultValue={document.word} required placeholder="Term"></Form.Control>
            </Form.Group>
            <Form.Group  className="mb-3 col-md-6 col-sm-12">
              <label htmlFor="meaning" className="form-label">Meaning</label>
              <Form.Control name="meaning" className="form-control" type="text" defaultValue={document.english_word} required placeholder="Meaning"></Form.Control>
            </Form.Group>
            </Row>
            </Col>
          <Col className="mb-3 mt-sm-1 mt-md-5 justify-content-center">
            <p>Illustration preview</p>
            <img className="img-thumbnail" key={selectedIllustration.src} src={selectedIllustration.src || fallbackImgUrl} alt='Illustration thumbnail'></img>
          </Col>
          </Row> 
            
          <div className="justify-content-center">
              <button  type="submit" className="button-primary">Save</button>
          </div> 
          
                     
      </Form>
      <SearchImages />
      {/* <UploadImageForm /> */}
    </Container>
  )
  // function used to save the new word
  async function handleSaveChanges(event) {
    event.preventDefault();
      const formdata = {          
        word: event.target.term.value,
        imgUrl: selectedIllustration.src || fallbackImgUrl,
        attribution: selectedIllustration.author || "artist",
        english_word: event.target.meaning.value,
        topic: selectedTopic,
        user_id: user_id,
      }

      try{
        // Save the new word into the database word
        const response = await axios.post(`/api/words`, formdata);
        // log the updated word
        console.log(response.data);
        setFetchedData(prevData => [...prevData, response.data]);
        // Reset the form
        event.target.reset();
        // Reset the selected illustration
        dispatch(deSelectIllustration());
        dispatch(setTopic(selectedTopic));
      }
      catch(error){
        console.error("Error:", error.message);
      }
      setIsFirstWordSaved(true);
      setTopicExists(true);
  }

}

NewWord.propTypes = {
  document: propTypes.object,
  selectedTopic: propTypes.string.isRequired,
  setFetchedData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired,
  setIsFirstWordSaved: propTypes.func,
  setTopicExists: propTypes.func
}
export default NewWord;


// import propTypes from 'prop-types';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import SearchImages from "./SearchImages";
// // import UploadImageForm from "./UploadImageForm";
// import { deSelectIllustration } from '../../slices/illustrationSlice';
// import { setTopic } from '../../slices/topicSlice';
// import { Container, Row, Col} from 'react-bootstrap';



// // Component to add a new word
// function NewWord({selectedTopic, setFetchedData, fetchedData, setIsFirstWordSaved, setTopicExists}) {
//   const {userInfo} = useSelector((state) => state.auth);
//   const user_id = userInfo._id;
//   const dispatch = useDispatch();
//   const {selectedIllustration} = useSelector((state) => state.illustration);
//   const fallbackImgUrl = './assets/img-thumbnail-fallback.svg';

//   //create an empty form to add a new word which will be a new document in MongoDB
//    //initialize the state for the form document
//    const [document, setDocument] = useState({
//     word: "",
//     imgUrl: "",
//     attribution: "",
//     english_word: "",
//     topic: ""
//   });

//   // Update the document's fields when changes are made
//   useEffect(() => {
//     setDocument((prevDoc) => ({ ...prevDoc, topic: selectedTopic, imgUrl: selectedIllustration.src, attribution: selectedIllustration.author}));
//   }, [selectedTopic, selectedIllustration.src, selectedIllustration.author, selectedIllustration]);


//   return (
//     <Container fluid>
//       <form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, setFetchedData, fetchedData, user_id)} className="row g-3 needs-validation" noValidate>   
//                 <hr className="mt-2"/>            
//                 <div className="col-md-3 col-sm-4">
//                   <label htmlFor="word" className="form-label">Word</label>
//                   <input name="word" className="form-control" type="text" defaultValue={document.word} required placeholder="Word"></input>
//                 </div>
                
//                 <div className="col-md-3 col-sm-4">
//                   <label htmlFor="english_word" className="form-label">English Word</label>
//                   <input name="english_word" className="form-control" type="text" defaultValue={document.english_word} required placeholder="English word"></input>
//                 </div>
//                 <div className="col-md-2 col-sm-4">
//                   <p>Illustration preview</p>
//                   <img className="img-thumbnail" key={selectedIllustration.src} src={selectedIllustration.src || fallbackImgUrl} alt='Illustration thumbnail'></img>
//                 </div>
                
                  
//                 <div className="col-12">
//                     <button  type="submit" className="button-primary">Save</button>
//                 </div>               
//             </form>
//       <SearchImages />
//       {/* <UploadImageForm /> */}
//     </Container>
//   )
//   // function used to save the new word
//   async function handleSaveChanges(event) {
//     event.preventDefault();
//       const formdata = {          
//         word: event.target.word.value,
//         imgUrl: selectedIllustration.src || fallbackImgUrl,
//         attribution: selectedIllustration.author || "artist",
//         english_word: event.target.english_word.value,
//         topic: selectedTopic,
//         user_id: user_id,
//       }

//       try{
//         // Save the new word into the database word
//         const response = await axios.post(`/api/words`, formdata);
//         // log the updated word
//         console.log(response.data);
//         setFetchedData(prevData => [...prevData, response.data]);
//         // Reset the form
//         event.target.reset();
//         // Reset the selected illustration
//         dispatch(deSelectIllustration());
//         dispatch(setTopic(selectedTopic));
//       }
//       catch(error){
//         console.error("Error:", error.message);
//       }
//       setIsFirstWordSaved(true);
//       setTopicExists(true);
//   }

// }

// NewWord.propTypes = {
//   document: propTypes.object,
//   selectedTopic: propTypes.string.isRequired,
//   setFetchedData: propTypes.func.isRequired,
//   fetchedData: propTypes.array.isRequired,
//   setIsFirstWordSaved: propTypes.func,
//   setTopicExists: propTypes.func
// }
// export default NewWord;