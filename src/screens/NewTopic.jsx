import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import NewTopicForm from '../components/topics/NewTopicForm'
import axios from 'axios';
import Table from "../components/topics/Table";
import Loader from '../components/Loader';
import ModalTopicAlreadyExists from '../components/topics/ModalTopicAlreadyExists';
import NewWord from '../components/topics/NewWord';
import { Accordion, Container } from 'react-bootstrap';
import { setTopic } from '../slices/topicSlice';




// Component to add a new word
function NewTopic() {
  const {userInfo} = useSelector((state) => state.auth)
  const user_id = userInfo._id
  const [newTopicName, setNewTopicName] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [topicExists, setTopicExists] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isFirstWordSaved, setIsFirstWordSaved] = useState(false);
  const selectedTopic = useSelector((state) => state.topic.selectedTopic);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopicsData = async () => {
      setIsLoading(true);
      
      try {
        // Fetch data from a REST API. Each word has a topic field in the database. If the response contains at least one word, the topic already exists
        const response = await axios.get(`/api/words/topicsByUser?selectedTopic=${newTopicName}&user_id=${user_id}`);
        if (response.data.length > 0){
          console.log("Topic exists : ", response.data)
          setTopicExists(true);
          dispatch(setTopic(newTopicName));
          setModalShow(true);
          setIsFirstWordSaved(true);
          const words = await axios.get(`/api/words/byTopic?selectedTopic=${newTopicName}&user_id=${user_id}`);
          setFetchedData(words.data);
          
          console.log("words.data: ", words.data);
        } 
        else {
          setTopicExists(false);
          console.log("response: ", response.data.length)
          
        } 
        console.log("response.data: ", response.data)
      
      
        
      } catch (error) {
        //Handle error if the request fails
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    
    // Call the fetchData function
    if (newTopicName) {
      getTopicsData();
    }
  }, [newTopicName, user_id, dispatch]);

    //Handle hide. The topic that already exists is displayed in the table behind the modal
    const handleHide = () => {
      setModalShow(false);
      dispatch(setTopic(newTopicName));//so the name of the topic is displayed in the table
      setNewTopicName(""); //reset the topic name
      setTopicExists(false);     
    }

    // handle click event to set the new topic name
    const handleClickNewTopicName = () => {
      setModalShow(false);
      setNewTopicName("");
      dispatch(setTopic(null));
      console.log("Selected topic after click try new name in modal: ", selectedTopic)
      setTopicExists(false);
      setIsFirstWordSaved(false);//so the new word form is displayed
      setFetchedData([]);
    }

  return (
    <>
        {isLoading ? (<Loader />) : (
            <Container className=" text-center screen-container p-3 mt-4">
              <p className="pages-title">New Topic</p>
              {/* show modal if the topic already exists */}
              {modalShow && (<ModalTopicAlreadyExists topic={selectedTopic} show={modalShow} onHide={handleHide} handleClickNewTopicName={handleClickNewTopicName}/>)}

              {/* if the topic does not exist, show the new topic form */}
              {!topicExists && !newTopicName && !isFirstWordSaved && (<NewTopicForm setNewTopicName={setNewTopicName}/>) }

              {/* if the user entered a new topic name, if the topic does not exist in the DB, show the new word form */}  
              {newTopicName && !topicExists &&
              (<>
                <p className="topic-title">{newTopicName}</p>
                <Accordion>
                  <Accordion.Item key="0" eventKey="0">
                    <Accordion.Header>Add a new word</Accordion.Header>
                    <Accordion.Body>
                        {/* Add a new word form */}
                        <NewWord selectedTopic={newTopicName} setFetchedData={setFetchedData} fetchedData={fetchedData} setIsFirstWordSaved={setIsFirstWordSaved} setTopicExists={setTopicExists}/> 
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>) }
              {/* if the topic exists because it already has a word in it, show the table with the words */}
              {(isFirstWordSaved && <><p className="topic-title">{selectedTopic}</p> <Table className="mt-5 mb-3" fetchedData={fetchedData} selectedTopic={selectedTopic} setFetchedData={setFetchedData} setIsFirstWordSaved={setIsFirstWordSaved} setTopicExists ={setTopicExists} /> </>)}
            </Container>
        )}
    </>
  )
}


export default NewTopic;
