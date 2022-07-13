function Buttons({filterWord}) {
    return(
        <div className="AllSearchTerm">
<button className="btnSearchTerm" onClick={() => filterWord('Trousers & Hoodies')}>Ttouses & Hoodies</button>
<button className="btnSearchTerm" onClick={() => filterWord('Shorts & Hoodies')}>Shorts & Hoodies</button>
<button className="btnSearchTerm" onClick={() => filterWord('Skirts & Hoodies')}>Skirts & Hoodies</button>
<button className="btnSearchTerm" onClick={() => filterWord('dress')}>Dresses</button>
<button className="btnSearchTerm" onClick={() => filterWord('sale')}>SALE</button>
        </div>
    ) 

}
export default Buttons;