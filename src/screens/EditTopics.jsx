import { useState, useEffect } from 'react';
import Topic from '../components/topics/Topic';
import Table from '../components/topics/Table';
import axios from 'axios';
import Loader from '../components/global/Loader';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { deSelectIllustration } from '../slices/illustrationSlice';
import { setTopic } from '../slices/topicSlice';
import {Container} from "react-bootstrap";



//component to display the topics and terms
function EditTopics() {
const { selectedTopic } = useSelector((state) => state.topic);
  const {userInfo} = useSelector((state) => state.auth);
  const [fetchedTopics, setFetchedTopics] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();



  // handle event when a topic is selected
  const handlechange = (e) => {
    console.log("clicked: ", e.target.value);
    dispatch(setTopic(e.target.value));    
     axios.get(`/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
      .then(response => {
        setFetchedData(response.data)
        dispatch(deSelectIllustration());
      })
      .catch(error => console.error("Error:", error.message));
  }

  // fetch the topics and reassign the response to the state
  useEffect( () => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/words/topics?user_id=${userInfo._id}`);
        setFetchedTopics(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, [userInfo._id])

  return (
    <Container className="text-center screen-container mt-3 p-2">
        {/** Display the topics and terms when the topic is selected*/}
        <p className="pages-title">Edit Topics</p>
        <div className="row justify-content-center mt-4">
            <div className="col-md-4  col-sm-10 dropdown">
                {(// show the Loader while the data is being fetched
                fetchedTopics.length === 0 ? <Loader /> : 
                <select className="form-select select"  aria-label="Select Topics" onChange={handlechange} name="topic" defaultValue="option1">
                <option className='topic-option' value="option1" disabled>Select a topic</option>                

                {fetchedTopics.map((topic, index) => { 
                    return (
                    
                      <Topic handleclick={handlechange} topic={topic} key={index} />
                    
                    ) 
                })}
            </select >)}
                
            </div >
        </div>
        {/** Display the table with the words */}
        <div className="row justify-content-center mt-3">
        <Table  fetchedData={fetchedData} selectedTopic={selectedTopic} setFetchedData={setFetchedData}/>
        </div>
    </Container>
  )
}

export default EditTopics;