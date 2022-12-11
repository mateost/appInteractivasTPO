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
import ReactSelect from "react-select";

export const StyledReactSelect = styled(ReactSelect)(() => [
    `${tw `w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`}

  `,
  ]);
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

// const StyledReactSelect = {
//     Select: tw(ReactSelect)`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`

// };
// const Option = tw.option`w-full px-8 py-16 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
    ${tw`mt-5 tracking-wide font-semibold bg-primary-100 text-gray-700 hover:text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
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
    logInUrl = "login",
}) => {
    const [userName, setuserName] = useState();
    const [password, setPassword] = useState();
    const [nombre, setNombre] = useState();
    const [tipo, setTipo] = useState();
    const [error, setError] = useState();

    const options = [
        { value: "profesor", label: "profesor" },
        { value: "alumno", label: "alumno" },
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

                                <Form method="post" onSubmit={handleSubmit}>
                                   
                                    <StyledReactSelect 
                                        options={options}
                                        onChange={(event) =>
                                            setTipo(event.value)
                                        }
                                    />
                                    <br />
                                    <Input
                                        type="text"
                                        placeholder="Nombre y Apellido"
                                        onChange={(e) =>
                                            setNombre(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e) =>
                                            setuserName(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <SubmitButton type="submit">
                                        <SubmitButtonIcon className="icon" />
                                        <span className="text">
                                            {submitButtonText}
                                        </span>
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
