import { Button, Card, CarouselItem, Image } from 'react-bootstrap'
import React, { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../Interfaces/common'
import './PhotoCard.scss'
import { useEffect } from 'react'
import { getImages } from '../../store/images/actions'
import { getBook } from '../../store/currentBookData/actions'
import Preloader from '../Preloader/Preloader'

const PhotoCard = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    console.log('card id', id)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getBook(id))
    }, [])

    const store = useSelector((store: any) => store)
    const book = store.BookReducer.book
    const isLoading = store.BookReducer.loadingBook

    console.log('books card', book)

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Card className='book-card'>
                {isLoading ? <Preloader ml='0' /> :
                    <>
                        <Card.Title>{book?.volumeInfo.title}</Card.Title>
                        <Card.Img className='book-card__img' src={book?.volumeInfo.imageLinks?.thumbnail} ></Card.Img>
                        <Card.Text dangerouslySetInnerHTML={{ __html: `${book?.volumeInfo?.description || 'No description'}` }}></Card.Text>
                        <Card.Text style={{ fontWeight: 'bold' }}>{`ID:  ${book?.id}`}</Card.Text>
                    </>
                }
            </Card>

            <Button className='book-card__btn' onClick={goBack}>Go back</Button>
        </>

    )
}

export default PhotoCard