import React from 'react'
import { SlFire } from "react-icons/sl";
import { GiDutchBike,GiWifiRouter,GiFishSmoking  } from "react-icons/gi";

export const Sitios = () => {
    return (
        <>

            <div className="Sitios mt-5">

                <div className='image mt-5'>
                    <img src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/113235528_08/w=800,h=800,fit=pad" alt="Descripción de la imagen" />
                </div>
                <div className='description mt-5'>
                    <h1>Sendas Conguillio</h1>
                    <h6>Lugar para compartir en Familia</h6><br></br>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
                </div>
                <div className="icons mt-1">
                <SlFire />
                <GiWifiRouter />
                <GiFishSmoking />
                <GiDutchBike /> 
                </div>
                
            </div>
            <div className="information mt-5">
                <h3 className='title'>Agregar sitio</h3>
                <form class="row mt-3">
                    <div class="col-md-6">
                        <label for="validationDefault01" class="form-label">Sector</label>
                        <input type="text" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-2">
                        <label for="validationDefault02" class="form-label">Numero de Sitio</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-2">
                        <label for="validationDefault02" class="form-label">Precio Dario</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault01" class="form-label">Largo</label>
                        <input type="text" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault02" class="form-label">Ancho</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-2">
                        <label for="validationDefault02" class="form-label">Numero de Carpas</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-2">
                        <label for="validationDefault02" class="form-label">Numero de Personas</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault01" class="form-label">Fotos del Sitio</label>
                        <input type="file" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault01" class="form-label">Mapa del Sitio</label>
                        <input type="file" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Descripcion</label>
                        <textarea type="text" class="form-control" id="validationDefault01" required />
                    </div>

                </form>
                <div className='service mt-2'>

                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Agua" id="flexRadioDefault1" value="Agua" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Agua
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Electricidad" id="flexRadioDefault1" value="Electricidad" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Electricidad
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Techo" id="flexRadioDefault1" value="Techo" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Techo
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Luz Electrica" id="flexRadioDefault1" value="Luz Electrica" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Luz electrica
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Hornilla" id="flexRadioDefault1" value="Hornilla" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Hornilla
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Agua Potable" id="flexRadioDefault1" value="Agua Potable" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Agua Potable
                        </label>
                    </div>
                    < div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Estacionamiento" id="flexRadioDefault1" value="Estacionamiento" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Estacionamiento
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Mesa de Picnic" id="flexRadioDefault1" value="Mesa de Picnic" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Mesa de Picnic
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="Tinaja" id="flexRadioDefault1" value="Tinaja" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Tinaja
                        </label>
                    </div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="submit">Crear un Cuenta</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sitios