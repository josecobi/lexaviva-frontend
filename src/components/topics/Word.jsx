import propTypes from 'prop-types';
import '../../index.css';
import axios from 'axios';
import { useEffect } from 'react';
// This component is used to display the words in the table
function Word({document, updateData, fetchedData}) {
  return (
    <div>
      <form data-bs-theme="dark" onSubmit={(event) => handleSaveChanges(event, updateData, fetchedData)}className="row">   
                <hr className="mt-2"/>            
                <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>
                <div className="col">
                <input name="topic" className="form-control" type="text" defaultValue={document.topic}></input>
                </div>
                <div className="col">
                    <input name="english_word" className="form-control" type="text" required defaultValue={document.english_word}></input>
                </div>
                <div className="col">
                    <input name="word" className="form-control" type="text" defaultValue={document.word}></input>
                </div>
                <div className="col">
                    <img className="thumbnail" src={document.imgUrl}></img>
                </div>
                <div className="col">
                    <input name="imgUrl" className="form-control" type="text" defaultValue={document.imgUrl}></input>
                </div>
                <div className="col">
                    <input name="attribution" className="form-control" type="text" defaultValue={document.attribution}></input>
                </div>
                <div className="col">
                    <button onClick={(event) => handleRemoveWord(event, fetchedData, updateData)} value={document._id} className="btn btn-danger">Remove</button>
                </div>
                <div className="col">
                    <button  type="submit" className="btn btn-success">Save</button>
                </div>
                
            </form>
    </div>
  )
  // function used to update the word
  async function handleSaveChanges(event, updateData, fetchedData) {
    event.preventDefault();
      const formdata = {
          _id: event.target.id.value,
          word: event.target.word.value,
          imgUrl: event.target.imgUrl.value,
          attribution: event.target.attribution.value,
          english_word: event.target.english_word.value,
          topic: event.target.topic.value,

      }
      console.log("event id:", event.target.id.value);
      console.log("save this data:", formdata);
      try{
        // update the word
        const response = await axios.put(`http://localhost:5050/words/update/${event.target.id.value}`, formdata);
        // log the updated word
        console.log(response.data);
        console.log("fetech data inside handleSaveChanges:", fetchedData)
        // Find the index of the object with the given id
        const indexOfModifiedWord = fetchedData.findIndex(word => word._id === event.target.id.value);

        //create a copy of fetchedData
        const newData = [...fetchedData];

        //replace the object at the found index with the updated object
        newData[indexOfModifiedWord] = response.data;

        // lift up the state so the word is updated in the list
        updateData(newData);
    }
    catch(error){
      console.error("Error:", error.message);
    }
   
  }
  // function used to remove the word
  async function handleRemoveWord(event, fetchedData, updateData) {
    try {
      console.log("event id:", event.target.value);    
      await axios.delete(`http://localhost:5050/words/delete/${event.target.value}`);
  
      // lift up the state so the word is removed from the list 
      const wordsNotDeleted = fetchedData.filter(word => word && word._id !== event.target.value);
      updateData(wordsNotDeleted);
    }
    catch(error) {
      console.error("Error:", error.message);
    }
    event.preventDefault();
  }
  
}
// define the prop types
Word.propTypes = {
 document: propTypes.object.isRequired,
  selectedTopic: propTypes.string.isRequired,
  updateData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired
}
export default Word