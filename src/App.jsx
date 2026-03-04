/* SPA - Single Page Applications */
/* APlicacion de una sola pagina */
import "./App.css"

const App = () => {

  //dentro de la funcion padre pero fuera del return

  //js

  //xml = html

  return (
    /* todo lo que esta dentro del return es hmtl o xml */
    /* fragments */
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>

              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link" href="#">Iniciar Sesion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Registrarse</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </header>

      {/* Carousel */}

      <main>
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


        {/* Productos - Cards*/}

        <h2 className="text-center my-5">Nuestros Productos</h2>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAIRhL8x4JonCGt6vtl3e_eeehqpMEyIdBA&s" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/71tQk1FxyrL._AC_UF894,1000_QL80_.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CKlG8EseJVzw0jU0hJjVUDdJjnmTfSVVdQ&s" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-body-tertiary text-center py-5 mt-5">
        <h2>Footer</h2>
      </footer>
    </>
  )


}

export default App
