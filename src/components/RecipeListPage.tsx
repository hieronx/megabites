import * as React from "react";
import { inject, observer } from 'mobx-react'

import { RootStore } from '../stores/RootStore'
import { List } from '../stores/ListStore'
import "./../assets/scss/RecipeListPage.scss";
import RecipeCarousel from "./RecipeCarousel";
import MainHeader from "./MainHeader";

export interface Props {
    store: RootStore;
}

@inject("store")
@observer
export default class RecipeListPage extends React.Component<Props, undefined> {
    render() {
        return (
            <div className="app">
                <MainHeader />

                <div className="content">
                    {this.props.store!.listStore.list.map((list: List) =>
                        <RecipeCarousel name={list.name} items={this.props.store!.itemStore.byListId(list.id)} />
                    )}
                </div>
            </div>
        );
    }
}
