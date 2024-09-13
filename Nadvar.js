import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Nadvar = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className='container'>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <div class="d-flex align-items-center" role="search">
        <input class="form-control me-2" type="search" placeholder="Donde ir?" aria-label="Search" />
        <div class="form-control me-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="Fecha de llegada"
          />
        </div>
        <div class="form-control me-2">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="Fecha de salida"
          />
        </div>
        <input class="form-control me-2" type="search" placeholder="Personas" aria-label="Search" />
        <input class="form-control me-2" type="search" placeholder="Tipo" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Buscar</button>
       
        <div class="d-flex align-items-center ms-3">
          <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#loginForm" aria-expanded="false" aria-controls="loginForm">
          <i class="fa-regular fa-user"></i>
          </button>
        </div>
      </div>
      
      
      <div class="collapse mt-2" id="loginForm">
        <div class="d-flex flex-column align-items-end">
          <input class="form-control mb-2" type="text" placeholder="Usuario" aria-label="Usuario" />
          <input class="form-control mb-2" type="password" placeholder="Contraseña" aria-label="Contraseña" />
          <button class="btn btn-primary" type="submit">Entrar</button>
        </div>
      </div>
    </div>
  </nav>
</div>

  )
}
export default Nadvar