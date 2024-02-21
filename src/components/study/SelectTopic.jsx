import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function SelectTopic() {
    //set the state for the select menu and the data that will be fetched(vocab words data)
    const [fetchedTopics, setFetchedTopics] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    // const [selectedTopic, setSelectedTopic] = useState('option1');
    const [wordIndex, setWordIndex] = useState(0);

    // fetch the topics and reassign the response to the state 
    useEffect(() => {
        axios.get('http://localhost:5050/words/topics')
            .then(response => setFetchedTopics(response.data))
            .catch(error => console.error("Error:", error.message));
    }, []);//use empty dependency array to run just once

    // handle event when submit button is clicked
    const handleSubmit = (e) => {
        //counter for the words to display in the card
        setWordIndex(0);
        e.preventDefault();
        const selectedTopic = e.target.elements.topic.value;
        axios.post('http://localhost:5050/words/bytopic', {
            selectedTopic: selectedTopic})
        // reasign the value 
        .then(response => {
            setFetchedData(response.data);
        })     
        .catch(error => console.error("Error:", error.message));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Pick a topic:
                    <select name="topic" defaultValue="option1">
                        <option className='topic-option' value="option1" disabled>Select a topic</option>
                        {fetchedTopics.map((topic, index) => (
                            <option className='topic-option' value={topic} key={index}>{topic}</option>
                        ))}
                    </select>
                </label>
                <hr />
                <button type="submit">Start Learning</button>
            </form>
            {/* check both fetchedData and fetchedData[wordIndex] to see they aren't empty. If not, display card for the first element*/}
            {fetchedData && fetchedData[wordIndex] && (
                <div>
                    
                    <Card
                        word={fetchedData[wordIndex].word}
                        imgUrl={fetchedData[wordIndex].imgUrl}
                        attribution={fetchedData[wordIndex].attribution}
                        english_word={fetchedData[wordIndex].english_word}
                        
                    />
                    {/* Use buttons to change the state of the wordIndex to render previous or next images */}
                    <button onClick={() => setWordIndex(wordIndex - 1)}>Previous Word</button>
                    <button onClick={() => setWordIndex(wordIndex + 1)}>Next Word</button>
                </div>
            )}
        </div>
    );
}

export default SelectTopic;