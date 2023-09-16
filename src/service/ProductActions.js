import React from 'react'

export const insertProducts = async (product) => {
    let resp = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp.json()
}
export const fetchProducts = async () => {
    let resp = await fetch('https://api.escuelajs.co/api/v1/products')    
        return resp.json()
}