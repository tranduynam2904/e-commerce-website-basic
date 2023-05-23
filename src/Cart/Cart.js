import { useContext } from 'react'
import './Cart.css'
import { AppContext } from '../AppContext'
export default function Cart() {
    const { cart, changeQty, addCart} = useContext(AppContext)

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart && cart.map((item, index) => (
                <div className='handle_btn'>
                    <div key={index}>{item.name}, Quantity: {item.qty}</div>
                    <button className='btnminus'>-</button>
                    <button className='btnplus' onClick={add}>+</button>
                </div>
            ))}

        </div>
    )
}