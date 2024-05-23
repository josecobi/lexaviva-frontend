import propTypes from 'prop-types';
import Word from './Word';
import EmptyWord from './EmptyWord';
import Accordion from 'react-bootstrap/Accordion';


function Table({fetchedData, selectedTopic, updateData}) {

   //create an empty form to add a new word 
    const emptyForm = {
        word: "",
        imgUrl: "",
        attribution: "",
        english_word: "",
        topic: selectedTopic
    }
    //if there is no data, return an empty div
    if(fetchedData.length === 0) {
        return <div></div>
    }

   //return the table with the words 
  return (
    
    // <div className="container mt-3 border border-dark-subtle rounded">
    //     <div className="row mt-3 mb-3 ">
    //         <div className="col">Topic*</div>
    //         <div className="col">English Word*</div>
    //         <div className="col">Word*</div>
    //         <div className="col">Image*</div>
    //         <div className="col">Image URL*</div>
    //         <div className="col">Attribution*</div>
    //         <div className="col"></div>
    //         <div className="col"></div>
    //     </div>
    // </div>}
    <Accordion >
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
                            <p >{document.topic}</p>
                        </div>
                        <div className="col">
                            <p>{document.english_word}</p>
                        </div>
                        <div className="col">
                            <p>{document.word}</p>
                        </div>
                                    
                        </Accordion.Header>
                        <Accordion.Body>
                        <Word document={document} selectedTopic={selectedTopic} updateData={updateData} fetchedData={fetchedData}/>
                        </Accordion.Body>
                    </Accordion.Item>        
                )
            })}
  
    <div>
        {/* Add a new word form */}
        <EmptyWord document={emptyForm} selectedTopic={selectedTopic} updateData={updateData} fetchedData={fetchedData}/>
    </div>
    </Accordion>
  )
}

Table.propTypes = {
    fetchedData: propTypes.array.isRequired,
    selectedTopic: propTypes.string.isRequired,
    updateData: propTypes.func.isRequired,
}
export default Table