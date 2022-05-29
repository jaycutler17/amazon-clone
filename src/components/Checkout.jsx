import React from "react";
import "../checkout.css";
import { useStatevalue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ basket, user }, dispatch] = useStatevalue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="left-image" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg" alt="" />
                <div className="left-heading">
                    <h1 >welcome {user?.email} to your shopping basket</h1>

           


                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                   



                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>

        </div>
    );
}

export default Checkout