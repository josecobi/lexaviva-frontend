import propTypes from 'prop-types';
import '../../index.css';
import axios from 'axios';

// Component to add a new word
function EmptyWord({document, updateData, fetchedData}) {

  return (
    <div>
      <form data-bs-theme="dark" onSubmit={(event) => handleSaveChanges(event, updateData, fetchedData)} className="row needs-validation" noValidate>   
                <hr className="mt-2"/>            
                <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>
                <div className="col">
                <input name="topic" className="form-control" type="text" defaultValue={document.topic}></input>
                </div>
                <div className="col">
                    <input name="english_word" className="form-control" type="text" defaultValue={document.english_word} required></input>
                </div>
                <div className="col">
                    <input name="word" className="form-control" type="text" defaultValue={document.word} required></input>
                </div>
                <div className="col">
                    <img className="thumbnail" src={document.imgUrl} alt="No image yet"></img>
                </div>
                <div className="col">
                    <input name="imgUrl" className="form-control" type="text" defaultValue={document.imgUrl} required></input>
                </div>
                <div className="col">
                    <input name="attribution" className="form-control" type="text" defaultValue={document.attribution} required></input>
                </div>
                <div className="col">
                    <button  value={document._id} className="btn btn-danger disabled">Remove</button>
                </div>
                <div className="col">
                    <button  type="submit" className="btn btn-success">Save</button>
                </div>
                
            </form>
    </div>
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
      }

      console.log("Trying to save this data:", formdata);
      try{
        // Save the new word into the database word
        const response = await axios.post(`http://localhost:5050/words`, formdata);
        // log the updated word
        console.log(response.data);
        updateData(prevData => [...prevData, response.data]);
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
  updateData: propTypes.func.isRequired,
  fetchedData: propTypes.array.isRequired
}
export default EmptyWord