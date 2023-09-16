import React, { useState } from 'react'
import { insertProducts } from '../service/ProductActions'

export default function Insert() {  
    const [source, setSource] = useState("") 
    const [movie, setMovie] = useState({
        id: 1,
        title: ""
    })
    const onChanger = (e) => {
        const{name, value} = e.target
        console.log(name)
        console.log(value)
        setMovie(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
        console.log(movie)
    }
    const handleOnsubmit = () => {
        console.log('on submit')
        insertProducts(movie)
        .then(res => console.log(res))
    }
    const onFileUpload = (e) => {
        console.log(e.target.files)
        setSource(e.target.files[0])
    }
  return (
    <main className='container mt-4' style={{height: '40rem', backgroundColor: 'whitesmoke', marginLeft: '230px'}}>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Input ID</label>
            <input 
            type="id" 
            onChange={onChanger}
            class="form-control" 
            id="exampleFormControlInput1" 
            placeholder="123456"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Input Names</label>
            <input 
            type="id" 
            onChange={onChanger}
            class="form-control" 
            id="exampleFormControlInput1" 
            placeholder="saody rupp"/>
        </div>
        <div class="mb-3">
            <input type='file' onChange={onFileUpload}/>
        </div>
        <div className='mb-3 preview'>
            <img src={source && URL.createObjectURL(source)} alt='preview image' style={{width: '200px'}}/>
        </div>
        <button 
        type="button" 
        onClick={() => handleOnsubmit()}
        class="btn btn-primary"
        >Insert</button>
    </main>
  )
}
