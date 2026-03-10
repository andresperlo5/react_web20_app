import CardC from "../components/card/CardC"
import CarouselC from "../components/carousel/CarouselC"

const HomePage = () => {
  return (
    <>

      <CarouselC />

      <main>
        <h2 className="text-center my-5">Nuestros Productos</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <CardC />
            </div>
          </div>
        </div>



      </main>
    </>
  )
}

export default HomePage
