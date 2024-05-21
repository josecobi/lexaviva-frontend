import SelectTopic from '../components/study/SelectTopic'
function Study() {

  return (
    <div className="container mt-2">
        <h2>Vocabulary Cards</h2>
        <p>Study with flashcards to help you learn and retain information. Hover the card with your mouse to reveal the meaning.</p> 
        <hr />     
        <SelectTopic />
   
    </div>
  )
}

export default Study