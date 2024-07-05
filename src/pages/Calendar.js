import React from 'react';
import '../styles/PageStyles.css';

const Calendar = () => {
  return (
    <div className="bg-image">
      <div className="content-container">
        <div className="calendar-wrapper">
          <div className="calendar-box">
            <h2>Calendario del Mes</h2>
            <div className="inner-box">
              {/* Aquí puedes agregar tu componente o contenido del calendario */}
            </div>
          </div>
          <div className="calendar-info-box">
            <h2>Información</h2>
            <div className="inner-box">
              {/* Aquí puedes agregar más contenido o componentes */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
