import React from 'react'

export const Fcamping = () => {
    return (
        <>
            <div className='Fcamping'>


                <div className="titulo">
                    <h3>Datos del Camping</h3>
                </div>

                <form class="row g-4 mt-5">
                    <div class="col-md-5">
                        <label for="validationDefault01" class="form-label">Nombre del Camping</label>
                        <input type="text" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefault02" class="form-label">Razon Social</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefaultUsername" class="form-label">Rut</label>
                        <div class="input-group">
                            <input type="numero" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefault01" class="form-label">Region</label>
                        <input type="text" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefault02" class="form-label">Email</label>
                        <input type="email" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefaultUsername" class="form-label">Comuna</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
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
                        <label for="validationDefault01" class="form-label">Precio</label>
                        <input type="numero" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefault02" class="form-label">Pagina Web</label>
                        <input type="text" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefaultUsername" class="form-label">Logo</label>
                        <div class="input-group">
                            <input type="file" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefault01" class="form-label">Descripcion</label>
                        <textarea type="text" class="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefault02" class="form-label">Galria de Fotos</label>
                        <input type="file" class="form-control" id="validationDefault02" required />
                    </div>
                    <div class="col-md-5">
                        <label for="validationDefaultUsername" class="form-label">Google Maps</label>
                        <div class="input-group">
                            <input type="numero" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div className='Servicios'>

                        <div className='Basicos mt-2'>
                            <h5>Basicos</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Agua Potable" id="flexRadioDefault1" value="Agua Potable" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Agua Potable
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Agua Caliente" id="flexRadioDefault1" value="Agua Caliente" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Agua Caliente
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Estacionamiento" id="flexRadioDefault1" value="Estacionamiento"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Estacionamiento
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Luz Electrica" id="flexRadioDefault1" value="Lus Electrica"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Luz Electrica
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Baños" id="flexRadioDefault1" value="Baños" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Baños
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Duchas" id="flexRadioDefault1" values="Duchas" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Duchas
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Hornillas" id="flexRadioDefault1" value="Hornillas"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Hornillas
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Mesa Picnic" id="flexRadioDefault1" value="Mesa Picnic" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Mesa de Picnic
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Techo" id="flexRadioDefault1" value="Techo"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Techo
                                </label>
                            </div><
                                div class="form-check">
                                <input class="form-check-input" type="radio" name="Pet Friendly" id="flexRadioDefault1" value="Pet Friendly" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Pet Friendly
                                </label>
                            </div>
                        </div>
                        <div className='Adicionales mt-2'>
                            <h5>Adicionales</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Internet" id="flexRadioDefault1" value="Internet"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Internet
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Tinaja" id="flexRadioDefault1" value="Tinaja"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Tinaja
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Baño Privado" id="flexRadioDefault1" value="Baño privado"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Baño Privado
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Picsina" id="flexRadioDefault1" value="Picsina"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Picsina
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Restaurant" id="flexRadioDefault1" value="Restaurant"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Restaurant
                                </label>
                            </div><
                                div class="form-check">
                                <input class="form-check-input" type="radio" name="Mini-Market" id="flexRadioDefault1" value="Mini-Market" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Mini-Market
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Leña" id="flexRadioDefault1" value="Leña" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Leña
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Carbon" id="flexRadioDefault1" value="Carbon"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Carbon
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Actividades" id="flexRadioDefault1" value="Actividades" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Actividades
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Cabañas" id="flexRadioDefault1" value="Cabañas" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cabañas
                                </label>
                            </div>
                        </div>
                        <div className='Premiun mt-2'>
                            <h5>Premiun</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Cancha de Tennis" id="flexRadioDefault1" value="Cancha de Tennis"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cancha de Tennis
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Cancha de Padel" id="flexRadioDefault1" value="Cancha de Padel" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cancha de Padel
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Embarcadero" id="flexRadioDefault1" value="Eambarcadero"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Embarcadero
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Lago de Pezca" id="flexRadioDefault1" value="Lago de Pezca"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Lago de Pezca
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Botes" id="flexRadioDefault1" value="Botes" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Botes
                                </label>
                            </div><
                                div class="form-check">
                                <input class="form-check-input" type="radio" name="Guias Turisticos" id="flexRadioDefault1" value="Guias turisticos"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Guias turisticos
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Otros" id="flexRadioDefault1" value="Otros"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Otros
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2" type="submit">Crear un Cuenta</button>
                        </div>
                    </div>
                </form>





            </div>
        </>


    )
}
export default Fcamping