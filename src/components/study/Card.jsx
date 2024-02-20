import propTypes from 'prop-types';
import '../../index.css';

// Card component for displaying the word and its image
function Card({word, imgUrl, attribution, english_word}) {
  console.log("word, img, attr, english word: ", word, imgUrl, attribution, english_word);

  return (
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>{english_word}</h3>              
            </div>
            <div className="flip-card-back">
              <h3>{word}</h3>
              <img src={imgUrl} alt="vocab-illustration" style={{"width": "300px", "height": "300px"}} />
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