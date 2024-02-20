import propTypes from 'prop-types';
import Word from './Word';
function Table({fetchedData}) {
    if(fetchedData.length === 0) {
        return <div></div>
    }
  return (
    <div className="container">
    <div className="row">
        <div className="col">English Word</div>
        <div className="col">Word</div>
        <div className="col">Image</div>
        <div className="col">Image URL</div>
        <div className="col">Attribution</div>
        <div className="col"></div>
        <div className="col"></div>
    </div>
    {fetchedData.map((document, index) => {
        console.log("document:", document)
        return (
            <form key={index} className="row">
                <div className="col">
                    <input className="form-control" type="text" defaultValue={document.english_word}></input>
                </div>
                <div className="col">
                    <input className="form-control" type="text" defaultValue={document.word}></input>
                </div>
                <div className="col">
                    <img className="thumbnail" src={document.imgUrl}></img>
                </div>
                <div className="col">
                    <input className="form-control" type="text" defaultValue={document.imgUrl}></input>
                </div>
                <div className="col">
                    <input className="form-control" type="text" defaultValue={document.attribution}></input>
                </div>
                <div className="col">
                    <button className="btn btn-danger">Remove</button>
                </div>
                <div className="col">
                    <button className="btn btn-success">Save</button>
                </div>
                <hr />
            </form>
            
        )
    })}
</div>
  )
}

Table.propTypes = {
  fetchedData: propTypes.array.isRequired,
}
export default Table