import { Link, Routes, Route } from 'react-router-dom'
import productimg from './product_4.jpg'
import './Cards.css'
import { AiFillStar } from 'react-icons/ai'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function Cards() {
    const { product, addCart } = useContext(AppContext)
    return (
        <div className='product'>
            {product && product.map((item, index) => (
                <div className='handle_card'>
                    <div className='card'>
                        <div className='handle_img'>
                            <img src={productimg}></img>
                        </div>
                        <div className='handle_info'>
                            <h1>FOSSIL</h1>
                            <h2>{product.name}</h2>
                            <h2>$100.000 - $350.000</h2>
                            <p><Link className='handle_buynow' onClick={() => addCart(item.id)}>Buy Now</Link></p>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}