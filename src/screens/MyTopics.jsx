import { useState, useEffect } from 'react';
import Topic from '../components/topics/Topic';
import Table from '../components/topics/Table';
import axios from 'axios';
import Loader from '../components/Loader';
// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";


// // //component to display the topics and terms
function MyTopics() {
  const {userInfo} = useSelector((state) => state.auth);
  
  

//   return(<div>MyTopics</div>)
// }
  const [fetchedTopics, setFetchedTopics] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  // update the state with the new data
  const updateData = (newData) => {
    
    setFetchedData(newData);
  } 

  // handle event when a topic is selected
  const handlechange = (e) => {
    console.log("clicked: ", e.target.value);
    setSelectedTopic(e.target.value);
    
    // axios.get(`https://lexaviva-backend.vercel.app/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
     axios.get(`/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
    // axios.get(`https://lexaviva-backend.onrender.com/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
      .then(response => {
        setFetchedData(response.data)
      })
      .catch(error => console.error("Error:", error.message));
    

  }

  // fetch the topics and reassign the response to the state
  useEffect( () => {
    async function fetchData() {
      try {
         const response = await axios.get(`/api/words/topics?user_id=${userInfo._id}`);
        // const response = await axios.get(`https://lexaviva-backend.vercel.app/api/words/topics?user_id=${userInfo._id}`);
        //const response = await axios.get(`https://lexaviva-backend.onrender.com/api/words/topics?user_id=${userInfo._id}`);

        setFetchedTopics(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, [userInfo._id])

  return (
    <div className="container text-center">
        {/** Display the topics and terms when the topic is selected*/}
        <h4>My Topics</h4>
        <p>Check and edit your own topics and terms. Edit the name of the topic if you want to create a new topic with that word.</p>
        <div className="row justify-content-center mt-4">
            <div className="col-4 dropdown">
                {// show the Loader while the data is being fetched
                fetchedTopics.length === 0 ? <Loader /> : <select className="form-select select"  aria-label="Select Topics" onChange={handlechange} name="topic" defaultValue="option1">
                <option className='topic-option' value="option1" disabled>Select a topic</option>                

                {fetchedTopics.map((topic, index) => { 
                    return (
                    
                      <Topic handleclick={handlechange} topic={topic} key={index} />
                    
                    ) 
                })}
            </select >}
                
            </div >
        </div>
        {/** Display the table with the words */}
        <div className="row justify-content-center mt-4">
        <h4>{selectedTopic}</h4>
        <Table  fetchedData={fetchedData} selectedTopic={selectedTopic} updateData={updateData}/>
        </div>
    </div>
  )
}

export default MyTopics;

// MyTopics.propTypes = {
//   user_id: PropTypes.string
// }