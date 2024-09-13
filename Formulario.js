import React from 'react'

export const Formulario = () => {
  return (
   <div className='container'>

    <div className="titulo">
      <h3>Creacion de Usuario (camping)</h3>
    </div>

    <form class="row g-3 mt-5">
      <div class="col-md-5">
        <label for="validationDefault01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationDefault01" required />
      </div>
      <div class="col-md-5">
        <label for="validationDefault02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationDefault02" required />
      </div>
      <div class="col-md-5">
        <label for="validationDefaultUsername" class="form-label">Email</label>
        <div class="input-group">
          <input type="email" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
        </div>
      </div>
      <div class="col-md-5">
        <label for="validationDefault01" class="form-label">Telefono</label>
        <input type="numero" class="form-control" id="validationDefault01" required />
      </div>
      <div class="col-md-5">
        <label for="validationDefault02" class="form-label">Direccion</label>
        <input type="text" class="form-control" id="validationDefault02" required />
      </div>
      <div class="col-md-5">
        <label for="validationDefaultUsername" class="form-label">Rut</label>
        <div class="input-group">
          <input type="numero" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
        </div>
      </div>
      <div class="col-md-5">
        <label for="validationDefault01" class="form-label">Clave</label>
        <input type="password" class="form-control" id="validationDefault01" required />
      </div>
      <div class="col-md-5">
        <label for="validationDefault02" class="form-label">Confirmar Clave</label>
        <input type="password" class="form-control" id="validationDefault02" required />
      </div>
      <div class="col-10">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="submit">Crear un Cuenta</button>
        </div>
      </div>
    </form>

  </div>
  )
}
export default Formulario