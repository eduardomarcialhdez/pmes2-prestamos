import { useState } from "react";

function App() {
  const [monto, setMonto] = useState(0);
  const [plazo, setPlazo] = useState(1);

  const tasaInteresBaja = 0.05; // 5% mensual
  const tasaInteresAlta = 0.15; // 15% mensual
  const iva = 0.16; // 16%

  const calcularTotalAPagar = () => {
    const interesBajo = monto * tasaInteresBaja * plazo;
    const interesAlto = monto * tasaInteresAlta * plazo;
    const totalBajo = monto + interesBajo + (monto + interesBajo) * iva;
    const totalAlto = monto + interesAlto + (monto + interesAlto) * iva;

    return [totalBajo, totalAlto];
  };

  const handleMontoChange = (event) => {
    setMonto(parseFloat(event.target.value));
  };

  const handlePlazoChange = (value) => {
    setPlazo(value);
  };

  const [totalBajo, totalAlto] = calcularTotalAPagar();

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
      <div>
        <div className="loan-section mt-5">
          <h2>Calculadora de Préstamos</h2>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Monto a Prestar"
              onChange={handleMontoChange}
            />
            <div className="input-group-append">
              <span className="input-group-text">MXN</span>
            </div>
          </div>
          <div className="plazo-buttons">
            <button
              className={`btn ${plazo === 1 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handlePlazoChange(1)}
            >
              1 Mes
            </button>
            <button
              className={`btn ${plazo === 3 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handlePlazoChange(3)}
            >
              3 Meses
            </button>
            <button
              className={`btn ${plazo === 6 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handlePlazoChange(6)}
            >
              6 Meses
            </button>
            <button
              className={`btn ${plazo === 9 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handlePlazoChange(9)}
            >
              9 Meses
            </button>
            <button
              className={`btn ${
                plazo === 12 ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => handlePlazoChange(12)}
            >
              12 Meses
            </button>
          </div>
        </div>

        {/* Sección para mostrar el total a pagar con tasas de interés e IVA */}
        <div className="total-section mt-5">
          <h2>Total a Pagar</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Interés al 5%</h3>
              <p>Total a pagar (con IVA): ${totalBajo.toFixed(2)}</p>
            </div>
            <div className="col-md-6">
              <h3>Interés al 15%</h3>
              <p>Total a pagar (con IVA): ${totalAlto.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
