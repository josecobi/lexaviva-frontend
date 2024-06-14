import propTypes from 'prop-types'
import { Figure } from 'react-bootstrap';

export default function Illustration({imgId, src, author, onClick}){

    // console.log("img source: ", src);

    return(
        <Figure onClick={onClick} className="imgContainer">
            <Figure.Image loading="lazy" rounded src={src} id={imgId}></Figure.Image>
            <Figure.Caption>By {author} from Freepik.com</Figure.Caption>
        </Figure>
    )
}

Illustration.propTypes = {
    imgId: propTypes.string,
    src: propTypes.string,
    author: propTypes.string,
    onClick: propTypes.func.isRequired,
}
