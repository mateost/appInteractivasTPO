import React, { useState, useEffect } from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import * as AuthService from "services/auth.service";
import Select from "react-select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-black w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  onLogin,
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Crear Cuenta en Tarket",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Registrarse",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "register",
  logInUrl = "LoginPage",
}) => {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const [nombre, setNombre] = useState();
  const [tipo, setTipoUsuario] = useState();
  const [telefono, setTelefono] = useState();
  const [titulo, setTitulo] = useState();
  const [experiencia, setExperiencia] = useState();
  const [fechaNacimiento, setFechaNacimiento] = useState();
  const [estudios, setEstudios] = useState();
  const [completado, setCompletado] = useState();

  const [error, setError] = useState();

  const optionsTipoUsuario = [
    { value: "profesor", label: "profesor" },
    { value: "alumno", label: "alumno" },
  ];

  const optionsEstudios = [
    { value: "primario", label: "Primario" },
    { value: "secundario", label: "Secundario" },
    { value: "terciario", label: "Terciario" },
    { value: "universitario", label: "Universitario" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.create(userName, password, nombre, tipo)
      .then((user) => {
        console.log(user);
        onLogin(user.user, user.token);
      })
      .catch((errorMsg) => {
        setError("Algo anda mal  " + errorMsg);
        console.log(errorMsg);
      });
  };
  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img
                          src={socialButton.iconImageSrc}
                          className="icon"
                          alt=""
                        />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>O registrarse con un e-mail</DividerText>
                </DividerTextContainer>
                <Form method="post" onSubmit={handleSubmit}>
                  <Select
                    options={optionsTipoUsuario}
                    onChange={(event) => setTipoUsuario(event.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Nombre y Apellido"
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setuserName(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    style={{ "margin-bottom": "20px" }}
                    type="tel"
                    placeholder="Telefono: +54 11 2222 4444"
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                  {tipo === "profesor" ? (
                    <div>
                      <Input
                        type="text"
                        placeholder="Titulo"
                        onChange={(e) => setTitulo(e.target.value)}
                      />
                      <Input
                        type="text"
                        placeholder="Experiencia"
                        onChange={(e) => setExperiencia(e.target.value)}
                      />
                    </div>
                  ) : tipo === "alumno" ? (
                    <div>
                      <div>
                        <label>Fecha de Nacimiento:</label>
                        <Input
                          type="date"
                          onChange={(e) => setFechaNacimiento(e.target.value)}
                        />
                      </div>
                      <div>
                        <label>Estudios:</label>
                        <Select
                          options={optionsEstudios}
                          onChange={(event) => setEstudios(event.value)}
                        />
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Completo"
                            onChange={(e) => setCompletado(e.target.checked)}
                          />
                        </FormGroup>
                      </div>
                    </div>
                  ) : null}
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p tw="mt-6 text-xs text-gray-600 text-center">
                    Estoy de acuerdo con los{" "}
                    <a
                      href={tosUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Terminos del servicio
                    </a>{" "}
                    y las{" "}
                    <a
                      href={privacyPolicyUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Politicas de privacidad
                    </a>
                  </p>

                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Ya tengo una cuenta?{" "}
                    <a
                      href={logInUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Iniciar Sesión
                    </a>
                  </p>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
