import propTypes from 'prop-types';

// Card component for displaying the word and its image
function Card({word, imgUrl, attribution, english_word}) {
  console.log("word, img, attr, english word: ", word, imgUrl, attribution, english_word);
  const altText = `Image of: ${english_word}`;
  return (
      <div className="flip-card container mt-2 mb-3" >
          <div className="flip-card-inner">
          <div className="flip-card-front p-2 d-flex justify-content-center align-items-center">
  <h1 className="align-self-center">{english_word}</h1>                  
            </div>
            <div className="flip-card-back">           
              <img className="card-image" src={imgUrl} alt={altText}/>
              <h2>{word}</h2>
              <figcaption className="figure-caption">{attribution}.</figcaption>
            </div>
          </div>
      </div>
)}

Card.propTypes = {
  word: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  attribution: propTypes.string.isRequired,
  english_word: propTypes.string.isRequired,
}

export default Card;