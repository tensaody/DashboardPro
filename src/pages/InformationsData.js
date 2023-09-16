import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../service/ProductActions'

export default function InformationsData() {


    const [filterProduct, setProduct] = useState([])
    const [search, setSearch] = useState("")
    
        const column = [
            {
                name: 'ID',
                selector: row => row.id,
                sortable: true
            },
            {
                name: 'Title',
                selector: row => row.title,
                
                
                sortable: true
            },
            {
                name: 'Photo',
                selector: row => <img src={row.images[0]} alt='product' style={{width: '60px'}}/>
                
            },
            {
                name: 'Action',
                selector: row => <button>Edit</button>
            }
        ]
        useEffect(() => {
            fetchProducts()
            .then(resp => setProduct(resp))
        }, [])
        useEffect(() => {
            const result =  filterProduct.filter(pro => {
                return pro.title && pro.title.toLowerCase().match(search.toLowerCase())
                // (search.toLowerCase())
            })
            setProduct(result)
        }, [search])
        
  return (
    <main className='container mt-4' style={{height: '40rem', backgroundColor: 'whitesmoke', marginLeft: '230px'}}>
    <DataTable
        columns={column}
        data={filterProduct}
        pagination
        subHeader
        subHeaderComponent={
            <input type='text'
                placeholder='search here'
                className='form-control'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                    console.log(search)
                }}
            />
        }
    />
    </main>
  )
}
// **************************************************************

// export const Cardss = () => {
//     const [mo, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const column = [
//                     {
//                         name: 'ID',
//                         selector: row => mo.results.map((mov, index) => (
//                             <div key={index} className='col-12 col-sm-8 col-md-6 col-lg-2'>                                                                              
                               
//                                   <div className="card" style={{width: '12rem'}}>
                             
//                                    <div className="card-body">
//                                        <h5 className="card-title">{mov.id}</h5>
//                                        <p className="card-text"></p>
//                                    </div>
//                                 </div>
                              

//                             </div>
//                             ))       ,
//                         sortable: true
//                     },
//                     {
//                         name: 'Title',
//                         selector: row => mo.results.map((mov, index) => (
//                             <div key={index} className='col-12 col-sm-8 col-md-6 col-lg-2'>                                                                              
                               
//                                   <div className="card" style={{width: '12rem'}}>
                             
//                                    <div className="card-body">
//                                        <h5 className="card-title">{mov.title}</h5>
//                                        <p className="card-text"></p>
//                                    </div>
//                                 </div>
                              

//                             </div>
//                             ))       ,
//                         sortable: true
//                     },
//                     {
//                         name: 'Photo',
//                         selector: row => mo.results.map((mov, index) => (
//                             <div key={index} className='col-12 col-sm-8 col-md-6 col-lg-2'>                                                                              
                               
//                                   <div className="card" style={{width: '12rem'}}>
//                                 <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${mov.backdrop_path}`} className="card-img-top" alt="..."/>
                                   
//                                 </div>
                              

//                             </div>
//                             ))        
//                     }
//                 ]
//     useEffect(() => {
//         const fethMovie = async () => {
//             try {
//                 const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2')
//                 const data = await response.json();
//                 setMovies(data);
//                 setLoading(false);
//             }catch (error) {
//                 console.error("Error", error);
//             }
//         };
//         fethMovie();
//     }, []);
//     return(
//         <>
//         <DataTable
//         columns={column}
//         data={mo}
//         pagination
//     />
//         </>
        
//     )
// };
