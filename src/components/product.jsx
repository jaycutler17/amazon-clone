import React from "react";

import { useStatevalue } from "../context/StateProvider";
import '../Product.css';


function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStatevalue();
    const addToBasket = () => {
        dispatch({
            type: 'add_to_basket',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            }
        })
    }

    return (


        <div className="product-card">
           

                <div className="product-info">
                    <p>{title} </p>
                    <div className="product-price">
                        <small> $</small>
                        <strong> {price} </strong>
                    </div>
                    <div className="product-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                </div>
                <img className="product-image" src={image} alt="" />
                <button onClick={addToBasket} className="product-button">Add to basket</button>
           
            
        </div>
    );
}

export default Product;