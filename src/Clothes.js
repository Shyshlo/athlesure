

function Clothes({codeWord}) {

    return(
        <div className='products'>
            {codeWord.map((elements => {
                const{id, name, searchName, price, image} = elements;
                return(
                    <div className='productCard' key={id}>
    <img src={image} width='400px' height='500px' alt='photo'/>
        <div className='productInfo'>
        <p>{name}</p>
        <p>{price}$</p>
        </div>

             </div>
       
                )
            }))}
         </div>
    )
}

export default Clothes;