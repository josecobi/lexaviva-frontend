import propTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import {FaTrash, FaTrashAlt} from 'react-icons/fa';




import { useSelector } from 'react-redux';

// This component is used to display the words in the table
function Word({document, updateData, fetchedData}) {
  const {userInfo} = useSelector((state) => state.auth)
  const user_id = userInfo._id
  return (
    <>
      
      <form data-bs-theme="light" onSubmit={(event) => handleSaveChanges(event, updateData, fetchedData, user_id)} className="row g-3">   

                <div className="col-md-3 col-sm-4">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <input name="topic"  id="topic" className="form-control" type="text" required defaultValue={document.topic}></input>
                </div>
                <div className="col-md-3 col-sm-4 col-xsm-4">
                    <label htmlFor="english_word" className="form-label">English Word</label>
                    <input name="english_word" id="english_word" className="form-control" type="text" required defaultValue={document.english_word}></input>
                </div>
                <div className="col-md-3 col-sm-4" >
                <label htmlFor="word" className="form-label">Word</label>
                    <input name="word" id="word" className="form-control" type="text" defaultValue={document.word}></input>
                </div>  
                <div className="col-md-3 col-sm-4">
                    <label htmlFor="attribution" className="form-label">Attribution</label>
                    <input name="attribution" id="attribution" className="form-control" type="text" defaultValue={document.attribution}></input>
                </div>             
                <div className="col-12 ">
                    <label htmlFor="imgUrl" className="form-label">Image URL</label>
                    <input name="imgUrl" id="imgUrl" className="form-control" type="text" defaultValue={document.imgUrl}></input>
                </div>
                
                <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>                
                
                <div>
                    <Button onClick={(event) => handleRemoveWord(event, fetchedData, updateData)} value={document._id} className="btn btn-danger"><FaTrashAlt/>Remove</Button>
                </div>
                <div>
                    <button  type="submit" className="btn btn-success">Save</button>
                </div>
               

            </form>
    </>
  )
  // function used to update the word
  async function handleSaveChanges(event, updateData, fetchedData, user_id) {
    event.preventDefault();
      
      try{
        const formdata = {
          _id: event.target.id.value,
          word: event.target.word.value,
          imgUrl: event.target.imgUrl.value,
          attribution: event.target.attribution.value,
          english_word: event.target.english_word.value,
          topic: event.target.topic.value,
          user_id: user_id

      }
      console.log("event id:", event.target.id.value);
      console.log("save this data:", formdata);
        // update the word
         const response = await axios.put(`api/words/update/${event.target.id.value}`, formdata);
        // const response = await axios.put(`https://lexaviva-backend.vercel.app/words/update/${event.target.id.value}`, formdata);
        //const response = await axios.put(`https://lexaviva-backend.onrender.com/words/update/${event.target.id.value}`, formdata);
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
      // alert the user to confirm the deletion
      if (!window.confirm("Are you sure you want to delete this word?")) {
        return;
      }
      else {
        await axios.delete(`/api/words/delete/${event.target.value}`);

        //await axios.delete(`https://lexaviva-backend.onrender.com/words/delete/${event.target.value}`);
        // await axios.delete(`https://lexaviva-backend.vercel.app/words/delete/${event.target.value}`);
  
        // lift up the state so the word is removed from the list 
        const wordsNotDeleted = fetchedData.filter(word => word && word._id !== event.target.value);
        updateData(wordsNotDeleted);
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
 document: propTypes.object.isRequired,
  selectedTopic: propTypes.string.isRequired,
  updateData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired
}
export default Word