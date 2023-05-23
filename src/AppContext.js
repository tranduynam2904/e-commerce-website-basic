import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import axios from 'axios'
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const getData = async () => {
        const url = `https://64563f7c2e41ccf16917a1e4.mockapi.io/List`
        axios
            .get(url).then((res) => {
                setProduct(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const addCart = (id) => {
        let kq = product.find((item) => item.id == id);
        const index = cart.findIndex((item) => item.id == id);
        if (index >= 0) {
            let newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }]);
        }
    }
    const changeQty = (id, num) => {
        const kq = cart.map((item) => item.id == id ? { ...item, qty: item["qty"] + num } : item)
        setCart(kq);
    };

    return (
        <AppContext.Provider value={{ show, count, setShow, product, cart, addCart, setCart,changeQty }}>
            {children}
        </AppContext.Provider>
    );
};