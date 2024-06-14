import {Form, Col, Row, Button, Container} from "react-bootstrap";
// import axios from "axios";
import { useState, useEffect } from "react";
import IllustrationGrid from "./IllustrationGrid";
import { useSelector } from "react-redux";

function SearchImages(){
    const apiKey = import.meta.env.VITE_FREEPIK_API_KEY;  
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
            const url = `freepik/resources?term=${searchTerm}&filters%5Bcontent_type%5D%5Bvector%5D=1&filters%5Blicense%5D%5Bfreemium%5D=1`;
            const options = {
                method: 'GET',
                headers: {
                  'x-freepik-api-key': apiKey,
                  'Accept-Language': 'en-US'
                }
              };
              
              await fetch(url, options)
                .then(response => response.json())
                .then((response) => {setImgResults(response.data); console.log(response.data)})
                .catch(err => console.error(err));
    }

    return(
        <>
            <Container>
                <Form onSubmit={handleSearch}>
                <Row className="align-items-center justify-content-center mt-5">
                    <Col sm={4} className="">
                        <Form.Group className="my-2" controlId="image-search-bar">
                            <Form.Control onChange={(e) => handleChange(e)} name="image-search-bar" type="text" defaultValue=""  placeholder="Search illustrations..."></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col sm={1} className="my-1">
                        <Button type="submit" className="btn btn-success">Search</Button>
                    </Col>
                </Row>
                </Form>
                <IllustrationGrid imgResults={imgResults} />
            </Container>
        </>
    )
}

export default SearchImages;