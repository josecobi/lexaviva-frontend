import propTypes from 'prop-types';

// StudyCard component for displaying the word and its image
function StudyCard({word, imgUrl, attribution, english_word}) {
  console.log("word, img, attr, english word: ", word, imgUrl, attribution, english_word);
  const altText = `Image of: ${english_word}`;
  return (
      <div className="flip-card  mt-1" >
          <div className="flip-card-inner">
            <div className="flip-card-front p-2 d-flex justify-content-center align-items-center">
            <h1 className="align-self-center">{english_word}</h1>                  
          </div>
          <div className="flip-card-back"> 
              <img className="card-image" src={imgUrl} alt={altText}/>
              <h2>{word}</h2>
              <figcaption className="figure-caption">{attribution} from <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">Freepik.com</a>.</figcaption>
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