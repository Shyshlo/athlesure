import slide1 from './athlesure.png';
import slide2 from './111.png';
import slide3 from './222.png';
import slide4 from './333.png';

const Slider1 = () => {
    return(
        <div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={slide1} alt="Первый слайд" height='1000px' width='50' />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slide2} alt="Второй слайд" height='1000px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slide3} alt="Третий слайд" height='1000px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slide4} alt="Третий слайд" height='1000px'/>
    </div>
  </div>
  <a classNme="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
    )
    }

export default Slider1;
