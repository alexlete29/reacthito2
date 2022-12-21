import "./css.css";
function section()
{
    return(
    <div>
        <section id="SobreNosotros">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8 colorsection">
                    <h2>Sobre Nosotros</h2>
                    <p class="lead">Somos una empresa que se encarga de gestionar festivales y todo lo que ello conlleva. Si quiere montar un festival desde cero, ¡Este es su sitio!</p>
                </div>
            </div>
        </div>
    </section>
    <section id="ListarFestivales">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8 colorsection">
                    <h2>Lista festivales</h2>
                    <p class="lead">Visibilice una lista con todos los festivales que tiene y gestionelos de manera sencilla</p>
                    <div class="container">
                      <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Nombre del festival</th>
                              <th scope="col">Entradas</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Lighthouse</td>
                              <td>300000</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>NoBull festival</td>
                              <td>500000</td>
                            </tr>
                              <th scope="row">3</th>
                              <td>Big Bang Fest</td>
                              <td>200000</td>
                            <tr>
                            </tr>
                          </tbody>
                      </table>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section id="ListarUsuarios">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8 colorsection">
                    <h2>Listar usuarios</h2>
                    <p class="lead">Controle y liste todos los usuarios que puedan gestionar su festival de la forma más simple posible</p>
                    <div class="container">
                      <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Apellidos</th>
                              <th scope="col">Nombre usuario</th>
                              <th scope="col">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Alex</td>
                              <td>Lete Alfaro</td>
                              <td>alexlete29</td>
                              <td>alexlete@festgest.com</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Sergio</td>
                              <td>Mateos Lozano</td>
                              <td>smateoslo</td>
                              <td>sergiomateos@festgest.com</td>
                            </tr>
                              <th scope="row">3</th>
                              <td>Alberto</td>
                              <td>Bueno Cruz</td>
                              <td>abuenocr</td>
                              <td>albertobueno@festgest.com</td>
                            <tr>
                            </tr>
                          </tbody>
                      </table>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section id="Contacto">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8 colorsection">
                    <h2>Contacta con nosotros</h2>
                    <p class="lead">Si está interesado en crear un festival o tiene dudas, ¡Contacta con nosotros!</p>
                    <div class="container">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4">
                              <label for="validationCustom01" class="form-label">Nombre</label>
                              <input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" required></input>
                            </div>
                            <div class="col-md-4">
                              <label for="validationCustom02" class="form-label">Apellidos</label>
                              <input type="text" class="form-control" id="validationCustom02" placeholder="Apellidos" required></input>
                            </div>
                            <div class="col-md-8">
                              <label for="validationCustom03" class="form-label">Email</label>
                              <input type="email" class="form-control" id="validationCustom03" required></input>
                            </div>
                            <div class="col-12">
                              <button class="btn btn-primary boton" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div class="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.3715897639877!2d-1.974944695830366!3d43.32741277297745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e0!3m2!1ses!2ses!4v1671572985092!5m2!1ses!2ses" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    );
}
export default section;