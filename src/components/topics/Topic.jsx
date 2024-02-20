import propTypes from 'prop-types';
import { useState, useEffect } from 'react';


function Topic({topic, handleclick}){
    return (
        <li onClick={handleclick} className='topic-list-item'>{topic}</li>
    )

}
Topic.propTypes = {
    topic: propTypes.string.isRequired, 
    handleclick: propTypes.func.isRequired,
};


export default Topic;