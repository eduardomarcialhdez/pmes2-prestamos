import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <div className="hero-section bg-primary text-white text-center p-5">
          <h1>Tasas de Interés Más Bajas</h1>
          <p className="lead">
            ¡Pedir prestado nunca fue tan asequible! En Prestamos de Huejutla,
            ofrecemos las tasas de interés más bajas del mercado. Nuestra misión
            es ayudarte a alcanzar tus metas financieras de manera fácil y
            accesible.
          </p>
        </div>
        <div className="comparison-section mt-5 p-4">
          <h2 className="text-center">Comparación con la Competencia</h2>
          <p>
            <b>¿Por qué elegirnos?</b> En comparación con la competencia,
            podemos ofrecerte tasas de interés significativamente más bajas.
            Mientras que otros prestamistas te cobran tasas altas que pueden
            ahogarte en deudas, nosotros te damos la oportunidad de pedir
            prestado a tasas que te permiten ahorrar dinero y lograr tus
            objetivos más rápido.
          </p>
        </div>
      </div>
      <div>
        <div className="about-us-section bg-light text-center p-5">
          <h2>Quiénes Somos</h2>
          <p>
            Somos Prestamos de Huejutla, una empresa comprometida en
            proporcionar soluciones financieras accesibles a nuestros clientes.
            Nuestra dedicación a tasas de interés bajas y un excelente servicio
            al cliente nos diferencia de la competencia. ¡Confía en nosotros
            para hacer realidad tus metas financieras!
          </p>
          <center>
            <img src="public/imagen1.jpg" alt="prestamos" />
          </center>
        </div>
        <div className="testimonial-section mt-5">
          <div className="container">
            <div className="row">
              <h1>Algunos testimonios</h1>
              <div className="col-md-4">
                <div className="testimonial">
                  <p>
                    "Estoy muy contento con Prestamos de Huejutla. Sus tasas de
                    interés bajas me han ayudado a cumplir mis sueños sin
                    endeudarme. ¡Los recomiendo totalmente!"
                  </p>
                  <p className="text-right">
                    <strong>- Juan | Tendero</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                  <p>
                    "Desde que empecé a trabajar con Prestamos de Huejutla, mi
                    vida financiera ha mejorado notablemente. Sus tasas son
                    insuperables y su servicio es excelente."
                  </p>
                  <p className="text-right">
                    <strong>- María | Estudiante</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                  <p>
                    "No puedo agradecer lo suficiente a Prestamos de Huejutla
                    por hacer que mis proyectos sean posibles. Sus tasas bajas
                    han marcado la diferencia en mi vida."
                  </p>
                  <p className="text-right">
                    <strong>- Esteban | Emprendedor</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
