import propTypes from 'prop-types';



function Topic({topic, handleclick}){
    return (
        <option onClick={handleclick} className='topic-option'>{topic}</option>
    )

}
Topic.propTypes = {
    topic: propTypes.string.isRequired, 
    handleclick: propTypes.func.isRequired,
};


export default Topic;