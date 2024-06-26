import propTypes from 'prop-types';
import Word from './Word';
import NewWord from './NewWord';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';


function Table({fetchedData, selectedTopic, setFetchedData}) {

    const [activeKey, setActiveKey] = useState(null);
    //if there is no data, return an empty div
    if(fetchedData.length === 0) {
        return <div></div>
    }

   //return the table with the words 
  return (
    <>
    <h3>Topic: {selectedTopic}</h3>
    
    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
            {console.log("data fetechd in table: ", fetchedData)}

            {fetchedData.filter(document => document !== null).map((document) => {
                const altText = `image of : ${document.english_word}`

                {/* Map the words */}
                return (
                    <Accordion.Item key={document._id} eventKey={document._id} >
                        <Accordion.Header> 
                            <div className="col">
                                <img className="thumbnail" src={document.imgUrl} alt={altText}></img>
                            </div>
                            <div className="col">
                                <p>{document.english_word}</p>
                            </div>
                            <div className="col">
                                <p>{document.word}</p>
                            </div>                                    
                        </Accordion.Header>
                        <Accordion.Body>
                            <Word wordData={document} selectedTopic={selectedTopic} setFetchedData={setFetchedData} fetchedData={fetchedData} activeKey={activeKey}/>
                        </Accordion.Body>
                    </Accordion.Item>        
                )
            })}
  
    <Accordion.Item key="0" eventKey="0">
        <Accordion.Header>Add a new word</Accordion.Header>
        <Accordion.Body>
            {/* Add a new word form */}
            <NewWord selectedTopic={selectedTopic} setFetchedData={setFetchedData} fetchedData={fetchedData} activeKey={activeKey}/>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </>
  )
}

Table.propTypes = {
    fetchedData: propTypes.array.isRequired,
    selectedTopic: propTypes.string,
    setFetchedData: propTypes.func.isRequired,
}
export default Table