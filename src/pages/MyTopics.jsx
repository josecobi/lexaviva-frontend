import { useState, useEffect } from 'react';
import Topic from '../components/topics/Topic';
import Table from '../components/topics/Table';
import axios from 'axios';

//component to display the topics and terms
function MyTopics() {
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
    axios.post('http://localhost:5050/words/bytopic', { selectedTopic: e.target.value })
      .then(response => {
        setFetchedData(response.data)
      })
      .catch(error => console.error("Error:", error.message));
  }

  // fetch the topics and reassign the response to the state
  useEffect( () => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5050/words/topics');
        setFetchedTopics(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="container text-center">
        {/** Display the topics and terms when the topic is selected*/}
        <h4>My Topics</h4>
        <p>Check and edit your own topics and terms. Edit the name of the topic if you want to create a new topic with that word.</p>
        <div className="row justify-content-center mt-4">
            <div className="col-4 dropdown">
                <select className="form-select select"  aria-label="Select Topics" onChange={handlechange} name="topic" defaultValue="option1">
                    <option className='topic-option' value="option1" disabled>Select a topic</option>                

                    {fetchedTopics.map((topic, index) => { 
                        return (
                        
                          <Topic handleclick={handlechange} topic={topic} key={index} />
                        
                        ) 
                    })}
                </select >
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

