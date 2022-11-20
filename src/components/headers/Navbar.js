import { LogoLink } from "components/headers/light";
import logo from "images/logo.svg";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;


export default () => {
    return (
    <NavRow>
        <LogoLink href="/">
            <img src={logo} alt="" />
            Tarket
        </LogoLink>
        <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
            <NavLink
                target="_blank"
                href="components/landingPages/RestaurantLandingPage"
            >
                Materias
            </NavLink>
            <NavLink
                target="_blank"
                href="alumno/dashboard"
            >
                Alumnos
            </NavLink>
            <NavLink target="_blank" href="profesor/">
                Maestros
            </NavLink>
            <NavLink target="_blank" href="nosotros">
                Nosotros
            </NavLink>
            <div tw="md:hidden flex-100 h-0"></div>
            <PrimaryNavLink onClick={null}>Registrarse</PrimaryNavLink>
            <PrimaryNavLink href="/login">Iniciar Sesión</PrimaryNavLink>
        </div>
    </NavRow>
    );
};
