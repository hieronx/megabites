import * as React from "react";
import { inject, observer } from 'mobx-react'

import "./../assets/scss/CookingPage.scss";
import CookingHeader from "./CookingHeader";
import { RootStore } from '../stores/RootStore'
import { inject } from "mobx-react";

export interface CookingPageProps {
    match: any;
    store: RootStore;
}

@inject('store')
@observer
export default class CookingPage extends React.Component<CookingPageProps, undefined> {

    currentStep: number = 0;

    enableSound: boolean = false;

    toggleSound = (newEnableSound: boolean) => {
        this.enableSound = newEnableSound;
    }

    goToNextStep = () => {
        this.currentStep++;
        this.speakCurrentStep();
    }

    goToPreviousStep = () => {
        if (this.currentStep > 0) this.currentStep--;
        this.speakCurrentStep();
    }
    
    speakCurrentStep = () => {
        if (this.enableSound) {
            let msg = new SpeechSynthesisUtterance(this.steps[this.currentStep]);
            const voices = window.speechSynthesis.getVoices();
            if (voices[32]) msg.voice = voices[32];
            window.speechSynthesis.speak(msg);
        }
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

    steps = (): Step[] => {
        const itemId = this.props.match.params.id
        console.log(this.props.store!.itemStore.items.get(itemId).steps)
        return this.props.store!.itemStore.items.get(itemId).steps
    }

    getProgressAsPercentage = () => {
        return Math.floor((this.currentStep / (this.steps.length - 1)) * 100) + '%'
    }

    render() {
        return (
            <div className="app">
                <CookingHeader isEnabled={this.enableSound} onToggleSound={this.toggleSound} />

                <div className="content">
                    <div className="card">
                        <h2>
                            {this.steps()[this.currentStep].description}
                        </h2>
                    </div>
                </div>

                {this.currentStep > 0 &&
                    <a href="#" onClick={() => this.goToPreviousStep()} className="previous-button">&larr;</a>
                }

                {this.currentStep < (this.steps().length - 1) &&
                    <a href="#" onClick={() => this.goToNextStep()} className="next-button">&rarr;</a>
                }

                <div className="progress-bar">
                    <div className="completed-progress" style={{ width: this.getProgressAsPercentage() }}></div>
                </div>
            </div>
        );
    }
}
