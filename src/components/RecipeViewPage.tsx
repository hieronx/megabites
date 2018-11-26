import * as React from "react";
import "./../assets/scss/RecipeViewPage.scss";
import RecipeCarousel from "./RecipeCarousel";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface RecipeViewPageProps {
}

export default class RecipeViewPage extends React.Component<RecipeViewPageProps, undefined> {
    render() {
        return (
            <div className="app">
                <MainHeader />

                <div className="content">
                    <div className="top-box">
                        <div className="highlights">
                            <h2>Recipe Name</h2>
                            
                            <div className="numbers">
                                <div className="number">
                                    30 mins
                                </div>
                            </div>

                            <Link to="/recipes/3/cooking">
                                <div className="btn-primary">
                                    Start cooking
                                </div>
                            </Link>
                        </div>

                        <div className="photos">
                            <h2>Photos here...</h2>
                        </div>
                    </div>

                    <div className="recipe-details">
                        <div className="ingredient-list">
                            <h2>Ingredients here...</h2>
                        </div>

                        <div className="steps">
                            <h2>Steps here...</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
