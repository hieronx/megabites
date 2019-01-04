import * as React from "react";
import { inject, observer } from 'mobx-react'

import "./../assets/scss/CookingPage.scss";
import CookingHeader from "./CookingHeader";
import { Step, Timer } from '../stores/ItemStore'
import { RootStore } from '../stores/RootStore'
import { inject } from "mobx-react";

interface Props {
    match: any;
    store: RootStore;
}

interface Timer {

}

interface State {
    timer: Timer | null;
    startedTimerAt: Date | null;
    minutesRemaining: number;
    secondsRemaining: number;
}

@inject('store')
@observer
export default class CookingPage extends React.Component<Props, State> {

    stepIndex: number = 0;

    enableSound: boolean = false;

    state: {
        timer: null;
        startedTimerAt: null;
        minutesRemaining: 0;
        secondsRemaining: 0;
    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 39) {
                this.goToNextStep();
            } else if (e.keyCode === 37) {
                this.goToPreviousStep();
            }
        });
        
        setInterval(() => {
            if (this.state && this.state.timer && this.state.startedTimerAt) {
                const time = Math.floor(this.state.timer.duration - (Math.abs(new Date() - this.state.startedTimerAt!) / 1000))

                if (time <= 0) {
                    this.setState({ timer: null })
                } else {
                    const minutes = Math.floor(time / 60)
                    const seconds = time - minutes * 60;

                    this.setState({ minutesRemaining: minutes, secondsRemaining: seconds })
                }
            }
        }, 1000)
    }

    toggleSound = (newEnableSound: boolean) => {
        this.enableSound = newEnableSound;
    }

    goToNextStep = () => {
        if (this.currentStep().backgroundTimer) {
            this.setState({ timer: this.currentStep().backgroundTimer, startedTimerAt: new Date() })
        }

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


                <div className="timer">
                    {this.state && this.state.timer &&
                        <span>
                            <span className="name">{this.state && this.state.timer && this.state.timer.name}</span>
                            <span className="timeLeft">{this.state.minutesRemaining}:{this.state.secondsRemaining}</span>
                        </span>
                    }
                </div>

                <div className="progress-bar">
                    <div className="completed-progress" style={{ width: this.getProgressAsPercentage() }}></div>
                </div>
            </div>
        );
    }
}
