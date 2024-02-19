import propTypes from 'prop-types';

// Card component for displaying the word and its image
function Card({word, imgUrl, attribution}) {
  console.log("word, img, attr: ", word, imgUrl, attribution)

  return (
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={imgUrl} alt="vocab-illustration" style={{"width": "300px", "height": "300px"}} />            
            </div>
            <div className="flip-card-back">
              <h3>{word}</h3>
              <figcaption className="figure-caption">{attribution}.</figcaption>
            </div>
          </div>
      </div>
)}

Card.propTypes = {
  word: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  attribution: propTypes.string.isRequired
}

export default Card