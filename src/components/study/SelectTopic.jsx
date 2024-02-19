// import { useState, useEffect} from 'react';
// import Card from './Card';



// function SelectTopic() {
//     const [fetchedTopics, setFetchedTopics] = useState([]);
//     const [selectedTopic, setSelectedTopic] = useState("Example Topic");
//     const [fetchedData, setFetchedData] = useState(null);
//     const [wordIndex, setWordIndex] = useState("0");
//     const handleDropdownChange = (e) => {
//         setSelectedTopic( e.target.value);        
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log("Form submitted");
//         // Read the form data
//         const formData = selectedTopic;
//         console.log(formData);
//         fetch('http://localhost:5050/words/bytopic', {method: "POST", headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ selectedTopic: formData })})
//         .then((response) => {
//             if(!response.ok){
//                 throw new Error("Network response was not ok");
//             }
//             return response.json()})
//         .then((data) => {
//             console.log(data);
//             setFetchedData(data);
//             return;
            
//         }).catch(error => console.log("Error: ", error))
//     }

//     useEffect( () => {
        
//         fetch("http://localhost:5050/words/topics")
//         .then((response) => {
//             if(!response.ok){
//                 throw new Error("Network response was not ok");
//             }
//             return response.json()})
//         .then((data) => {
//          setFetchedTopics(data);
//          console.log(data);
//         })        
//         .catch(error => console.log("Error: ", error))
//     }, [])

//     return(
//         <div>
//         <form method="post" onSubmit={handleSubmit}>
//             <label>
//                 Pick a topic:
//         <select onChange={handleDropdownChange} value={selectedTopic}>
//             <option value="option1" disabled name="option1">Select a topic</option>
//             {fetchedTopics.map((word) => {
//                 return <option value={word} key={fetchedTopics.indexOf(word)} name={word}>{word}</option>
//             })}
//         {console.log({selectedTopic})}
//         </select>
//         </label>
//         <hr />
//         <button className="btn btn-primary btn-lg"  type="submit">Start Learning</button>
//         </form>
//         <Card word={fetchedData[wordIndex].word} imgUrl={fetchedData[wordIndex].imgUrl} attribution={fetchedData[wordIndex].attribution} />
        
//         </div>
        
//     ); 
// }



// export default SelectTopic

import { useState, useEffect } from 'react';
import Card from './Card';

function SelectTopic() {
    const [fetchedTopics, setFetchedTopics] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5050/words/topics')
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => setFetchedTopics(data))
            .catch(error => console.error("Error:", error.message));
    }, []);

    const handleSubmit = (e) => {
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
        .then(data => setFetchedData(data))
        .catch(error => console.error("Error:", error.message));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Pick a topic:
                    <select name="topic">
                        <option value="" disabled>Select a topic</option>
                        {fetchedTopics.map((topic, index) => (
                            <option value={topic} key={index}>{topic}</option>
                        ))}
                    </select>
                </label>
                <hr />
                <button type="submit">Start Learning</button>
            </form>
            {fetchedData && fetchedData[wordIndex] && (
                <Card
                    word={fetchedData[wordIndex].word}
                    imgUrl={fetchedData[wordIndex].imgUrl}
                    attribution={fetchedData[wordIndex].attribution}
                />
            )}
        </div>
    );
}

export default SelectTopic;