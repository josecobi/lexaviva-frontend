import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import EmptyWord from '../components/topics/EmptyWord';
import NewTopicForm from '../components/topics/NewTopicForm'
import axios from 'axios';
import Table from "../components/topics/Table";

// Component to add a new word
function NewTopic() {
  const {userInfo} = useSelector((state) => state.auth)
  const user_id = userInfo._id
  const [newTopicName, setNewTopicName] = useState("");
  const [isFirstWordSaved, setIsFirstWordSaved] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/words/bytopic?selectedTopic=${newTopicName}&user_id=${user_id}`);
        if (response.data.length > 1) {
            setFetchedData(response.data)          
            console.log("set fetched data to response data and sef first word to 'true'")
        }
        else if (response.data.length === 1) {
          setIsFirstWordSaved(true);
          console.log("Response data length === 1")
        }
        
      } catch (error) {
        //Handle error if the request fails
        console.error("Error fetching data:", error);
      }
    };
    
    // Call the fetchData function
    if (newTopicName) {
      fetchData();
    }
  }, [newTopicName, user_id, fetchedData, isFirstWordSaved]);

    
  return (
    <>
   

    {!newTopicName && <NewTopicForm setNewTopicName={setNewTopicName} />}     

    {newTopicName && !isFirstWordSaved && <EmptyWord selectedTopic={newTopicName} setFetchedData={setFetchedData} fetchedData={fetchedData}/> }

    {isFirstWordSaved && <Table fetchedData={fetchedData} selectedTopic={newTopicName} setFetchedData={setFetchedData}/>}

    </>
  )
}

NewTopic.propTypes = {

}
export default NewTopic