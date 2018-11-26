import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import AppRouter from "./components/AppRouter";

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <AppRouter/>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/AppRouter", () => {
        const NewAppRouter = require("./components/AppRouter").default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}
