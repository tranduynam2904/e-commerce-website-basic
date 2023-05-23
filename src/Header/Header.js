import { Link, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Product from '../components/Product'
import './Header.css'
import { GrCart } from 'react-icons/gr'
import Cart from '../Cart/Cart'
export default function Header() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link to={`/`} style={{ textDecoration: 'none', color: '#000' }}>Home</Link></li>
                    <li><Link to={`/product`} style={{ textDecoration: 'none', color: '#000' }}>Product</Link></li>
                    <li><Link to={`/about`} style={{ textDecoration: 'none', color: '#000' }}>About</Link></li>
                    <li><Link to={`/contact`} style={{ textDecoration: 'none', color: '#000' }}>Contact</Link></li>
                </ul>
                <div className='handle_cart'>
                    <Link to={`/cart`}><GrCart /></Link>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' loader={<Contact />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
        </div>
    )
}