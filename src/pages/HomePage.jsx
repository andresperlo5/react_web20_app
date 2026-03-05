import Card from "../components/card/Card"
import Carousel from "../components/carousel/Carousel"

const HomePage = () => {
  return (
    <>

      <Carousel />

      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <Card />
            </div>
          </div>
        </div>

        <h2 className="text-center my-5">Nuestros Productos</h2>

      </main>
    </>
  )
}

export default HomePage
