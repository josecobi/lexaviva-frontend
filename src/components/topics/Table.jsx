import propTypes from 'prop-types';
import '../../index.css';
import Word from './Word';

function Table({fetchedData, selectedTopic, updateData}) {

    if(fetchedData.length === 0) {
        return <div></div>
    }
  return (
    <div className="container mt-3">
    <div className="row mt-3 mb-3">
        <div className="col">English Word</div>
        <div className="col">Word</div>
        <div className="col">Image</div>
        <div className="col">Image URL</div>
        <div className="col">Attribution</div>
        <div className="col"></div>
        <div className="col"></div>
    </div>
    {fetchedData.map((document) => {
        return (
            <div key={document._id}>
                <Word document={document} selectedTopic={selectedTopic} updateData={updateData} fetchedData={fetchedData}/>
            
            </div>
            
        )
    })}
</div>
  )
}

Table.propTypes = {
  fetchedData: propTypes.array.isRequired,
  selectedTopic: propTypes.string.isRequired,
    updateData: propTypes.func.isRequired
}
export default Table