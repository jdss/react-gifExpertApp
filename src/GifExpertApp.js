import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);

    //  const handleAdd = ()=> {

    //      setCategories([...categories,'Overlord']);
    //      setCategories( cats => [...cats, 'Overlord']);
    //  }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }></AddCategory>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => {
                        //return <li key={category}> {category} </li>
                        return <GifGrid key={category} category={category} ></GifGrid>
                    })
                }
            </ol>
        </>
        
    )
}
