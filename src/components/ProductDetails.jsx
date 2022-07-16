import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/product-actions'

export default function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => dispatch(selectedProduct(res.data)))
    }, [id])

    const product = useSelector(state => state.product.product)
    const { title, image, price, description, category, } = product
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" alt="" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2 className="ui teal tag label">
                                    ${price}
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
