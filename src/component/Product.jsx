import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import {useDispatch} from "react-redux"
import { addCart,delCart } from '../redux/action'

export default function Product() {
    const { id } = useParams();
    const [cartBtn, setCartBtn] = useState("Thêm vào giỏ hàng")
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();

    const handleCart = (product) =>{
        if (cartBtn === "Thêm vào giỏ hàng") {
            dispatch(addCart(product))
            setCartBtn("Xóa khỏi giỏ hàng")
        } else {
            dispatch(delCart(product))
            setCartBtn("Thêm vào giỏ hàng")
        }
    }
    const addProduct = (product) =>{
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={300} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
               
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead'>
                        Đánh giá {product.rating && product.rating.rate}
                    </p>
                    <i className="fa fa-star"></i>
                    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick ={()=>handleCart(product)}>
                        {cartBtn}
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2 ">Giỏ hàng</NavLink>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
