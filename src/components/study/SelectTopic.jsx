import { useState, useEffect} from 'react';



function SelectTopic() {
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("option1");
    const handleDropdownChange = (e) => {
        setSelectedTopic( e.target.value);        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form submitted");
        // Read the form data
        const formData = selectedTopic;
        console.log(formData);
        fetch('http://localhost:5050/words/bytopic', {method: "POST", headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedTopic: formData })})
        .then((response) => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json()})
        .then((data) => {
            console.log(data[0].imgUrl);
            return(<img src={data[0].imgUrl} alt={"Image of " + data.topic} />)
        })
    }

    useEffect( () => {
        
        fetch("http://localhost:5050/words/topics")
        .then((response) => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json()})
        .then((data) => {
         setFetchedData(data);
         console.log(data);
        })        
        .catch(error => console.log("Error: ", error))
    }, [])

    return(
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Pick a topic:
        <select onChange={handleDropdownChange} value={selectedTopic}>
            <option value="option1" disabled>Select a topic</option>
            {fetchedData.map((word) => {
                return <option value={word} key={fetchedData.indexOf(word)}>{word}</option>
            })}
        {console.log({selectedTopic})}
        </select>
        </label>
        <hr />
        <button className="btn btn-primary btn-lg"  type="submit">Start Learning</button>
        </form>
    ); 
}



export default SelectTopic