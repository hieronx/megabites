import * as React from "react";
import "./../assets/scss/CookingPage.scss";
import RecipeCarousel from "./RecipeCarousel";
import CookingHeader from "./CookingHeader";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface CookingPageProps {
}

export default class CookingPage extends React.Component<CookingPageProps, undefined> {

    steps: string[] = [
        'Bring a large pot of lightly salted water to a boil.',
        'Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 12 minutes.',
        'Drain and transfer to a pasta bowl.',
        'Combine garlic and olive oil in a cold skillet.',
        'Cook over medium heat to slowly toast garlic, about 10 minutes.',
        'Reduce heat to medium-low when olive oil begins to bubble.',
        'Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.',
        'Stir red pepper flakes, black pepper, and salt into the pasta.',
        'Pour in olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; stir until combined.',
        'Serve pasta topped with the remaining Parmigiano-Reggiano cheese.',
        'Enjoy!'
    ];

    currentStep: number = 0;

    goToNextStep = () => {
        this.currentStep++;
    }

    goToPreviousStep = () => {
        if (this.currentStep > 0) this.currentStep--;
    }
    
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 39) {
                this.goToNextStep();
            } else if (e.keyCode === 37) {
                this.goToPreviousStep();
            }
        });         
    }

    render() {
        return (
            <div className="app">
                <CookingHeader />

                <div className="content">
                    <div className="card">
                        <h2>
                            {this.steps[this.currentStep]}
                        </h2>
                    </div>
                </div>

                {this.currentStep > 0 &&
                    <a href="#" onClick={() => this.goToPreviousStep()} className="previous-button">&larr;</a>
                }

                {this.currentStep < (this.steps.length - 1) &&
                    <a href="#" onClick={() => this.goToNextStep()} className="next-button">&rarr;</a>
                }
            </div>
        );
    }
}
