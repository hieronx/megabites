import * as React from "react";
import "./../assets/scss/RecipeViewPage.scss";
import RecipeCarousel from "./RecipeCarousel";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://images.media-allrecipes.com/userphotos/560x315/3727226.jpg', width: 4, height: 3 },
  { src: 'http://www.oliviascuisine.com/wp-content/uploads/2017/02/garlic-oil-spaghetti.jpg', width: 1, height: 1 },
  { src: 'https://ips.plug.it/cips/buonissimo.org/cms/2012/01/spaghetti-aglio-olio-e-pane-fritto.jpg', width: 3, height: 2 },
  { src: 'https://www.irishtimes.com/polopoly_fs/1.3017237.1490014825!/image/image.jpg_gen/derivatives/landscape_620/image.jpg', width: 4, height: 2 }
];
const reactLogo = require("./../assets/img/react_logo.svg");

export interface RecipeViewPageProps {
    match: any;
}

interface State {
    currentImage: number;
    lightboxIsOpen: boolean;
}

export default class RecipeViewPage extends React.Component<RecipeViewPageProps, State> {

    state = { currentImage: 0, lightboxIsOpen: false };

    openLightbox = (event: any, obj: any) => {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        return (
            <div className="app">
                <MainHeader />

                <div className="sm-content">
                    <div className="top-box">
                        <div className="inline-card highlights">
                            <h2>Spaghetti Aglio e Olio</h2>
                            
                            <div className="numbers">
                                <div className="number">
                                    30 mins
                                </div>
                            </div>

                            <Link to={"/recipes/" + this.props.match.params.id + "/cooking"}>
                                <div className="btn-primary">
                                    Start cooking
                                </div>
                            </Link>
                        </div>

                        <div className="photos">
                            <Gallery photos={photos} onClick={this.openLightbox} />
                            <Lightbox images={photos}
                            onClose={this.closeLightbox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                            />
                        </div>
                    </div>

                    <div className="recipe-details">
                        <div className="inline-card ingredient-list">
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

                        <div className="inline-card steps">
                            <h2>Steps</h2>
                            <ol>
                                <li><span>Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 12 minutes. Drain and transfer to a pasta bowl.</span></li>
                                <li><span>Combine garlic and olive oil in a cold skillet. Cook over medium heat to slowly toast garlic, about 10 minutes. Reduce heat to medium-low when olive oil begins to bubble.</span></li>
                                <li><span>Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.</span></li>
                                <li><span>Stir red pepper flakes, black pepper, and salt into the pasta. Pour in olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; stir until combined.</span></li>
                                <li><span>Serve pasta topped with the remaining Parmigiano-Reggiano cheese.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
