import Carousel from 'react-bootstrap/Carousel';

const CarouselC = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src="https://bouncycastlenetwork-res.cloudinary.com/image/upload/f_auto,q_auto,c_limit,w_1000/e7e1000f66b40a03b63536a6ccf05c3d" alt="imagen1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3RR6oMTee6qXkbtxwNan0I6k65cThcA6AA&s" alt="imagen2" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dO8Srf_pdPxZ-5dXuV9mTwvEMZHLiBhiNg&s" alt="imagen3" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselC
