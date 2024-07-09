import propTypes from 'prop-types';
import { useState, useEffect } from 'react';

// StudyCard component for displaying the word and its image
function StudyCard({word, imgUrl, attribution, english_word}) {
  const [cardState, setCardState] = useState(false);
  
  useEffect(() => {
    setCardState(false);  // Reset card state when the component re-renders
}, [word, imgUrl, attribution, english_word]);

  function flipCardOnCLick(){
    console.log("card clicked");
    setCardState(prevState => !prevState);
  }

  let toggleCardClassCheck = cardState ? ' flip-card-active': '';


  console.log("word, img, attr, english word: ", word, imgUrl, attribution, english_word);
  const altText = `Image of: ${english_word}`;
  return (
      <div className={`flip-card  mt-1${toggleCardClassCheck}`} onClick={flipCardOnCLick}>
          <div className={`flip-card-inner${toggleCardClassCheck}`}>
            <div className="flip-card-front p-2 d-flex justify-content-center align-items-center">
            <h1 className="align-self-center">{english_word}</h1>                  
          </div>
          <div className="flip-card-back"> 
              <img className="card-image" src={imgUrl} alt={altText}/>
              <h2>{word}</h2>
              <figcaption className="figure-caption">{attribution} on <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">Freepik.com</a>.</figcaption>
            </div>
          </div>
      </div>
)}



StudyCard.propTypes = {
  word: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  attribution: propTypes.string.isRequired,
  english_word: propTypes.string.isRequired,
}

export default StudyCard;