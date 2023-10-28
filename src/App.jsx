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
      
      <div></div>
    </>
  );
}

export default App;
