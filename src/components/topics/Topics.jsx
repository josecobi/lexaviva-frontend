// import propTypes from 'prop-types';
// import '../../index.css';
// import { useState, useEffect } from 'react';

// function MyTopics(props) {
//     const [selectedTopic, setSelectedTopic] = useState("");
//     const [fetchedData, setFetchedData] = useState([]);
// useEffect(() => {
//     fetch("http://localhost:5050/words/bytopic", {
//         method: "POST",
//         mode: "cors",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ selectedTopic })
//     })
//     .then(response => {
//         if (!response.ok) throw new Error("Network response was not ok");
//         setFetchedData(response.json());
//     })
// }, [selectedTopic])

//   return (
//     <div>
//         <h2>My topics</h2>
//         {/* TO-DO fetch topics and render all words in that topic. */}
     

//     </div>
//   )
// }

// MyTopics.propTypes = {
//     topics: propTypes.array.isRequired
// }
// export default MyTopics