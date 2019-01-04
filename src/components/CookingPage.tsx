import * as React from "react";
import { inject, observer } from 'mobx-react'

import "./../assets/scss/CookingPage.scss";
import CookingHeader from "./CookingHeader";
import { Step } from '../stores/ItemStore'
import { RootStore } from '../stores/RootStore'
import { inject } from "mobx-react";

export interface CookingPageProps {
    match: any;
    store: RootStore;
}

@inject('store')
@observer
export default class CookingPage extends React.Component<CookingPageProps, undefined> {

    stepIndex: number = 0;

    enableSound: boolean = false;

    toggleSound = (newEnableSound: boolean) => {
        this.enableSound = newEnableSound;
    }

    goToNextStep = () => {
        this.stepIndex++;
        this.speakCurrentStep();
    }

    goToPreviousStep = () => {
        if (this.stepIndex > 0) this.stepIndex--;
        this.speakCurrentStep();
    }
    
    speakCurrentStep = () => {
        if (this.enableSound) {
            let msg = new SpeechSynthesisUtterance(this.currentStep().description);
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
        return this.props.store!.itemStore.items.get(itemId).steps
    }

    currentStep = (): Step => {
        return this.props.store.itemStore.getStep(this.props.match.params.id, this.stepIndex)
    }

    expandCurrentStep = () => {
        this.props.store.itemStore.expandStep(this.props.match.params.id, this.stepIndex)
    }

    getProgressAsPercentage = () => {
        return Math.floor((this.stepIndex / (this.steps().length - 1)) * 100) + '%'
    }

    render() {
        return (
            <div className="app">
                <CookingHeader isEnabled={this.enableSound} onToggleSound={this.toggleSound} />

                <div className="content">
                    <div className="card">
                        {this.currentStep() && this.currentStep().imageUrl &&
                            <img src={this.currentStep().imageUrl} />
                        }
                        <h2>
                            {this.currentStep() && this.currentStep().description}
                        </h2>

                        {this.currentStep() && this.currentStep().expandedSteps && this.currentStep().expandedSteps.length > 0 &&
                            <a onClick={() => this.expandCurrentStep()}>Expand this step</a>
                        }
                    </div>
                </div>

                {this.stepIndex > 0 &&
                    <a href="#" onClick={() => this.goToPreviousStep()} className="previous-button">&larr;</a>
                }

                {this.stepIndex < (this.steps().length - 1) &&
                    <a href="#" onClick={() => this.goToNextStep()} className="next-button">&rarr;</a>
                }

                <div className="progress-bar">
                    <div className="completed-progress" style={{ width: this.getProgressAsPercentage() }}></div>
                </div>
            </div>
        );
    }
}
