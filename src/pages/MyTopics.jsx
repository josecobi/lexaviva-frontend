import { useState, useEffect } from 'react';
import Topic from '../components/topics/Topic';
import propTypes from "prop-types";
import Table from '../components/topics/Table';
import axios from 'axios';

function Topics() {
  const [fetchedTopics, setFetchedTopics] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const handleclick = (e) => {
    e.preventDefault();

    console.log(e.target.textContent);

    axios.post('http://localhost:5050/words/bytopic', { selectedTopic: e.target.textContent })
      .then(response => {
        setFetchedData(response.data);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
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
      <ul>
      {fetchedTopics.map((topic, index) => { 
          return (
          
          <Topic handleclick={handleclick} topic={topic} key={index} />
          
          ) 
      })}
      </ul>
      {console.log('fetched:', fetchedData)}
      <h3></h3>
      <Table  fetchedData={fetchedData}/>
    </div>
  )
}

export default Topics;

// import { useState, useEffect } from 'react';
// import Topic from '../components/topics/Topic';
// import propTypes from "prop-types";
// import Table from '../components/topics/Table';




// function Topics() {
//   const [fetchedTopics, setFetchedTopics] = useState([]);
//   const [fetchedData, setFetchedData] = useState([]);

//   //Handle click event on
//   const handleclick = (e) => {
//     //prevent page to refresh
//     e.preventDefault();

//     console.log(e.target.textContent);
//     //fetch words by topic  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ASK QUESTION
//     fetch('http://localhost:5050/words/bytopic', {
//       method: "POST",
//       mode: "cors",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ selectedTopic: e.target.textContent })
//     })
//     .then(response => {
//       if (!response.ok) throw new Error("Network response was not ok");
//       return response.json();
//     })
//     .then(data => setFetchedData(data))
//     .catch(error => console.error("Error:", error.message));
    
//   }
//   //use 'useeffect' hook to fetch the topics. Added empty dependency array so it runs only once
//   useEffect(() => {
//     fetch('http://localhost:5050/words/topics')
//       .then(response => {
//         if(!response.ok) throw new Error("Network response was not ok");
//         return response.json();
//       })
//       .then(data => setFetchedTopics(data))
//   }, [])


//   return (
//     <div>
//       <h3>Topics</h3>
//       <ul>
//       {fetchedTopics.map((topic, index) => { 
//           return (
          
//           <Topic handleclick={handleclick} topic={topic} key={index} />
          
//           ) 
//       })}
//       </ul>
//       {console.log('fetched:', fetchedData)}
//       <h3></h3>
//       <Table  fetchedData={fetchedData}/>
//     </div>
//   )
// }


// export default Topics;