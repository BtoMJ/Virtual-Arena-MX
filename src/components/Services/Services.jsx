import "./Services.css";

function Services() {
  return (
    <section>
      <div className="services-container">
        <h2>SERVICIOS</h2>

        <div className="services-list">
          <div className="service-item">
            <div className="service-title">
              <h3>VR</h3>
              <h4>Realidad Virtual</h4>
            </div>
            <p className="service-description">
              Ven ... ponte las gafas y olvida la realidad!!
            </p>
          </div>
          <div className="service-item">
            <div className="service-title">
              <h3>Activaciones</h3>
            </div>
            <p className="service-description">
              Activaciones inolvidables para tu marca.
            </p>
          </div>
          <div className="service-item">
            <div className="service-title">
              <h3>Diseño VR xr</h3>
            </div>
            <p className="service-description">
              Arquitectos de Realidades Extendidas (XR)
            </p>
          </div>
          <div className="service-item">
            <div className="service-title">
              <h3>Capacitación</h3>
              <h4>Realidad Virtual</h4>
            </div>
            <p className="service-description">Capacitaciones en VR xr</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
