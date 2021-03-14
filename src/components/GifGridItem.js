import React from 'react'

export const GifGridItem = ({img}) => {

    return (
        <div className='card animate__animated animate__bounce'>
        <p>{img.title}</p> 
        <img src={img.url} alt={img.title}></img> 
       </div>
    )
}
