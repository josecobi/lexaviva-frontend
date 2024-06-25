import Illustration from './Illustration';
import propTypes from "prop-types";
import Loader from '../Loader';
import {selectIllustration, deSelectIllustration} from '../../slices/illustrationSlice';
import {useDispatch, useSelector} from 'react-redux';





function IllustrationGrid({imgResults}){
    const dispatch = useDispatch();
    const {selectedIllustration} = useSelector((state) => state.illustration);
    // if there are no image results, display the loader
    if(!imgResults) return <Loader />

    const handleIllustrationClick = (src, author, id) => {
        // Check if the illustration is already selected
        if(selectedIllustration.src === src && selectedIllustration.author === author && selectedIllustration.id === id) {
            // If it is, deselect it
            console.log(`img from ${author} deselected`)
            return dispatch(deSelectIllustration());
        }
        // If it is not, select it
        console.log(`img from ${author} selected with id ${id}`)
        dispatch(selectIllustration({src, author, id}));
        console.log("Selectedillustration img state: ", selectedIllustration)

    }
    return(
        <div className="grid">
            {   imgResults.map((img) => {           
                    const imgId = img.id.toString();
                    const src = img.image.source.url;
                    const author = img.author.name;
                    return <Illustration onClick={() => (handleIllustrationClick(src, author, imgId))} key={imgId} imgId={imgId} src={src} author={author} />
                }           
            )}   

        </div>
    )

}
IllustrationGrid.propTypes = {
    imgResults: propTypes.array,
}
export default IllustrationGrid;