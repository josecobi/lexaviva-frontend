import propTypes from 'prop-types'
import { Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Illustration({ imgId, src, author, onClick}){
    const { selectedIllustration } = useSelector((state) => state.illustration);
    const isSelected = selectedIllustration.id === imgId;

    return(
        <Figure onClick={onClick} className={`imgContainer img-thumbnail clickableElement ${isSelected ? 'border border-2 border-dark' : ''}`}>            <Figure.Image loading="lazy" rounded src={src} id={imgId}></Figure.Image>
            <Figure.Caption>By {author} on Freepik.com</Figure.Caption>
        </Figure>
    )
}

Illustration.propTypes = {
    imgId: propTypes.string,
    src: propTypes.string,
    author: propTypes.string,
    onClick: propTypes.func.isRequired,
}
