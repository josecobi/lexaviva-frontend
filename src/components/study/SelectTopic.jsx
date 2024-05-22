import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


function SelectTopic() {
    //set the state for the select menu and the data that will be fetched(vocab words data)
    const [fetchedTopics, setFetchedTopics] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    // const [selectedTopic, setSelectedTopic] = useState('option1');
    const [wordIndex, setWordIndex] = useState(0);
    // Check if user is loged in
    const {userInfo} = useSelector((state) => state = state.auth);

    // fetch the topics and reassign the response to the state 
    useEffect(() => {
        // axios.get(`https://lexaviva-backend.vercel.app/api/words/topics?user_id=${userInfo._id}`)
        axios.get(`/api/words/topics?user_id=${userInfo._id}`)
        //axios.get(`https://lexaviva-backend.onrender.com/api/words/topics?user_id=${userInfo._id}`)
            .then(response => setFetchedTopics(response.data))
            .catch(error => console.error("Error:", error.message));
    }, [userInfo]);

    // handle event when submit button is clicked
    const handleChange = async (e) => {
        //counter for the words to display in the card
        setWordIndex(0);
        e.preventDefault();
        // await axios.get(`https://lexaviva-backend.vercel.app/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
        await axios.get(`/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
            // await axios.get(`https://lexaviva-backend.onrender.com/api/words/bytopic?selectedTopic=${e.target.value}&user_id=${userInfo._id}`)
        // reasign the value 
        .then(response => {
            setFetchedData(response.data);
        })     
        .catch(error => console.error("Error:", error.message));
    }

    return (
        <div className="mt-3 container text-center">
            <div className="row justify-content-center mt-2">
                <div className="col-4 dropdown">
                    {// show the spinner while the data is being fetched
                        fetchedTopics.length === 0 ? <Loader /> :
                            <form >
                                    <select onChange={handleChange} className="form-select select mb-2"  aria-label="Select Topics" name="topic" defaultValue="option1">
                                        <option className='topic-option' value="option1" disabled>Select a topic</option>
                                        {fetchedTopics.map((topic, index) => (
                                            <option className='topic-option' value={topic} key={index}>{topic}</option>
                                        ))}
                                    </select>

                                <br />
                            </form>}
                </div>
            </div>
            {/* check both fetchedData and fetchedData[wordIndex] to see they aren't empty. If not, display card for the first element*/}
            {  
            
            fetchedData && fetchedData[wordIndex] && (
                
                <div className="container">
                    
                    <Card
                        word={fetchedData[wordIndex].word}
                        imgUrl={fetchedData[wordIndex].imgUrl}
                        attribution={fetchedData[wordIndex].attribution}
                        english_word={fetchedData[wordIndex].english_word}
                        
                    />
                 
                    {/* Use buttons to change the state of the wordIndex to render previous or next images */}
                    <button className="btn btn-light d-inline-flex align-items-center mx-2" onClick={() => setWordIndex(wordIndex - 1)}>Previous Word</button>
                    <button className="btn btn-light d-inline-flex align-items-center mx-2" onClick={() => setWordIndex(wordIndex + 1)}>Next Word</button>                    
                </div>
            )}
        </div>
    );
}

export default SelectTopic;

SelectTopic.propTypes = {
    user_id: PropTypes.string
}