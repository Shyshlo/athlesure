import { data } from '../data';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';

const CartItem = ({cartItem}) => {

    const thing = data.find(item => item.id === cartItem.clotherID)
    /* clotherID из CartSlice.js */
    const dispatch = useDispatch();
    return(
        <div>
            <p>{thing.name}</p>
            <p>{cartItem.quantity} thing(s)</p>
            <p>Price: ${thing.price * cartItem.quantity}</p>
            <span onClick={()=> dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
   <img className="iconDelete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
   </span>
</div>)
}

export default CartItem;