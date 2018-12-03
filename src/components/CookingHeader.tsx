import * as React from "react";
import "./../assets/scss/CookingHeader.scss";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface CookingHeaderProps {
}

export default class CookingHeader extends React.Component<CookingHeaderProps, undefined> {
    render() {
        return (
            <header>
                <div className="logo">
                    <h1>Spaghetti Aglio e Olio</h1>
                </div>

                <div className="nav">
                    <Link to="/recipes/3" className="close-button">&times;</Link>
                </div>
            </header>
        );
    }
}
