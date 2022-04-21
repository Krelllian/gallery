import { Card, Container, Col, Row, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces/common';
import { getImages } from '../../store/images/actions';
import './Gallery.scss'
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader.js';


const Gallery = () => {
    const dispatch = useDispatch();
    const [sliceStart, setSliceStart] = useState(0)
    const [sliceEnd, setSliceEnd] = useState(24)
    useEffect(() => {
        dispatch(getImages())
    }, [])

    const store = useSelector((store: IStore) => store)
    const books = store.ImageReducer.books
    const isLoading = store.ImageReducer.loadingImages

    const showSelectHandler = (e) => {
        const value = e.target.value
        if (value === 'all') {
            setSliceStart(0)
            setSliceEnd(24)
        } else {
            setSliceStart(value - 6)
            setSliceEnd(value)
        }
    }

    return (
        <>
            <h1 className='gallery__title'> Gallery </h1 >
            <Container style={{
                width: '100%',
                padding: '5px 5px 5px 5px',
                color: 'white',
            }}>
                <Row >
                    {
                        isLoading ? <Preloader ml='' /> :
                            <>
                                <Form.Select onChange={showSelectHandler} className='gallery__filters' aria-label="Default select example">
                                    <option value='all'>Show all</option>
                                    <option value="6">Show first 6 images</option>
                                    <option value="12">Show second 6 images</option>
                                    <option value="18">Show third 6 images</option>
                                    <option value="24">Show fourth 6 images</option>
                                </Form.Select>
                                {books.items?.slice(sliceStart, sliceEnd).map((book, index) => {
                                    return (
                                        <Col className="gallery__card-col" key={book.id} style={{ marginBottom: '10px' }}>
                                            <Link to={'/card/' + (book.id)}>
                                                <Card className="gallery__card" style={{ backgroundColor: 'white', width: '150px', height: '200px' }}>
                                                    <Card.Img src={book.volumeInfo.imageLinks?.thumbnail} style={{ maxHeight: '100%', objectFit: 'cover' }}></Card.Img>
                                                    <Button className='gallery__card-details-btn btn-success'>Details</Button>
                                                </Card>
                                            </Link>
                                        </Col>
                                    )
                                })
                                }
                            </>
                    }

                </Row>
            </Container>

        </>
    )

}

export default Gallery