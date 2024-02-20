import { useState, useEffect } from 'react';
import Card from './Card';

function SelectTopic() {
    //set the state for the select menu and the data that will be fetched(vocab words data)
    const [fetchedTopics, setFetchedTopics] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    // const [selectedTopic, setSelectedTopic] = useState('option1');
    const [wordIndex, setWordIndex] = useState(0);

    // fetch the topics and reassign the response to the state 
    useEffect(() => {
        fetch('http://localhost:5050/words/topics')
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => setFetchedTopics(data))
            .catch(error => console.error("Error:", error.message));
    }, []);//use empty dependency array to run just once

    // handle event when submit button is clicked
    const handleSubmit = (e) => {
        //counter for the words to display in the card
        setWordIndex(0);
        e.preventDefault();
        const selectedTopic = e.target.elements.topic.value;
        fetch('http://localhost:5050/words/bytopic', {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ selectedTopic })
        })
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        // reasign the value 
        .then(data => setFetchedData(data))
        .catch(error => console.error("Error:", error.message));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Pick a topic:
                    <select name="topic" defaultValue="option1">
                        <option value="option1" disabled>Select a topic</option>
                        {fetchedTopics.map((topic, index) => (
                            <option value={topic} key={index}>{topic}</option>
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