import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([])

    // useEffect( () => {
    //     getGift(category).
    //     then(imgs => setimages(imgs)) ;
    // },[category])


   
    //getGift();


    const {data: images, loading} = useFetchGifs(category);

    



    return (

        <>
        <h3 className='animate__animated animate__bounce'>{ category }</h3>



        <div className='card-grid'>
            

            {
                    images.map( img => {

                        return <GifGridItem  key={img.id} img={img}></GifGridItem>
                        // return  <div key={img.id}>
                        //          <li>{img.title}</li> 
                        //          <img src={img.url}></img> 
                        //         </div>
                    })
            }

                
        </div>

        </>


    )
}
