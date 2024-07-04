import {Form, Col, Row, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import IllustrationGrid from "./IllustrationGrid";
import { useSelector } from "react-redux";
import axios from "axios";

function SearchImages(){
    const [searchTerm, setSearchTerm] = useState("");
    const [imgResults, setImgResults] = useState([]);
    const { selectedTopic } = useSelector((state) => state.topic);

    // reset the search term and image results when a new topic is selected
    useEffect(() => {
        setSearchTerm("");
        setImgResults([]);
    }, [selectedTopic]);

    async function handleChange(e){
        setSearchTerm(e.target.value);
    }
   
    const handleSearch = async (e) => {
            e.preventDefault();
            const url = `/api/freepik/resources?searchTerm=${searchTerm}`;
            await axios.get(url)
                .then((response) => {setImgResults(response.data)})
                .catch(err => console.error(err));
    }

    return(
        <>
     
                <Form onSubmit={handleSearch}>
                <Row className="align-items-center justify-content-center mt-2">
                    <Col sm={6}>
                        <Form.Group className="my-2" controlId="image-search-bar">
                            <Form.Control onChange={(e) => handleChange(e)} name="image-search-bar" type="text" defaultValue=""  placeholder="Search illustrations..."></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col sm={1} className="my-1">
                        <button type="submit" className="button-secondary">Search</button>
                    </Col>
                </Row>
                </Form>
                <IllustrationGrid imgResults={imgResults} />

        </>
    )
}

export default SearchImages;