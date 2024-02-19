import { useState } from 'react';
import SelectTopic from '../components/study/SelectTopic'
function Study() {

   
  return (
    <div>
        <h2>Vocabulary Cards</h2>
        <p>Study with flashcards to help you learn and retain information.</p>
      
        <SelectTopic />
       

        
        
    </div>
  )
}

export default Study