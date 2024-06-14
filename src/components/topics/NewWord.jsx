import propTypes from 'prop-types';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchImages from "./SearchImages";
// import UploadImageForm from "./UploadImageForm";
import { deSelectIllustration } from '../../slices/illustrationSlice';


// Component to add a new word
function NewWord({selectedTopic, setFetchedData, fetchedData}) {
  const {userInfo} = useSelector((state) => state.auth);
  const user_id = userInfo._id;
  const dispatch = useDispatch();
  const {selectedIllustration} = useSelector((state) => state.illustration);

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
    <>
      <form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, setFetchedData, fetchedData, user_id)} className="row g-3 needs-validation" noValidate>   
                <hr className="mt-2"/>            
                <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>
                <div className="col-md-2 col-sm-4">
                  <img className="thumbnail" key={selectedIllustration.src} src={selectedIllustration.src} alt='Illustration thumbnail'></img>
                </div>
                <div className="col-md-3 col-sm-4">
                  <label htmlFor="topic" className="form-label">Topic</label>
                  <input name="topic" className="form-control" type="text" readOnly disabled defaultValue={document.topic}></input>
                </div>
                
                <div className="col-md-3 col-sm-4">
                  <label htmlFor="english_word" className="form-label">English Word</label>
                  <input name="english_word" className="form-control" type="text" defaultValue={document.english_word} required placeholder="English word"></input>
                </div>
                <div className="col-md-3 col-sm-4">
                  <label htmlFor="word" className="form-label">Word</label>
                  <input name="word" className="form-control" type="text" defaultValue={document.word} required placeholder="Word"></input>
                </div>
                  <input name="attribution" className="form-control" type="hidden" defaultValue={document.attribution} required placeholder="Image by artist"></input>
                  <input name="imgUrl" className="form-control" type="hidden" defaultValue={document.imgUrl} required placeholder="https://img.freepik.com/free-vector/exmple-image-of-your-choice"></input>
                  
                <div className="col-12">
                    <button  type="submit" className="btn btn-success">Save</button>
                </div>               
            </form>
      <SearchImages />
      {/* <UploadImageForm /> */}
    </>
  )
  // function used to save the new word
  async function handleSaveChanges(event) {
    event.preventDefault();
      const formdata = {          
        word: event.target.word.value,
        imgUrl: event.target.imgUrl.value,
        attribution: event.target.attribution.value,
        english_word: event.target.english_word.value,
        topic: event.target.topic.value,
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
      }
      catch(error){
        console.error("Error:", error.message);
      }
   
  }

}

NewWord.propTypes = {
  document: propTypes.object,
  selectedTopic: propTypes.string.isRequired,
  setFetchedData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired

}
export default NewWord;