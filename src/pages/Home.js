import React from "react";

function Home() {
    return (
        <div class="MuiContainer-root MuiContainer-maxWidthLg css-1rujksk-MuiContainer-root">
            <div class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-undefined MuiGrid-grid-xs-12 MuiGrid-grid-md-7 MuiGrid-grid-lg-6 css-cpmzqn-MuiGrid-root">
                <h1 class="MuiTypography-root MuiTypography-h1 css-rsi4qb-MuiTypography-root">TARKET</h1>
                <p class="MuiTypography-root MuiTypography-body1 css-ty9w2i-MuiTypography-root">Los profesores que necesitas al alcance del click.</p>
                <div class="css-18x5rxp-MuiStack-root">
                    <button class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1kav12i-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                        Registrarse<span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                    </button>
                    <a class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-959rth-MuiButtonBase-root-MuiButton-root" tabindex="0" href="/pages/authentication/sign-in">
                        Iniciar Sesion<span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;