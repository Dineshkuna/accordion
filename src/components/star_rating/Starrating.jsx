import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';



const Rating = ({onStars = 5}) => {

    const [rating ,setRating] = useState(0)
    const [hover ,setHover] = useState(0)


    const handleClick = (index) => {
        setRating(index + 1);
    }

    const handleMove = (index) => {
        setHover(index + 1);
    }

    const handleOver = (index) => {
        setHover(index + 1);
    }


    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            padding: '10px',
            
        }}>
            {[...Array(onStars)].map((_, index) => (
            <FaStar
                key = {index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMove(index)}
                onMouseOver={() => handleOver (index)}
                color={index + 1 <= (hover || rating) ? 'yellow' : 'black'}                                        
            />
        ))}
        </div>
        )
    }

export default Rating;