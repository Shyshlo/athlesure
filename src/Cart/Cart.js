import cart from '../cart.png';
import { getCartItems, getTotalPrice } from '../redux/cartSlice';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img src = {cart} width = '41px' alt='photocart' />
            <h3>TOTAL:{totalPrice} $</h3>
            
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
         
         
        </div>
    )
}

export default Cart;