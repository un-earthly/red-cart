import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProducts } from '../redux/product-actions'


export default function Products() {
    const dispatch = useDispatch()
    useEffect(() => {
        async function run() {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            dispatch(setProducts(data))
        }
        run()
    }, [])
    const products = useSelector(state => state.allProducts.products)
    return (
        <div className='ui grid container'>
            {
                products?.map(p => <div className="four wide column">
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={p.image} alt="" />
                            </div>
                            <div className="content">
                                <h1 className="header">{p.title}</h1>
                                <div className="meta price">${p.price}</div>
                                <div className="meta price">{p.category}</div>
                                <Link to={`/product/${p.id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
