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

                <div className="sm-content">
                    <div className="top-box">
                        <div className="highlights">
                            <h2>Spaghetti Aglio e Olio</h2>
                            
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
                           <img src="https://images.media-allrecipes.com/userphotos/560x315/3727226.jpg" className="primary-image" />
                           <div className="secondary-images">
                            <img src="http://www.oliviascuisine.com/wp-content/uploads/2017/02/garlic-oil-spaghetti.jpg" alt=""/>
                            <img src="https://ips.plug.it/cips/buonissimo.org/cms/2012/01/spaghetti-aglio-olio-e-pane-fritto.jpg" alt=""/>
                            <img src="https://www.irishtimes.com/polopoly_fs/1.3017237.1490014825!/image/image.jpg_gen/derivatives/landscape_620/image.jpg" alt=""/>
                           </div>
                        </div>
                    </div>

                    <div className="recipe-details">
                        <div className="ingredient-list">
                            <h2>Ingredients</h2>
                            <ul>
                                <li>500g spaghetti</li>
                                <li>6 cloves garlic</li>
                                <li>Olive oil</li>
                                <li>Red pepper flakes</li>
                                <li>Salt and black pepper</li>
                                <li>Fresh parsley</li>
                                <li>Pargigiano Reggiano cheese</li>
                            </ul>
                        </div>

                        <div className="steps">
                            <h2>Steps</h2>
                            <ol>
                                <li>Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 12 minutes. Drain and transfer to a pasta bowl.</li>
                                <li>Combine garlic and olive oil in a cold skillet. Cook over medium heat to slowly toast garlic, about 10 minutes. Reduce heat to medium-low when olive oil begins to bubble.</li>
                                <li>Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.</li>
                                <li>Stir red pepper flakes, black pepper, and salt into the pasta. Pour in olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; stir until combined.</li>
                                <li>Serve pasta topped with the remaining Parmigiano-Reggiano cheese.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
