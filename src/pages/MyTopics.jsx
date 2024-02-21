import { useState, useEffect } from 'react';
import Topic from '../components/topics/Topic';
import Table from '../components/topics/Table';
import axios from 'axios';

function MyTopics() {
  const [fetchedTopics, setFetchedTopics] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const handlechange = (e) => {
   console.log("clicked: ", e.target.value);

    axios.post('http://localhost:5050/words/bytopic', { selectedTopic: e.target.value })
      .then(response => {
        setFetchedData(response.data)
      })
      .catch(error => console.error("Error:", error.message));
  }

  useEffect(() => {
    axios.get('http://localhost:5050/words/topics')
      .then(response => {
        setFetchedTopics(response.data);
      })
  }, [])

  return (
    <div>
      <h3>Topics</h3>
      <select onChange={handlechange} name="topic" defaultValue="option1">
          <option className='topic-option' value="option1" disabled>Select a topic</option>
      {fetchedTopics.map((topic, index) => { 
          return (
          
          <Topic handleclick={handlechange} topic={topic} key={index} />
          
          ) 
      })}
      </select >

      <h3></h3>
      <Table  fetchedData={fetchedData}/>
    </div>
  )
}

export default MyTopics;

