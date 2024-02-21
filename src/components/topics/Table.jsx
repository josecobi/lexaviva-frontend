import propTypes from 'prop-types';
import axios from 'axios';

function Table({fetchedData}) {
  

   


    if(fetchedData.length === 0) {
        return <div></div>
    }
  return (
    <div className="container">
    <div className="row">
        <div className="col">English Word</div>
        <div className="col">Word</div>
        <div className="col">Image</div>
        <div className="col">Image URL</div>
        <div className="col">Attribution</div>
        <div className="col"></div>
        <div className="col"></div>
    </div>
    {fetchedData.map((document, index) => {
        return (
            <form onSubmit={handleSubmit} key={index} className="row">               
                <input name="id" className="form-control" type="hidden" defaultValue={document._id}></input>
                <input name="topic" className="form-control" type="hidden" defaultValue={document.topic}></input>

                <div className="col">
                    <input name="english_word" className="form-control" type="text" defaultValue={document.english_word}></input>
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
                    <button onClick={handleRemove} value={document._id} className="btn btn-danger">Remove</button>
                </div>
                <div className="col">
                    <button  type="submit" className="btn btn-success">Save</button>
                </div>
                <hr />
            </form>
            
        )
    })}
</div>
  )

  function handleSubmit(event) {
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
      axios.put(`http://localhost:5050/words/update/${event.target.id.value}`, formdata);
   
  }

  function handleRemove(event) {
    
     try{
      console.log("event id:", event.target.value);
  
      axios.delete(`http://localhost:5050/words/delete/${event.target.value}`);
     }
     catch(error){
       console.error("Error:", error.message);
     }
     event.preventDefault();
  }
}

Table.propTypes = {
  fetchedData: propTypes.array.isRequired,
}
export default Table