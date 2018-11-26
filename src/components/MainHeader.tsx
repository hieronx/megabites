import * as React from "react";
import "./../assets/scss/MainHeader.scss";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface MainHeaderProps {
}

export default class MainHeader extends React.Component<MainHeaderProps, undefined> {
    render() {
        return (
            <header>
                <div className="logo">
                    <Link to={`/`}>
                        <h1>MegaBites</h1>
                    </Link>
                </div>

                <div className="nav">
                    <ul>
                        <li>Recipes</li>
                        <li>Shopping list</li>
                        <li>Inventory</li>
                    </ul>
                </div>
            </header>
        );
    }
}
