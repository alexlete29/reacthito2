import "./css.css";
import logo from "./logo.png";
function nav() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div class="container px-4">
                    <a class="navbar-brand" href="#page-top"><img src={logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div>
                        <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#modalLogin" data-bs-whatever="@mdo">Iniciar sesión</button>
                        <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Iniciar Sesión</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Correo o nombre de usuario</label>
                                    <input type="text" class="form-control" id="recipient-name"></input>
                                    </div>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Contraseña</label>
                                        <input type="password" class="form-control" id="recipient-name"></input>
                                    </div>
                                </form>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <a type="button" class="btn btn-primary boton" href="principal.html">Iniciar Sesión</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#modalRegistro" data-bs-whatever="@mdo">Registrarse</button>
                        <div class="modal fade" id="modalRegistro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Registrarse</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Correo</label>
                                        <input type="email" class="form-control" id="recipient-name"></input>
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Contraseña</label>
                                            <input type="password" class="form-control" id="recipient-name"></input>
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Nombre de usuario</label>
                                            <input type="password" class="form-control" id="recipient-name"></input>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <a type="button" class="btn btn-primary boton" href="index.html">Registrarse</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse menu" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#SobreNosotros">Sobre Nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="#ListarFestivales">Listar festivales</a></li>
                        <li class="nav-item"><a class="nav-link" href="#ListarUsuarios">Listar usuarios</a></li>
                        <li class="nav-item"><a class="nav-link" href="#Contacto">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}

export default nav;
