import React, { useEffect } from "react";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
    Container,
    Content2Xl,
    ContentWithVerticalPadding,
} from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import TabGrid from "components/cards/TabCardGrid.js";


import Navbar from "components/headers/studentsNavbar";
import Footer from "components/footers/SimpleFiveColumn";

/* Hero */

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(
    DescriptionBase
)`text-center mx-auto text-gray-600 max-w-4xl`;

export default ({
    features = null,
    primaryButtonUrl = "#landingPageDemos",
    primaryButtonText = "Explorar Materias",
    secondaryButtonUrl = "#componentDemos",
    secondaryButtonText = "Ver Profesores",
    buttonRoundedCss = "",
    landingPages = components.landingPages,
    innerPages = components.innerPages,
    blocks = components.blocks,
    heading = "Todo el apoyo que necesitas para aprobar.",
    description = "Una manera sencilla y rapida de tener clases de apoyo para esas materias donde necesitas un refuerzo. Encontrá al profesor ideal para vos.",
}) => {
    /*
     * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
     * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
     */
    useEffect(() => {
        window.gtag("js", new Date());
        window.gtag("config", "UA-45799926-9");
    }, []);


    const noOfLandingPages = Object.keys(landingPages).length;
    const noOfInnerPages = Object.keys(innerPages).length;
    const noOfComponentBlocks = Object.values(blocks).reduce(
        (acc, block) => acc + Object.keys(block.elements).length,
        0
    );
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    features = features || [
        `${noOfLandingPages} Materias`,
        `${noOfInnerPages} Profesores`,
        `${noOfComponentBlocks} Bibliografia`,
        "Todos los niveles",
        "Completamente online",
        "Siempre disponible",
    ];



    return (
        <AnimationRevealPage disabled>
            <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
                <Content2Xl>
                    <Navbar></Navbar>

                    <SectionContainer id="landingPageDemos">
                        <SectionHeading>Mis Clases</SectionHeading>
                        <SectionDescription>
                            Estas suscripto a un total de {noOfLandingPages}{" "}
                            clases.
                        </SectionDescription>
                        <TabGrid
                            heading={
                                <>
                                    Conozca las{" "}
                                    <HighlightedText>Materias.</HighlightedText>
                                </>
                            }
                        />
                    </SectionContainer>
                </Content2Xl>
            </Container>
            <Footer></Footer>
        </AnimationRevealPage>
    );
};

