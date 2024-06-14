import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import NewWord from '../components/topics/NewWord';
import NewTopicForm from '../components/topics/NewTopicForm'
import axios from 'axios';
import Table from "../components/topics/Table";
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

// Component to add a new word
function NewTopic() {
  const {userInfo} = useSelector((state) => state.auth)
  const user_id = userInfo._id
  const [newTopicName, setNewTopicName] = useState("");
  const [isFirstWordSaved, setIsFirstWordSaved] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      

      try {
        // Fetch data from a REST API. Each word has a topic field in the database. If the response contains at least one word, the topic already exists
        const response = await axios.get(`/api/words/bytopic?selectedTopic=${newTopicName}&user_id=${user_id}`);
        if (response.data.length > 1) {
            setNewTopicName("");
            // send error message and toast letting user know that topic exists and to choose another or edit topics in the table component
            console.log("Topic exists, choose another or edit the existing topic in the 'My Topics' section");
            toast.error("Topic exists, choose another or edit the existing topic in the 'My Topics' section", {duration: 5000});
            
            // setFetchedData(response.data)          

            
            // console.log("set fetched data to response data and set first word to 'true'")
        }
        else if (response.data.length === 1) {
          setIsFirstWordSaved(true);
          console.log("Response data length === 1");
        }
        
      } catch (error) {
        //Handle error if the request fails
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    
    // Call the fetchData function
    if (newTopicName) {
      fetchData();
    }
  }, [newTopicName, user_id, fetchedData, isFirstWordSaved]);

    
  return (
    <>
   {isLoading ? (
            <Loader /> // Or replace with your own loading component
        ) : (
            <>
                {!isFirstWordSaved && newTopicName && <NewWord selectedTopic={newTopicName} setFetchedData={setFetchedData} fetchedData={fetchedData}/> }
                {!newTopicName && <NewTopicForm setNewTopicName={setNewTopicName} />}  
                {isFirstWordSaved && <Table fetchedData={fetchedData} selectedTopic={newTopicName} setFetchedData={setFetchedData}/>}
            </>
        )}

   {/* {!isFirstWordSaved && newTopicName &&  <NewWord selectedTopic={newTopicName} setFetchedData={setFetchedData} fetchedData={fetchedData}/> }
   
  {!newTopicName && <NewTopicForm setNewTopicName={setNewTopicName} />}   */}
   

    

    {/* {isFirstWordSaved && <Table fetchedData={fetchedData} selectedTopic={newTopicName} setFetchedData={setFetchedData}/>} */}


    </>
  )
}


export default NewTopic