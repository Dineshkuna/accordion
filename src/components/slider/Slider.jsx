import React from 'react'


const imageData = [
    {
        id: 1,
        imageUrl : 'https://thumbs.dreamstime.com/z/vinayagar-images-ai-hd-photo-2023-289916691.jpg',
        title: 'God ganesh'
    },
    {
        id: 2,
        imageUrl : 'https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg',
        title: 'Ocean'
    },
    {
        id: 3,
        imageUrl : 'https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg',
        title: 'Lazid'
    },
    {
        id: 4,
        imageUrl : 'https://cdn.vectorstock.com/i/1000v/10/53/love-couple-vector-21371053.jpg',
        title: 'Love Couple'
    }

]


const SliderImages = () => {

    return (
        
        <div style={{
            display: 'flex',
            
        }}>
            { imageData && imageData.length ?
                imageData.map((image,index) => (
                   
                        <img  key={index} src={image.imageUrl} alt={image.title} style={{width:300 ,height:300}}/>
                    
                    
                ))
            :null}
            
        </div>
    )
}

export default SliderImages;