import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../Cards/Cards'
import './Product.css'
import Cart from '../Cart/Cart'
export default function Product() {
    const [data, setData] = useState([])
    const getData = async () => {
        const url = `https://64563f7c2e41ccf16917a1e4.mockapi.io/List`
        axios
            .get(url).then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div>
                <p className='title'>TRENDING PRODUCTS</p>
            </div>
            <Cards />
        </>
    )
}