import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

	// import styles from "./App.module.css";
	import { Routes, Route, Link, useNavigate } from "react-router-dom";
	// import PeliculaAdmin from "./pages/PeliculaAdmin";
	// import FiguraAdmin from "./pages/FiguraAdmin";
	// import PersonajeAdmin from "./pages/PersonajeAdmin";
	// import ComidaAdmin from "./pages/ComidaAdmin";
	// import { MoviesAdmin } from './components/MoviesAdmin';
	// import { ComidasAdmin } from './components/ComidasAdmin';
	// import { FigurasAdmin } from './components/FigurasAdmin';
	// import { PersonajesAdmin } from './components/PersonajesAdmin';
	// import PageLogin from "./pages/PageLogin";
	import  LandingPage   from "./pages/LandingPage";
	import styles from "styled-components";
	import { useEffect, useState} from 'react';



	function App() {
		const navigate = useNavigate();
	const [user, setUser] = useState(null);

	// Token, se guarda en el local storage
	useEffect(() => {
			const token = localStorage.getItem('token');

			if (token) {
							// usuario logueado
				setUser(localStorage.getItem('user'));
				navigate('/');
			}
			// 			// si no tiene token, vuelve al login
			else{
					// use navigate, redirecciona
					navigate('/admin');
			}
	},[]);

	// es la funcion para poder loguearse en la pagina
	function onLogin(user, token){
		console.log("onlogin....")
		//almacenamos el token
		localStorage.setItem('token', token);
		//almacenamos el usuario
		localStorage.setItem('user', JSON.stringify(user));
		setUser(user);
		navigate('/');
	}

		return (
			<div>
				<header>
			<Navbar bg="light" expand="lg">
			<Container>
			  <Navbar.Brand href="">Tarket</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
				  <Nav.Link href="/inicio">Inicio</Nav.Link>
				  <Nav.Link href="#link">Materias</Nav.Link>
				  <NavDropdown title="Usuarios" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.2">
					  Iniciar Sesion
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Registrarse</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">
					  Ayuda
					</NavDropdown.Item>
				  </NavDropdown>
				</Nav>
			  </Navbar.Collapse>
			</Container>
		  </Navbar>
		  </header>
					<Routes>
						 <Route path="/inicio" element={<LandingPage />} />
						{/* <Route path="/" element={<LandingPage />} /> 

						<Route path="/api/peliculas">Películas</Route>
						<Route path="/peliculas" element={<MoviesAdmin />} />
						<Route path="/peliculas/:idPelicula" element={<PeliculaAdmin />} />

						<Route path="/api/comidas">Comidas</Route>
						<Route path="/comidas" element={<ComidasAdmin />} />
						<Route path="/comidas/:idComida" element={<ComidaAdmin />} />

						<Route path="/api/figuras">Figuras</Route>
						<Route path="/figuras" element={<FigurasAdmin />} />
						<Route path="/figuras/:idFigura" element={<FiguraAdmin />} />

						<Route path="/api/personajes">Personaje</Route>
						<Route path="/personajes" element={<PersonajesAdmin />} />
						<Route path="/personajes/:idPersonaje" element={<PersonajeAdmin />} /> */}

					</Routes>
	<footer >
	<h3 ClassName={styles.App}>Datos</h3>
		<p >Este sitio web fue creado para poder</p>
	</footer>
			</div>
		);
	}

	export default App;

  
