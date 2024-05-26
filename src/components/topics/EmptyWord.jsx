import propTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// Component to add a new word
function EmptyWord({selectedTopic, setFetchedData, fetchedData}) {
  const {userInfo} = useSelector((state) => state.auth)
  const user_id = userInfo._id

  //create an empty form to add a new word which will be a new document in MongoDB
   //initialize the state for the form document
   const [document, setDocument] = useState({
    word: "",
    imgUrl: "",
    attribution: "",
    english_word: "",
    topic: selectedTopic
  });

  // Update the document's topic field when selectedTopic changes
  useEffect(() => {
    setDocument((prevDoc) => ({ ...prevDoc, topic: selectedTopic }));
  }, [selectedTopic]);


  return (
    <>
      <form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, setFetchedData, fetchedData, user_id)} className="row g-3 needs-validation" noValidate>   
                <hr className="mt-2"/>            
                <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>
                <div className="col-md-3 col-sm-4">
                  <input name="topic" className="form-control" type="text" readOnly disabled defaultValue={document.topic}></input>
                </div>
                <div className="col-md-3 col-sm-4">
                    <input name="english_word" className="form-control" type="text" defaultValue={document.english_word} required placeholder="English word"></input>
                </div>
                <div className="col-md-3 col-sm-4">
                    <input name="word" className="form-control" type="text" defaultValue={document.word} required placeholder="Word"></input>
                </div>
                
                <div className="col-md-3 col-sm-4">
                    <input name="attribution" className="form-control" type="text" defaultValue={document.attribution} required placeholder="Image by artist"></input>
                </div>
                <div className="col-12">
                    <input name="imgUrl" className="form-control" type="text" defaultValue={document.imgUrl} required placeholder="https://img.freepik.com/free-vector/exmple-image-of-your-choice"></input>
                </div>                               
                <div className="col">
                    <button  type="submit" className="btn btn-success">Save</button>
                </div>               
            </form>
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

      console.log("Trying to save this data:", formdata);
      try{
        // Save the new word into the database word
        const response = await axios.post(`/api/words`, formdata);
        // log the updated word
        console.log(response.data);
        setFetchedData(prevData => [...prevData, response.data]);
        // Reset the form
        event.target.reset();
    }
    catch(error){
      console.error("Error:", error.message);
    }
   
  }

}

EmptyWord.propTypes = {
 document: propTypes.object.isRequired,
  selectedTopic: propTypes.string.isRequired,
  setFetchedData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired

}
export default EmptyWord