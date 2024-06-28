import React from "react";
import {useSelector} from "react-redux";

function Cart() {
    const cartElements = useSelector(state => state.cart.items); 
    return (
        <div>
            {
                Object.keys(cartElements).map((key) => {
                    return (
                        <div className="currentCart">
                            <div>{cartElements[key].title}</div>
                            <div> {cartElements[key].quantity}</div>
                            <div>Category: {cartElements[key].category}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cart;