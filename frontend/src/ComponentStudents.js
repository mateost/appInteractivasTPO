import React from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import RestaurantLandingPageImageSrc from "images/demo/RestaurantLandingPage.jpeg";

import MisClases from "pages/students/MisClases";

import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "images/demo/SignupPage.jpeg";
import PricingPageImageSrc from "images/demo/PricingPage.jpeg";
import AboutUsPageImageSrc from "images/demo/AboutUsPage.jpeg";
import ContactUsPageImageSrc from "images/demo/ContactUsPage.jpeg";
import BlogIndexPageImageSrc from "images/demo/BlogIndexPage.jpeg";
import TermsOfServicePageImageSrc from "images/demo/TermsOfServicePage.jpeg";
import PrivacyPolicyPageImageSrc from "images/demo/PrivacyPolicyPage.jpeg";

import BuscarClases from "pages/students/BuscarClases";

import Dashboard from "pages/students/Dashboard";

export const components = {
    dashboard: {
        component: Dashboard,
        imageSrc: RestaurantLandingPageImageSrc,
        url: "/components/pages/students/Dashboard",
    },

    Clases: {
        MisClases: {
            component: MisClases,
            imageSrc: LoginPageImageSrc,
            scrollAnimationDisabled: true,
            url: "/alumnos/clases/misclases",
        },
        BuscarClases: {
            component: BuscarClases,
            url: `/components/clases/buscarclases`,
            imageSrc: SignupPageImageSrc,
            scrollAnimationDisabled: true,
        },
        PricingPage: {
            component: PricingPage,
            url: `/components/innerPages/PricingPage`,
            imageSrc: PricingPageImageSrc,
        },
        AboutUsPage: {
            component: AboutUsPage,
            url: `/components/innerPages/AboutUsPage`,
            imageSrc: AboutUsPageImageSrc,
        },
        ContactUsPage: {
            component: ContactUsPage,
            url: `/components/innerPages/ContactUsPage`,
            imageSrc: ContactUsPageImageSrc,
        },
        BlogIndexPage: {
            component: BlogIndexPage,
            url: `/components/innerPages/BlogIndexPage`,
            imageSrc: BlogIndexPageImageSrc,
        },
        TermsOfServicePage: {
            component: TermsOfServicePage,
            url: `/components/innerPages/TermsOfServicePage`,
            imageSrc: TermsOfServicePageImageSrc,
        },
        PrivacyPolicyPage: {
            component: PrivacyPolicyPage,
            url: `/components/innerPages/PrivacyPolicyPage`,
            imageSrc: PrivacyPolicyPageImageSrc,
        },
    },
};

export default () => {
    const { type, subtype, name } = useParams();
    try {
        let Component = null;
        console.log(type)
        if (type === undefined) {
            Component = components['dashboard'].component;

        } else {

            if (type === "blocks" && subtype) {
                Component = components[type][subtype]["elements"][name].component;
                return (
                    <AnimationRevealPage disabled>
                    <Component />
                </AnimationRevealPage>
            );
        } else {
            if (type === "dashboard") {
                Component = components[type].component;
            } else Component = components[type][name].component;
        }
    }

        if (Component) return <Component />;

        throw new Error("Component Not Found");
    } catch (e) {
        console.log(e);
        return <div>Error: Component Not Found</div>;
    }
};
