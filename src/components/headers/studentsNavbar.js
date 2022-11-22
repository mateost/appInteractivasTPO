import { LogoLink } from "components/headers/light";
import logo from "images/logo.svg";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import AnchorLink from "react-anchor-link-smooth-scroll";

/* Hero */
const Row = tw.div`flex font-display`;
const NavRow = tw(Row)`flex flex-col p-4 lg:flex-row bg-gray-900 text-gray-100 items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-100 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
    NavLink
)`text-gray-800 bg-gray-300 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;

export default () => {
    return (
        <NavRow>
            <LogoLink href="/">
                <img src={logo} alt="" />
                Tarket
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
                <NavLink href="/alumno/dashboard">Dashboard</NavLink>
                <NavLink href="/alumno/Clases/MisClases">Mis Clases</NavLink>
                <NavLink href="/alumno/Clases/BuscarClases">Buscar Clases</NavLink>
                <NavLink href="/alumno/Mensajes/MisMensajes">Mensajes</NavLink>
                <NavLink href="/alumno/MiCuenta">Mi Cuenta</NavLink>
                <div tw="md:hidden flex-100 h-0"></div>
                <PrimaryNavLink href="/login">Cerrar Sesión</PrimaryNavLink>
            </div>
        </NavRow>
    );
};
