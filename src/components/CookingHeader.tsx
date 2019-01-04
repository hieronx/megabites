import * as React from "react";
import "./../assets/scss/CookingHeader.scss";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface CookingHeaderProps {
    onToggleSound(newEnableSound: boolean): void;
    isEnabled: boolean;
}

export default class CookingHeader extends React.Component<CookingHeaderProps, undefined> {
    render() {
        return (
            <header>
                <div className="logo">
                    <h1>Spaghetti Aglio e Olio</h1>
                </div>

                <div className="nav">
                    <a href="#" className="sound-button" onClick={() => this.props.onToggleSound(!this.props.isEnabled)}>
                        {!this.props.isEnabled && <img src="https://cdn4.iconfinder.com/data/icons/proglyphs-multimedia/512/Volume_Off-512.png" style={{ width: '30px', height: '30px' }} />}
                        {this.props.isEnabled && <img src="https://cdn0.iconfinder.com/data/icons/simple-basic-i/31/01-512.png" style={{ width: '26px', height: '26px' }} />}
                    </a>
                    <Link to="/recipes/3" className="close-button">&times;</Link>
                </div>
            </header>
        );
    }
}
