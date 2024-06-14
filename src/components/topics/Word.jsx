import propTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import SearchImages from './SearchImages';
import { useEffect, useState } from 'react';


// This component is used to display the words in the table
function Word({wordData, setFetchedData, fetchedData}) {
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

  const fallbackImgUrl = 'https://via.placeholder.com/150';

 // Update the document's fields when changes are made
 useEffect(() => {
  setDocument((prevDoc) => ({ ...prevDoc,  imgUrl: selectedIllustration.src, attribution: selectedIllustration.author}));
}, [selectedIllustration.src, selectedIllustration.author]);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setDocument((prevDoc) => ({
    ...prevDoc,
    [name]: value
  }));
};

  return (
    <>
      
      <form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, setFetchedData, fetchedData, user_id)} className="row justify-content-center g-3">   
      <div className="col-2 justify-content-center mb-3">
            <p>Illustration preview</p>
              <img className="thumbnail" src={document.imgUrl || fallbackImgUrl} alt='Illustration thumbnail'></img>
          </div>
          <div className="col-md-3 col-sm-4">
              <label htmlFor="topic" className="form-label">Topic</label>
              <input name="topic"  id="topic" className="form-control" type="text" required value={document.topic}
            onChange={handleInputChange}></input>
          </div>
          <div className="col-md-3 col-sm-4 col-xsm-4">
              <label htmlFor="english_word" className="form-label">English Word</label>
              <input name="english_word" id="english_word" className="form-control" type="text" required value={document.english_word}
            onChange={handleInputChange}></input>
          </div>
          <div className="col-md-3 col-sm-4" >
          <label htmlFor="word" className="form-label">Word</label>
              <input name="word" id="word" className="form-control" type="text" value={document.word}
            onChange={handleInputChange}></input>
          </div>  
          {/* <div className="col-md-3 col-sm-4">
              <label htmlFor="attribution" className="form-label">Attribution</label>
              <input name="attribution" id="attribution" className="form-control" type="text" value={document.attribution}
            onChange={handleInputChange}></input>
          </div>             
          <div className="col-12">
              <label htmlFor="imgUrl" className="form-label">Image URL</label>
              <input name="imgUrl" id="imgUrl" className="form-control" type="text" value={document.imgUrl}
            onChange={handleInputChange}></input>
          </div> */}
          <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>                
          
          <div className="container fluid my-3">
              <Button onClick={(event) => handleRemoveWord(event, fetchedData, setFetchedData)} value={document._id} className="btn btn-danger me-3">Remove</Button>     
              <button  type="submit" className="btn btn-success">Save</button>
          </div>
          

      </form>
      <SearchImages />

    </>
  )
  // function used to update the word
  async function handleSaveChanges(event, setFetchedData, fetchedData, user_id) {
    event.preventDefault();
      
      try{
        const formData = {
          _id: event.target.id.value,
          word: event.target.word.value,
          imgUrl: selectedIllustration.src,
          attribution: selectedIllustration.author,
          english_word: event.target.english_word.value,
          topic: event.target.topic.value,
          user_id: user_id
      }

      console.log("event id:", event.target.id.value);
      console.log("save this data:", formData);
        // update the word
         const response = await axios.put(`api/words/update/${event.target.id.value}`, formData);
        
        // log the updated word
        console.log("response data should be the updated word: ", response.data);
        console.log("fetched data inside handleSaveChanges:", fetchedData)
        // Find the index of the object with the given id
        const indexOfModifiedWord = fetchedData.findIndex(word => word._id === event.target.id.value);

        //create a copy of fetchedData
        const newData = [...fetchedData];

        //replace the object at the found index with the updated object
        newData[indexOfModifiedWord] = response.data;

        // lift up the state so the word is updated in the list
        setFetchedData(newData);
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
  fetchedData: propTypes.array.isRequired
}
export default Word