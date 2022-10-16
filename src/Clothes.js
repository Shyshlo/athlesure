import { useState } from 'react';
import ChangeQuantity from "./Cart/ChangeQuantity";
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/cartSlice';



const Clothes = ({codeWord}) => {
const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);

const sliderNone = document.querySelector('.sliderNone');
const button = document.querySelector('.addToCart');

button.addEventListener('click', slider);
function slider() {
    sliderNone.style.display = 'none';
}
   

    return(
        <div className='products'>
            {codeWord.map((elements => {
                const{id, name, searchName, price, image} = elements;
                return(
                    <div className='productCard' key={id}>
    <img src={image} width='400px' height='500px' alt='photo'/>
        <div className='productInfo'>
        <p>{name}</p>
        <p>${price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className='addToCart' onClick = {() => {dispatch(addItemToCart({elements, quantity})); slider()}}>Add to cart</button>
        {/* elements - из map(cвязь с CartSlice - есть название одежды по id и количество - quantity)*/}
        </div>

             </div>
       
                )
            }))}
         </div>
    )
}

export default Clothes;