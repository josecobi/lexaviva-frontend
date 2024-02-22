import axios from 'axios';

// Function to handle the creation of a new word
export default async function handleCreateWord(selectedTopic, updateData, setFetchedData) {
    console.log("create word clicked");
    const formdata = {
      word: "",
      imgUrl: "",
      attribution: "",
      english_word: "",
      topic: selectedTopic
    };
   
    try {
      // Make a POST request to add the new word
      const response = await axios.post('http://localhost:5050/words', formdata);
  
      // If the request was successful, add the new word to fetchedData
      if (response.status === 200) {
        setFetchedData(prevData => [...prevData, response.data]);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }