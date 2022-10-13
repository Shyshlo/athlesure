import { useState } from 'react';
import { dataDelivery } from './dataDelivery';

function Delivery() {
    const [question, setQuestion] = useState(dataDelivery);
    const [showMore, setShowMore] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
    }


    return(
        <div>
        <div className='container shitting'>
            <h3>Members spending $100 or more get free standard delivery</h3>
        </div>
      
        {question.map((element => {
            const{id, question, description, showMore} = element;
      return(

       <div className='containerDelivery' key={id}>
    <div>
    <p className='question'>{question}</p>
    </div>
    <div>
    <p className='description'>{showMore ? description : description.substring(0,170) + '...'}
    <button onClick={()=> showTextClick(element)(!showMore)}>{showMore ? '➖' : '➕'}</button></p>
    </div>
        </div>
      )
    }))}
</div>
    );
}

export default Delivery;