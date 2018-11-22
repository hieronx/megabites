import * as React from "react";
import "./../assets/scss/App.scss";
import RecipeCarousel from "./RecipeCarousel";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <header>
                    <div className="logo">
                        <h1>MegaBites</h1>
                    </div>

                    <div className="nav">
                        <ul>
                            <li>Recipes</li>
                            <li>Shopping list</li>
                            <li>Inventory</li>
                        </ul>
                    </div>
                </header>

                <div className="content">
                    <RecipeCarousel />
                    <RecipeCarousel />
                    <RecipeCarousel />
                    <RecipeCarousel />
                </div>
            </div>
        );
    }
}
