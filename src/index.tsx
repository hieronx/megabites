import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import AppRouter from "./components/AppRouter";
import "./assets/scss/App.scss";
import { Provider } from 'mobx-react'
import { store } from './store'

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
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
                <Provider store={store}>
                    <NewAppRouter/>
                </Provider>
            </AppContainer>,
            rootEl
        );
    });
}
