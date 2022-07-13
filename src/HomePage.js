import { useState } from 'react';
import { data } from './data';

import Clothes from './Clothes'
import Buttons from './Buttons';
import Slider from './Slider';


function HomePage() {
   


    const [clothes, setClothes] = useState(data);
    const searchTermClothes = (searchTerm) => {    
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
    }
    
    return(
     <div>

        <div className='center'>
            <h1 className='shitting'>FREE SHIPPING ON $100!</h1>
        </div>

    <Slider />
    <Buttons filterWord = {searchTermClothes}/>
    <Clothes codeWord = {clothes} />

    </div>
     
     ) 
}

export default HomePage;