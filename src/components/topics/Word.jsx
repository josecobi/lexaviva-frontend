import propTypes from 'prop-types';
import '../../index.css';
import Button from './Button';


function Word({word, imgUrl, attribution, english_word}) {
  return (
    <div>
        {console.log("WORD:", word, imgUrl, attribution, english_word)}
        <form>{word}</form>
        <form>{imgUrl}</form>
        <form>{attribution}</form>
        <form>{english_word}</form>
        {/* <Button text={"update"} />
        <Button text={"delete"} /> */}
    </div>
  )
}

Word.propTypes = {
  word: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  attribution: propTypes.string.isRequired,
  english_word: propTypes.string.isRequired,
}
export default Word