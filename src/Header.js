import Cart from "./Cart/Cart";


const Header = () => {
    return(
        <div>
            <div className="HeaderItem">
                
<div className="headerLinks">

<a href="https://www.instagram.com/athleisure_oversize_fashion/" target="_blank"><img src="https://img.icons8.com/fluency/344/instagram-new.png" className="icone_2" alt="ВК" /></a>
  
    <a href="tel:+375291368196"><img src="https://img.icons8.com/color/344/apple-phone.png" className="icone_2" alt="Телефон" /></a> 
    </div>
    
    <div className="headerCart">
<Cart />
</div>

</div>
<hr />
        </div>
    )
}

export default Header;