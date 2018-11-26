import * as React from "react";
import "./../assets/scss/CookingPage.scss";
import RecipeCarousel from "./RecipeCarousel";
import CookingHeader from "./CookingHeader";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface CookingPageProps {
}

export default class CookingPage extends React.Component<CookingPageProps, undefined> {
    render() {
        return (
            <div className="app">
                <CookingHeader />

                <div className="content">
                    <div className="card">
                        <h2>
                            Cook the pasta for 8 minutes.
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}
