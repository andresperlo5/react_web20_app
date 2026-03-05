const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWfgwlU8Up7kYFAgV1FWJOX4ERyKATLsEXw&s" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://ecdn.teacherspayteachers.com/cdn-cgi/image/format=avif,quality=70,onerror=redirect/thumbitem/Welcome-Banner-Super-Mario-Bros-9961430-1691339400/750f-9961430-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEVtC_gVmz8sKprJeDxk4JeikdjBDhFhxmg&s" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Carousel
