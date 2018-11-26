import * as React from "react";
import "./../assets/scss/RecipeListPage.scss";
import RecipeCarousel from "./RecipeCarousel";
import MainHeader from "./MainHeader";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface RecipeListPageProps {
}

export default class RecipeListPage extends React.Component<RecipeListPageProps, undefined> {
    render() {
        return (
            <div className="app">
                <MainHeader />

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
