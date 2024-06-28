import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addToCart, removeFromCart} from "../../Store";

function ReduxAddToCart({ product }) {
    const dispatch = useDispatch();
    console.log("redux add to cart", product.id)
    function increase() {
        //dispatch({type: , payload: })
        dispatch(addToCart(product));
    }
    function decrease() {
        //dispatch({type: , payload: })
        dispatch(removeFromCart(product));
    }

    let quantity = useSelector((state) => {
        return state.cart.items[product.id]?.quantity || 0;
    })
    
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
        )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}
export default ReduxAddToCart;
